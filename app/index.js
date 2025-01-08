function createElement(tagName, innerHTML) {
    /** * @type {HTMLElement} */
    const element = document.createElement(tagName);
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

function createDiv() {
    return createElement("div");
}

function toggleDisplay(element) {
    const style = element.style;
    const displayStyles = ["none", "block"];
    style.display = style.display == displayStyles[0] ? displayStyles[1] : displayStyles[0];
}

/**
 * sort an array in-place
 * @param {Array} arrItems
 */
function randomSort(arrItems) {
    let arrNew = [];

    let sourceCount;
    while (sourceCount = arrItems.length) {
        console.log(sourceCount);
        const rand = Math.random();
        arrDeleted = arrItems.splice(Math.floor(rand * sourceCount), 1);
        arrNew = arrNew.concat(arrDeleted);
    }

    return arrNew;
}

function loadData() {
    interviewerQuestions = randomSort(interviewerQuestions);
    console.log(interviewerQuestions);

    interviewerQuestions.forEach((question) => {
        const answers = question.answers;

        /** * @type {HTMLHeadingElement} */
        const hQuestion = createElement("h3");
        const spanQuestionText = createElement("span", question.questionText);
        hQuestion.append(spanQuestionText);
        const answerCount = answers.length;
        if (answerCount != 3) {
            const spanAnswerCount = createElement("span", ` ${answerCount} answers`);
            spanAnswerCount.style.color = "green";
            hQuestion.append(spanAnswerCount);
        }
        document.body.append(hQuestion);
    
        /** * @type {HTMLDivElement} */
        const divAnswers = createElement("ul");
        divAnswers.style.display = "none";
        hQuestion.onclick = () => toggleDisplay(divAnswers);
        document.body.append(divAnswers);
    
        answers.forEach((answer) => {
            const divAnswer = createElement("li");;
            divAnswer.innerHTML = answer;
            divAnswers.append(divAnswer);
        });
    });
}
