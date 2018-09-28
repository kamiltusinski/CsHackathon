import * as React from 'react';

import { Container, Header } from 'semantic-ui-react';

class NotFound extends React.Component {
    render() {
        return (
            <Container text>
                <Header as="h3">404 Page Not Found</Header>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </Container>
        );
    }
}

export default NotFound;
