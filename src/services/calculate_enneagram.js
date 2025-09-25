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

export function getTritype(points) {
    let sorted = Object.entries(points).sort((a, b) => b[1] - a[1]);

    // Determine the highest scoring type in each center
    let head_types = ['5', '6', '7'];
    let head_type_chosen = false;
    let heart_types = ['2', '3', '4'];
    let heart_type_chosen = false;
    let body_types = ['8', '9', '1'];
    let body_type_chosen = false;
    
    let core_types = {
        'head': null,
        'heart': null,
        'body': null
    };

    // Select the highest scoring type from each center
    for (const [type, point] of sorted) {
        
        if (head_types.includes(type) && !head_type_chosen && point > 0) {
            core_types['head'] = type;
            head_type_chosen = true;
        } else if (heart_types.includes(type) && !heart_type_chosen && point > 0) {
            core_types['heart'] = type;
            heart_type_chosen = true;
        } else if (body_types.includes(type) && !body_type_chosen && point > 0) {
            core_types['body'] = type;
            body_type_chosen = true;
        }
        console.log(type, point, head_type_chosen, heart_type_chosen, body_type_chosen);

        if (head_type_chosen && heart_type_chosen && body_type_chosen) {
            break;
        }
    }

    let tritype = {        
        'dominant': null,
        'second': null,
        'third': null
    };
    let tritype_types = [];

    // Collect the chosen core types
    for (const [key, value] of Object.entries(core_types)) {
        if (value) {
            tritype_types.push(value);
        }
    }

    // Sort the tritype types based on their points
    tritype_types.sort((a, b) => points[b] - points[a]);

    // Assign the tritype values if we have three types
    if (tritype_types.length === 3) {
        tritype['dominant'] = tritype_types[0];
        tritype['second'] = tritype_types[1];
        tritype['third'] = tritype_types[2];
        return tritype;
    } else {
        // Not enough data to determine a tritype
        return null;
    }
}

export default calculateEnneagram;