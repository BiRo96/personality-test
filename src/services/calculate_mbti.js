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

export default calculateMBTI;