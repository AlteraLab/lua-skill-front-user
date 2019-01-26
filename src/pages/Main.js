import React, { Component, Fragment } from 'react';

import { Redirect } from 'react-router-dom'
import { Container, Header, Button } from 'semantic-ui-react';

class Main extends Component {

    _createHub = () => {
        console.log('create hub')
    }

    render() {
        return (
            <Fragment><div>
                <Button onClick={this._createHub}>허브 등록</Button>

                <div>
                    <ul>
                        <li>userInfo: </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div></Fragment>
        )
    }
}

export default Main;