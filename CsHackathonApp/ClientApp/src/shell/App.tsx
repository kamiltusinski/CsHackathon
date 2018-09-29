import * as React from 'react';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import { loadProgressBar } from 'axios-progress-bar';

import './App.css';

import Shell from './Shell';
import Routes from './Routes';
import GridViewStore from '../components/GridViewStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    routing: routingStore,
    gridViewStore: GridViewStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

loadProgressBar({ minimum: 0.1, showSpinner: false });

class App extends React.Component {
    public render() {
        return (
            <Provider {...stores}>
                <>
                    <Shell>
                        <Router history={history}>
                            <Routes />
                        </Router>
                    </Shell>
                </>
            </Provider>
        );
    }
}

export default App;
