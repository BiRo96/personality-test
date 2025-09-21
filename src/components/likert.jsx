import LangHandler, { __ } from "./lang_handler";

function Likert({answers, setAnswers, question,}) {
    let lang = LangHandler();

    function getAnswerText(value) {
        switch(value) {
            case -2:
                return __("Strongly Disagree");
            case -1:
                return __("Disagree");
            case 0:
                return __("Neutral");
            case 1:
                return __("Agree");
            case 2:
                return __("Strongly Agree");
            default:
                return "";
        }
    }

    return (
        <div>
            {[-2,-1,0,1,2].map((value) => (
                <button 
                    key={"mbti-" + question.id + "-answer-" + value}
                    className={`m-1 p-2 border w-full lg:w-fit ${answers.find(a => a.id === question.id).answer === value ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => {
                    setAnswers(answers.map(a => a.id === question.id ? {...a, answer: value} : a))
                    }}
                >
                    {getAnswerText(value)}
                </button>
            ))}
        </div>
    )
}

export default Likert