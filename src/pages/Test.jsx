import { useEffect, useState } from 'react'
import calculateMBTI from '../services/calculate_mbti'
import calculateEnneagram from '../services/calculate_enneagram'
import mbti_questions_hu from '../data/mbti_questions_hu.json'
import enneagram_questions_hu from '../data/enneagram_questions_hu.json'
import mbti_questions_en from '../data/mbti_questions_en.json'
import enneagram_questions_en from '../data/enneagram_questions_en.json'
import TestForm from '../partials/TestForm'
import LangHandler, { __ } from '../components/lang_handler'

var mbti_questions_translations = {
    'en': mbti_questions_en,
    'hu': mbti_questions_hu
}
var enneagram_questions_translations = {
    'en': enneagram_questions_en,
    'hu': enneagram_questions_hu
}

function Test() {
    let lang = LangHandler();
    let mbti_questions = mbti_questions_translations[lang]
    let enneagram_questions = enneagram_questions_translations[lang]

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
                {__("Test page")}
            </div>

            <TestForm name={"MBTI"} questions={mbti_questions} answers={mbtiAnswers} setAnswers={setMbtiAnswers} points={mbtiPonts} />

            <hr className='my-6' />

            <TestForm name={"Enneagram"} questions={enneagram_questions} answers={enneagramAnswers} setAnswers={setEnneagramAnswers} points={enneagramPoints} />

        </>
    )    
}

export default Test;