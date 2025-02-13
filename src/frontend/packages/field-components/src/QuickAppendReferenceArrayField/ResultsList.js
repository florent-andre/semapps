import React, { useEffect, useMemo, useState } from 'react';
import {
  getResources,
  useDataProvider,
  useRecordContext,
  linkToRecord,
  useGetResourceLabel,
  useTranslate
} from 'react-admin';
import { shallowEqual, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  makeStyles,
  CircularProgress
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ErrorIcon from '@material-ui/icons/Error';
import { useDataServers, useDataModel } from '@semapps/semantic-data-provider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
    paddingBottom: 0
  },
  primaryText: {
    width: '30%'
  },
  secondaryText: {
    fontStyle: 'italic',
    color: 'grey'
  }
}));

const getServerName = (resourceUri, dataServers) => {
  const server = dataServers && Object.values(dataServers).find(server => resourceUri.startsWith(server.baseUrl));
  return server ? server.name : 'Inconnu';
};

const ResultsList = ({ keyword, source, reference, appendLink, switchToCreate }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const translate = useTranslate();
  const dataProvider = useDataProvider();
  const dataServers = useDataServers();
  const record = useRecordContext();

  const resources = useSelector(getResources, shallowEqual);
  const referenceDefinition = useMemo(() => {
    return resources.find(r => r.name === reference);
  }, [resources, reference]);
  const getResourceLabel = useGetResourceLabel();
  const dataModel = useDataModel(reference);

  if (dataModel && Object.keys(dataModel).length > 0 && !dataModel?.fieldsMapping?.title) {
    throw new Error(`No fieldsMapping.title config found for ${reference} dataModel`);
  }

  const search = useMemo(
    () =>
      debounce(keyword => {
        dataProvider
          .getList(reference, {
            pagination: { page: 1, perPage: 100 },
            sort: { field: dataModel?.fieldsMapping?.title, order: 'ASC' },
            filter: { q: keyword, _predicates: [dataModel.fieldsMapping.title], _servers: '@all' }
          })
          .then(({ data }) => {
            const existingLinks = record[source]
              ? Array.isArray(record[source])
                ? record[source]
                : [record[source]]
              : [];
            const newLinks = data.filter(record => !existingLinks.includes(record.id));
            setResults(newLinks);
            setLoaded(true);
            setLoading(false);
          })
          .catch(e => {
            setLoading(false);
          });
      }, 700),
    [dataProvider, dataModel, record, source, reference, setResults, setLoading, setLoaded]
  );

  useEffect(() => {
    if (!keyword) {
      return undefined;
    } else {
      setLoading(true);
      setLoaded(false);
      search(keyword);
    }
    return () => search.cancel();
  }, [keyword, search, setLoading]);

  if (!keyword) return null;

  return (
    <List dense className={classes.root}>
      {loaded &&
        results.map(resource => (
          <ListItem key={resource.id} button onClick={() => appendLink(resource.id)}>
            <ListItemAvatar>
              <Avatar>{React.createElement(referenceDefinition.icon)}</Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.primaryText} primary={resource[dataModel.fieldsMapping.title]} />
            <ListItemText className={classes.secondaryText} primary={getServerName(resource.id, dataServers)} />
            <ListItemSecondaryAction>
              <a href={linkToRecord('/' + reference, resource.id, 'show')} target="_blank" rel="noopener noreferrer">
                <IconButton edge="end">
                  <VisibilityIcon />
                </IconButton>
              </a>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      {loaded && results.length === 0 && (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ErrorIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText className={classes.primaryText} primary={translate('ra.navigation.no_results')} />
        </ListItem>
      )}
      {loaded && referenceDefinition.hasCreate && (
        <ListItem button onClick={switchToCreate}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.primaryText}
            primary={translate('ra.page.create', { name: getResourceLabel(reference, 1) })}
          />
        </ListItem>
      )}
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center" height={150}>
          <CircularProgress size={60} thickness={6} />
        </Box>
      )}
    </List>
  );
};

export default ResultsList;
