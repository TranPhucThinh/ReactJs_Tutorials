import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './Pages/DetailPage';
import ListPage from './Pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature() {
  const match = useRouteMatch();

  return (
    <div>
      TODO SHARE UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
