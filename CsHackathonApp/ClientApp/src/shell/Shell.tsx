import * as React from 'react';

import { inject, observer } from 'mobx-react';

import { RouterStore } from 'mobx-react-router';
import AppNav from './AppNav';
import { Container } from 'semantic-ui-react';

// tslint:disable-next-line:import-name
import DevTools from 'mobx-react-devtools';

@inject('routing')
@observer
class Shell extends React.Component<{ routing?: RouterStore }> {
    render() {
        return (
            <>
                <AppNav />

                <Container style={{ height: '100%', padding: '71px 15px 15px 15px' }} fluid>
                    {this.props.children}
                </Container>

                {false && <DevTools />}
            </>
        );
    }
}

export default Shell;
