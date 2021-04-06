import React, { useState, useEffect, createElement } from 'react';
import { ArrayField, useDataProvider, useResourceContext } from 'react-admin';
import { default as FilteredArrayField } from './FilteredArrayField';
import { Typography, Box } from '@material-ui/core';

/**
 * @example 1 : simple group label
 * <GroupedArrayField
 *   source="property"
 *   groupReference="RAresource"
 *   groupLabel="property of RAresource display"
 *   groupVariant="Typography MaterialUI variant"
 *   filterProperty="property of source filtered by groupReference"
 * >
 *   <SingleFieldList>
 *   </SingleFieldList>
 * </GroupedArrayField>
 */

/**
 * @example 2 : custom group label
 * <GroupedArrayField
 *   source="property"
 *   groupReference="RAresource"
 *   groupComponent={({record, ...otherProps })=>
 *     <RightLabel label={record['property of RAresource display']}/>
 *   }
 *   filterProperty="property of source filtered by groupReference"
 * >
 *   <SingleFieldList>
 *   </SingleFieldList>
 * </GroupedArrayField>
 */

const GroupedArrayField = ({
  children,
  groupReference,
  groupLabel,
  filterProperty,
  groupComponent,
  groupVariant,
  ...otherProps
}) => {
  const dataProvider = useDataProvider();
  const [groups, setGroups] = useState();

  useEffect(() => {
    if (!groups) {
      dataProvider.getResources().then(resources => {
        const resource = resources.data[groupReference];
        dataProvider
          .getList(groupReference, { '@id': resource.containerUri })
          .then(groups => {
            setGroups(groups.data);
          })
          .catch(e => {
            setGroups([]);
          });
      });
    }
  }, [groups]);

  return (
    <>
      {groups?.map((group, index) => {
        let filter = {};
        filter[filterProperty] = group.id;
        return (
          <Box key={index}>
            {groupComponent && groupComponent(group)
            // createElement(groupComponent,{record:group})
            }
            {!groupComponent && (
              <Typography variant={groupVariant} align="left" noWrap>
                {group[groupLabel]}
              </Typography>
            )}

            <FilteredArrayField {...otherProps} filter={filter}>
              {children}
            </FilteredArrayField>
          </Box>
        );
      })}
    </>
  );
};

GroupedArrayField.defaultProps = {
  addLabel: true
};

export default GroupedArrayField;
