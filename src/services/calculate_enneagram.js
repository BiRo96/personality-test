function calculateEnneagram({enneagramAnswers, setEnneagramPoints}) {
    let points = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0}
    enneagramAnswers = enneagramAnswers || []
    
    if (enneagramAnswers.length === 0) {
        setEnneagramPoints(points)
        return
    }

    enneagramAnswers.forEach((answer) => {        
        points[answer.type] += answer.answer
    })
      
    setEnneagramPoints(points)
}

export function getDominantEnneagram(points) {
    let dominantType = null
    let maxPoints = -Infinity

    for (const [type, point] of Object.entries(points)) {
        if (point > maxPoints && point > 0) {
            maxPoints = point
            dominantType = type
        }
    }

    return dominantType
}

export default calculateEnneagram;