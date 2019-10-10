import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//리덕스 설정
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

//리덕스 사가 추가
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

//리덕스 사가 실행
sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
