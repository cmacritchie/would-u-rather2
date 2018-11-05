export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

export function sendQuestions(question) {
    return{        
        type:FETCH_QUESTIONS,
        payload:question
    }

}