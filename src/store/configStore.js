import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import { createLogger } from 'redux-logger';
import penderMiddleware from 'redux-pender';

//리덕스 스토어 생성 함수
const store = createStore(
  modules,
  applyMiddleware(createLogger(), penderMiddleware()) //미들웨어 적용
);

export default store;