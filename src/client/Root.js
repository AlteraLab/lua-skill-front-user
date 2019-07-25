import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
//import { Router } from 'react-router-dom';
import App from 'shared/App';
import configureStore from '../store/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import {createBrowserHistory as createHistory} from 'history';
//import {createHashHistory as createHistory} from 'history';

const Root = () => {

    const history = createHistory({
        basename: process.env.PUBLIC_URL
    });
    
    const store = configureStore(history)

    //리덕스 store 적용
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    )
};

export default Root;




