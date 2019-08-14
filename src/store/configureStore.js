import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './modules';
import penderMiddleware from 'redux-pender';
import { routerMiddleware } from 'connected-react-router'

//리덕스 스토어 생성 함수 / root.js 에서 사용됨
export default function configureStore(history) {

    const store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                penderMiddleware()
            ), //미들웨어 적용
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 리덕스 개발도구 적용
        )
    );

    return store
} 
