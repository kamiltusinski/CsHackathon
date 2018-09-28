import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

import Grid from '../components/Grid';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/grid" component={Grid} />
                <Route exact path="/" component={Grid} />

                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
