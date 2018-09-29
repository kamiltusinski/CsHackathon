import * as React from 'react';

import { inject, observer } from 'mobx-react';

import { RouterStore } from 'mobx-react-router';
import AppNav from './AppNav';
import { Container } from 'semantic-ui-react';

// tslint:disable-next-line:import-name
import DevTools from 'mobx-react-devtools';

import './Shell.css';

@inject('routing')
@observer
class Shell extends React.Component<{ routing?: RouterStore }> {
    render() {
        return (
            <>
                <AppNav />
                <Container fluid className="view-container">
                    {this.props.children}
                </Container>

                {false && <DevTools />}
            </>
        );
    }
}

export default Shell;
