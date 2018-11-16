import { FETCH_QUESTIONS, CREATE_QUESTION } from '../actions/questions'



export default function(state = {}, action) {

    switch(action.type) {
        
        case FETCH_QUESTIONS:
            return action.payload;
        case CREATE_QUESTION:
            return state.concat(action.payload);
    }

    return state; 
}