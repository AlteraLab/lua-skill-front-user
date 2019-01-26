import React, { Component } from 'react';
import { Container, Header, Button, Divider } from 'semantic-ui-react';

class NotFound extends Component {

    render() {
        return (
            <Container text>
                <span>404 not found</span>
            </Container>
        )
    }
}

export default NotFound;