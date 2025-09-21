import { __ } from "../components/lang_handler"

function calculateMBTI({mbtiAnswers, setMbtiPoints}) {
    let points = {IE: 0, SN: 0, TF: 0, JP: 0}
    mbtiAnswers = mbtiAnswers || []
    
    if (mbtiAnswers.length === 0) {
        setMbtiPoints(points)
        return
    }

    mbtiAnswers.forEach((answer) => {        
        points[answer.dimension] += answer.answer * answer.dimension_value
    })
     
    setMbtiPoints(points)
}

export function showMbtiCode(points){
    return (
        (points['IE'] <= 0 ? 'I' : 'E') +
        (points['SN'] <= 0 ? 'S' : 'N') +
        (points['TF'] <= 0 ? 'T' : 'F') +
        (points['JP'] <= 0 ? 'J' : 'P')
    )
}

export function nameMbtiCodeParts(points) {
    return {
        'IE': points['IE'] <= 0 ? __('Introverted') : __('Extraverted'),
        'SN': points['SN'] <= 0 ? __('Sensing') : __('Intuitive'),
        'TF': points['TF'] <= 0 ? __('Thinking') : __('Feeling'),
        'JP': points['JP'] <= 0 ? __('Judging') : __('Perceiving'),
    }
}

export default calculateMBTI;