function Likert({answers, setAnswers, question,}) {
    return (
        <div>
            {[-2,-1,0,1,2].map((value) => (
                <button 
                    key={"mbti-" + question.id + "-answer-" + value}
                    className={`m-1 p-2 border ${answers.find(a => a.id === question.id).answer === value ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => {
                    setAnswers(answers.map(a => a.id === question.id ? {...a, answer: value} : a))
                    }}
                >
                    {value}
                </button>
            ))}
        </div>
    )
}

export default Likert