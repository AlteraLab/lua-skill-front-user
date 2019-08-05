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

    // 참고 : https://github.com/supasate/connected-react-router

    // history, 앱 안에서 어떤 네비게이션 스탭을 밟았는지에 대한 정보를 가진 객체
    const history = createHistory({
        // 모든 위치의 기본 url
        basename: process.env.PUBLIC_URL
    });
    
    // history를 최종적으로 combineReducer 에게 넘겨주고
    // 루트 리듀서가 router 리듀서를 만듬으로써 connectRouter 사용가능
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




