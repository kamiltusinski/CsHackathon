import * as React from 'react';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

// tslint:disable-next-line:import-name
import DevTools from 'mobx-react-devtools';

import { loadProgressBar } from 'axios-progress-bar';

import './App.css';

import Shell from './Shell';
import Routes from './Routes';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

loadProgressBar({ minimum: 0.1, showSpinner: false });

class App extends React.Component {
    public render() {
        return (
            <Provider {...stores}>
                <div>
                    <Shell>
                        <Router history={history}>
                            <Routes />
                        </Router>
                    </Shell>

                    {true && <DevTools />}
                </div>
            </Provider>
        );
    }
}

export default App;
