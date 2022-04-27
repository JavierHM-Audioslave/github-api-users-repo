import { all } from "redux-saga/effects";
import usersWatcher from "./usersSagas";


function *rootSaga() {
    yield all([
        usersWatcher()
    ]);
};

export default rootSaga;