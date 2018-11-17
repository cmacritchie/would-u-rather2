
import { USER_SELECTED, USER_LOGGEDOFF } from '../actions/users'


export default function(state = {}, action) {
    switch(action.type) {
        case USER_SELECTED:
            return action.payload;
        case USER_LOGGEDOFF:
            return action.payload;
    }

    return state;   
}