import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

import GridView from '../components/GridView';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/grid" component={GridView} />
                <Route exact path="/" component={GridView} />

                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
