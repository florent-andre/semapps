import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LoginForm, Notification, useGetIdentity, useTranslate } from 'react-admin';
import { Card, Avatar, makeStyles, createTheme, ThemeProvider, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Link, useLocation, Redirect } from 'react-router-dom';
import SignupForm from './SignupForm';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '1px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)'
  },
  card: {
    minWidth: 300,
    marginTop: '6em'
  },
  avatar: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: theme.palette.secondary[500]
  },
  switch: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const LocalLoginPage = props => {
  const { theme, title, classes: classesOverride, className, ...rest } = props;
  const classes = useStyles(props);
  const location = useLocation();
  const translate = useTranslate();
  const muiTheme = useMemo(() => createTheme(theme), [theme]);
  const searchParams = new URLSearchParams(location.search);
  const isSignup = searchParams.has('signup');
  const redirectTo = searchParams.get('redirect');
  const { identity, loading } = useGetIdentity();

  if (loading) {
    return null;
  } else if (identity?.id) {
    // Do not show login page if user is already connected
    return <Redirect to={redirectTo || '/'} />;
  } else {
    return (
      <ThemeProvider theme={muiTheme}>
        <div className={classnames(classes.main, className)} {...rest}>
          <Card className={classes.card}>
            <div className={classes.avatar}>
              <Avatar className={classes.icon}>
                <LockIcon />
              </Avatar>
            </div>
            {isSignup ? (
              <SignupForm redirectTo={redirectTo} delayBeforeRedirect={3000} />
            ) : (
              <LoginForm redirectTo={redirectTo} />
            )}
            <div className={classes.switch}>
              {isSignup ? (
                <Link to="/login">
                  <Typography variant="body2">{translate('auth.action.login')}</Typography>
                </Link>
              ) : (
                <Link to="/login?signup=true">
                  <Typography variant="body2">{translate('auth.action.signup')}</Typography>
                </Link>
              )}
            </div>
          </Card>
          <Notification />
        </div>
      </ThemeProvider>
    );
  }
};

LocalLoginPage.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.object
};

export default LocalLoginPage;
