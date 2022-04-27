import { handleActions } from "redux-actions";
import { INDEX } from "../Constants/action";


const initialState = 1;

const reset = () => initialState;

const setIndex = (_, index) => index.index;



export default handleActions(

    {
        [INDEX.RESET_INDEX]: reset,
        [INDEX.SET_INDEX]: setIndex
    },
    initialState
);