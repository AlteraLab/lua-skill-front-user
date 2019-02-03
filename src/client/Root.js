import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'shared/App';
import store from '../store/configStore';

const Root = () => {
    
    //리덕스 store 적용
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
};

export default Root;