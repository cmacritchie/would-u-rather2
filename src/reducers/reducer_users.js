import { FETCH_USERS } from '../actions/users'


export default function(state = null, action) {
 
    switch(action.type) {
        
        case FETCH_USERS:
            return action.payload;
    }

    return state; 
}