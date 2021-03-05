import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  subTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  subTitleSpan: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(0.75),
    paddingBottom: theme.spacing(0.75),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  }
}));

const LargeLabel = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.subTitle}>
      <span className={classes.subTitleSpan}>
        {children}
      </span>
    </Typography>
  );
};

export default LargeLabel;
