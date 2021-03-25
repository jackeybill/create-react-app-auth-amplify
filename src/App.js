import React, { Suspense } from 'react';
import './App.scss';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { APP_ROUTE_PATH } from './config/app';
import { API_KEY } from './config/api';

const ClassificationSummaryPage = React.lazy(() => {
  return import('./view/ClassificationSummary/pages/ClassificationSummaryPage');
});

const ProcessingHistoryPage = React.lazy(() => {
  return import('./view/ProcessingHistory/pages/ProcessingHistoryPage');
});

const CaseIntakePage = React.lazy(() => {
  return import('./view/CaseIntake/pages/CaseIntakePage');
});

const LoginPage = React.lazy(() => {
  return import('./view/User/pages/LoginPage');
});

const App = props => {
  //console.log('App Launch', props)
  let routes = (
    <Switch>
      <Route path={APP_ROUTE_PATH.LOGIN} exact render={props => <LoginPage {...props} />} />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path={APP_ROUTE_PATH.CLASSIFICATION_SUMMARY} render={props => <ClassificationSummaryPage {...props} />} />
        <Route path={APP_ROUTE_PATH.PROCESSING_HISTORY} render={props => <ProcessingHistoryPage {...props} />} />
        <Route path={APP_ROUTE_PATH.CASE_INTAKE} render={props => <CaseIntakePage {...props} />} />
        <Route path={APP_ROUTE_PATH.LOGIN} exact render={props => <LoginPage {...props} />} />
      </Switch>
    );
  };

  return (
    <React.Fragment>
      {(props.isLoggedOut && !props.isAuthenticated) ? <Redirect to={props.redirectPath} /> : null}
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user && state.auth.user[API_KEY.AUTH_TOKEN] !== null,
    isLoggedOut: state.auth.isLoggedOut,
    redirectPath: state.shared.redirectPath
  };
};


export default withRouter(
  connect(
    mapStateToProps
  )(App)
);
