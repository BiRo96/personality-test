import Likert from "../components/likert"
import PieChart from "../components/pie_chart"
import BarChart from "../components/bar_chart"

function TestForm(
    {
        name,
        questions, 
        answers, 
        setAnswers, 
        points
    }
) {

    function renderChart() {
        if (name === "MBTI") {
            return <BarChart name={name} points={points} />
        } else if (name === "Enneagram") {
            return <PieChart name={name} points={points} />
        }
    }

    return (
        <div className='flex flex-row'>

            <div className='flex flex-col flex-grow'>
                {questions.map((question) => (
                    <div key={name + "-" + question.id} className='flex flex-col border p-2 m-2'>
                        <p>{question.question}</p>
                        <Likert question={question} answers={answers} setAnswers={setAnswers}/>
                    </div>
                ))}
            </div>

            <div className='flex flex-col w-60'>
                <div className='sticky top-0 pt-5'>
                    {renderChart()}
                </div>
            </div>

        </div>
    )
}

export default TestForm