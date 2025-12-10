const LessonOneAnswers = {
    q1: "True",
    q2: "False",
    q3: "True",
    q4: "False",
    q5: "True",
    q6: "False",
    q7: "True",
    q8: "False",
    q9: "False",
    q10: "False",
    q11: "True",
    q12: "True",
    q13: "B",
    q14: "B",
    q15: "B",
    q16: "B",
    q17: "D",
    q18: "A",
    q19: "C",
    q20: "A",
    q21: "B",
    q22: "A",
    q23: "B",
    q24: "B",
    q25: "B",

};

const LessonTwoAnswers = {
    q1: "B",
    q2: "C",
    q3: "B",
    q4: "C",
    q5: "B",
    q6: "A",
    q7: "D",
    q8: "True",
    q9: "False",
    q10: "False",
}

const LessonThreeAnswers = {
    q1: "B",
    q2: "C",
    q3: "B",
    q4: "C",
    q5: "D",
    q6: "A",
    q7: "A",
    q8: "False",
    q9: "False",
    q10: "True",
}

const LessonFourAnswers = {
    q1: "B",
    q2: "C",
    q3: "B",
    q4: "C",
    q5: "D",
    q6: "B",
    q7: "B",
    q8: "B",
    q9: "C",
    q10: "B",
}
function checkAnswers(formId, answerKey) {
    let score = 0;

    for (let question in answerKey) {
        const selected = document.querySelector(`#${formId} input[name="${question}"]:checked`);
        if (selected && selected.value === answerKey[question]) {
            score++;
        }
    }

    alert(`You scored ${score}!`);
}