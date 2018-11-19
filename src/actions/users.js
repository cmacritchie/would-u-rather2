export const FETCH_USERS = 'FETCH_USERS'
export const USER_SELECTED = 'USER_SELECTED'
export const USER_LOGGEDOFF = 'USER_LOGGEDOFF'
import { getUser } from '../../api/API.js'

export function sendUsers(users) {
    return{
        
        type:FETCH_USERS,
        payload:users
    }

}

export function selectUser(user) {
    //SelectUSer is an actionCreator it needs to retuan an action
    //an object with a type property

    

    return{
        type:USER_SELECTED, //need type
        payload: user
    }
    
}

export function getAllUsers() {
    
    return(dispatch) => {

        return getUser()
        .then(({data}) => {
            // dispatch({type:'FETCH_USERS',
            //         payload: data});
            //         console.log("done 7")

            dispatch(sendUsers(data));
                    
                    
        });

    }
}

export function logOut() {
    return{
        type: USER_LOGGEDOFF,
        payload: {}
    }
}