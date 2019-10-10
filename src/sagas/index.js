import { all } from 'redux-saga/effects';
import TestSaga from './TestSaga';


export default function* rootSaga() {
    yield all([
        TestSaga(),
    ])
}