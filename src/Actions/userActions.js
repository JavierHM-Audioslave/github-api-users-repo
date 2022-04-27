import { USERS } from "../Constants/action";

/**
 * NOT IN USE
 * @param {*} param 
 * @returns 
 */
const willSetUsers = (param = null) => {
    return {
        type : USERS.WILL_SET_USERS,
        param: param
    }
};


/**
 * NOT IN USE
 * @param {*} param 
 * @returns 
 */
const setUsers = (users) => {
    return {
        type: USERS.SET_USERS,
        users: users
    }
}


/**
 * NOT IN USE
 * @param {*} param 
 * @returns 
 */
const cleanStore = () => {
    return {
        type: USERS.CLEAN
    }
}



export const usersActions = {
    willSetUsers,
    setUsers,
    cleanStore
}