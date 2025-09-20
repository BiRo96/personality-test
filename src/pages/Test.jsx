import { useEffect, useState } from 'react'
import calculateMBTI from '../services/calculate_mbti'
import mbti_questions from '../data/mbti_questions.json'
import Likert from '../components/likert'

function Test() {
    const [mbtiAnswers, setMbtiAnswers] = useState(mbti_questions.map(q => ({id: q.id, answer: 0})))
    const [mbtiPonts, setMbtiPoints] = useState({'IE' : 0, 'SN': 0, 'TF': 0, 'JP': 0})
    const [enneagramAnswers, setEnneagramAnswers] = useState(mbti_questions.map(q => ({id: q.id, answer: 0})))
    const [enneagramPoints, setEnneagramPoints] = useState({'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0})

    useEffect(() => {
        calculateMBTI({mbtiAnswers, setMbtiPoints})
    }, [mbtiAnswers])
    

    return (
        <>
            <div className='flex flex-col font-bold text-2xl mb-4'>
                Test page
            </div>

            <div className='flex flex-row'>

                <div className='flex flex-col flex-grow'>
                    {mbti_questions.map((question) => (
                        <div key={"mbti-" + question.id} className='flex flex-col border p-2 m-2'>
                            <p>{question.question}</p>
                            <Likert question={question} answers={mbtiAnswers} setAnswers={setMbtiAnswers}/>
                        </div>
                    ))}
                </div>


                <div className='flex flex-col min-w-60'>
                    <div className='sticky top-0 pt-5'>
                        MBTI Points:
                        {Object.keys(mbtiPonts).map((key) => (
                            <p key={key}>{key}: {mbtiPonts[key]}</p>
                        ))}
                    </div>
                    
                </div>

            </div>

            <hr className='my-6' />

            <div className='flex flex-row'>

                <div className='flex flex-col flex-grow'>
                    {mbti_questions.map((question) => (
                        <div key={"enneagram-" + question.id} className='flex flex-col border p-2 m-2'>
                            <p>{question.question}</p>
                            
                        </div>
                    ))}
                </div>

                <div className='flex flex-col min-w-60'>
                    <div className='sticky top-0 pt-5'>
                        Enneagram Points:
                        {Object.keys(enneagramPoints).map((key) => (
                            <p key={key}>{key}: {enneagramPoints[key]}</p>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )    
}

export default Test;