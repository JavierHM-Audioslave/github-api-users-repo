import { handleActions } from "redux-actions";
import { USERS } from "../Constants/action";


const initialState = null;

const clean = () => initialState;

const setUsers = (_, users) => users.users



export default handleActions(
    {
        [USERS.CLEAN]: clean,
        [USERS.SET_USERS]: setUsers
    },
    initialState
);