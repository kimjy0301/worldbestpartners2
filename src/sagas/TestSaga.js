import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { INCREMENTASYNC } from '../modules/main';
import { isLoading } from '../modules/main';
import { getCounter } from '../modules/main';

function* incrementInner() {

    yield console.log("incrementInner");
    const state = yield select(getCounter);
    console.log(state);

    yield put(isLoading(true));
}

function* watchIncrement() {
    yield console.log("saga");
    yield takeEvery(INCREMENTASYNC, incrementInner);
    yield console.log("saga2");
}


export default function* TestSaga() {
    yield all([
        call(watchIncrement),
    ]);
}