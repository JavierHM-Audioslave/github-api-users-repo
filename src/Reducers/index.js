import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import indexReducer from "./indexReducer";


export default combineReducers({
    users: usersReducer,
    index: indexReducer
});