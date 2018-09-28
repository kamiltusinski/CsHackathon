import * as React from 'react';

import { inject, observer } from 'mobx-react';

import { RouterStore } from 'mobx-react-router';

@inject('routing')
@observer
class Shell extends React.Component<{ routing?: RouterStore }> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Shell;
