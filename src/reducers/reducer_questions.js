import { FETCH_QUESTIONS } from '../actions/questions'


export default function(state = null, action) {
 
    switch(action.type) {
        
        case FETCH_QUESTIONS:
            return action.payload;
    }

    return state; 
}