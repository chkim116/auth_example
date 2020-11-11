import {
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
    SIGN_IN_FAILURE,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from "../modules/user";
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";

function* signUp(action) {
    console.log(action.payload);
    try {
        yield delay(1000);

        yield put({
            type: SIGN_UP_SUCCESS,
        });
        yield put({
            type: SIGN_IN_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_UP_FAILURE,
            payload: err.message,
        });
    }
}

function* signIn(action) {
    console.log(action.payload);
    try {
        yield delay(1000);
        yield put({
            type: SIGN_IN_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_IN_FAILURE,
            payload: err.message,
        });
    }
}

function* logOut() {
    try {
        yield delay(1000);
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOGOUT_FAILURE,
            payload: err.message,
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchSignIn() {
    yield takeLatest(SIGN_IN_REQUEST, signIn);
}

function* watchLogOut() {
    yield takeLatest(LOGOUT_REQUEST, logOut);
}

function* userSaga() {
    yield all([fork(watchSignUp), fork(watchSignIn), fork(watchLogOut)]);
}

export default userSaga;
