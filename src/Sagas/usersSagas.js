import { put, take, takeLatest, call } from "redux-saga/effects";
import { usersActions } from "../Actions/userActions";
import {USERS} from "../Constants/action";
import {consumeAPI} from "../Services/usersService";
import {urlGetUsers, urlGetUsersOfAPagination} from "../Constants/links";
import { cloneDeep } from "lodash";



function *usersHandler(param) {
    
    console.log(param);
    const users = yield call(consumeAPI, urlGetUsersOfAPagination(param));
    if( users.status !== 200 ) {
        throw new Error("La consulta a la API devolviò còdigo de error " + users.status);
    }

    if(users.status >= 500) {
        throw new Error("Error en el servidor. Comunicarse con el desarrollador del frontend y/o administrador de la API.")
    }

    console.log(users.data);
    let specificInfoByUser = [];
    users.data.forEach( async user => {
        try {
            // console.log(user.url)
            const info = await consumeAPI(user.url);
            if( info.status !== 200 ) console.error("La informaciòn del usuario " + info.data.id + " no pudo ser recuperada");
            specificInfoByUser.push(info.data);
        } catch( error ) {
            console.error(error);
        }
    });


    if(!param) yield put(usersActions.cleanStore());
    console.log(specificInfoByUser);
    specificInfoByUser ? console.log("specifibInfoByUser is FULLFILLED") : console.log("specifibInfoByUser is EMPTY");
    

    yield put(usersActions.setUsers(specificInfoByUser));
};



export default function *usersWatcher() {
    // yield takeLatest(USERS.WILL_SET_USERS, usersHandler);
    while(true) {
        const { param } = yield take(USERS.WILL_SET_USERS);
        yield call( usersHandler, param );
    }
};