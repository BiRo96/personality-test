import { useEffect, useState } from 'react'
import calculateMBTI from '../services/calculate_mbti'
import calculateEnneagram from '../services/calculate_enneagram'
import mbti_questions from '../data/mbti_questions.json'
import enneagram_questions from '../data/enneagram_questions.json'
import TestForm from '../partials/TestForm'
import LangHandler from '../components/lang_handler'

function Test() {
    let lang = LangHandler();
    
    const [mbtiAnswers, setMbtiAnswers] = useState(mbti_questions.map(q => ({...q, answer: 0})))
    const [mbtiPonts, setMbtiPoints] = useState({'IE' : 0, 'SN': 0, 'TF': 0, 'JP': 0})
    const [enneagramAnswers, setEnneagramAnswers] = useState(enneagram_questions.map(q => ({...q, answer: 0})))
    const [enneagramPoints, setEnneagramPoints] = useState({'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0})

    useEffect(() => {
        calculateMBTI({mbtiAnswers, setMbtiPoints})
    }, [mbtiAnswers])

    useEffect(() => {
        calculateEnneagram({enneagramAnswers, setEnneagramPoints})
    }, [enneagramAnswers])
    

    return (
        <>
            <div className='flex flex-col font-bold text-2xl mb-4'>
                Test page
            </div>

            <TestForm name={"MBTI"} questions={mbti_questions} answers={mbtiAnswers} setAnswers={setMbtiAnswers} points={mbtiPonts} />

            <hr className='my-6' />

            <TestForm name={"Enneagram"} questions={enneagram_questions} answers={enneagramAnswers} setAnswers={setEnneagramAnswers} points={enneagramPoints} />

        </>
    )    
}

export default Test;