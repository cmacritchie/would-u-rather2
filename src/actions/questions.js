export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
import { saveQuestion } from '../../api/API';

export function sendQuestions(question) {
    return{        
        type:FETCH_QUESTIONS,
        payload:question
    }

}
export function createQuestion(question){
    const saveQ = saveQuestion(question);
    
    return{
        type: CREATE_QUESTION,
        payload: saveQ
    };
}