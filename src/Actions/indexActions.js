import { INDEX } from "../Constants/action";

export const resetIndex = () => {
    return {
        type: INDEX.RESET_INDEX
    }
};


export const setIndex = newBaseIndex => {
    return {
        type: INDEX.SET_INDEX,
        index: newBaseIndex
    }
};