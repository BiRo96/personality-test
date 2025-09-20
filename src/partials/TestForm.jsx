import Likert from "../components/likert"

function TestForm(
    {
        name,
        questions, 
        answers, 
        setAnswers, 
        points
    }
) {
    return (
        <div className='flex flex-row'>

            <div className='flex flex-col flex-grow'>
                {questions.map((question) => (
                    <div key={"enneagram-" + question.id} className='flex flex-col border p-2 m-2'>
                        <p>{question.question}</p>
                        <Likert question={question} answers={answers} setAnswers={setAnswers}/>
                    </div>
                ))}
            </div>

            <div className='flex flex-col min-w-60'>
                <div className='sticky top-0 pt-5'>
                    {name} Points:
                    {Object.keys(points).map((key) => (
                        <p key={key}>{key}: {points[key]}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TestForm