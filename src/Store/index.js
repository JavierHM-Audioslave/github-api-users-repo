import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers";
import rootSaga from "../Sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? compose (
                applyMiddleware(sagaMiddleware, promiseMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
            )
            : applyMiddleware(sagaMiddleware, promiseMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;