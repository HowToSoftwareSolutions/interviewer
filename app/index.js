function createElement(tagName) { 
    return document.createElement(tagName);
}

function createDiv() {
    return createElement("div");
}

function loadData() {
    interviewerQuestions.forEach((question) => {
        const hQuestion = createElement("h3");
        hQuestion.innerHTML = question.questionText;
        document.body.append(hQuestion);
    
        const divAnswers = createElement("ul");;
        document.body.append(divAnswers);
    
        question.answers.forEach((answer) => {
            const divAnswer = createElement("li");;
            divAnswer.innerHTML = answer;
            divAnswers.append(divAnswer);
        });
    });
}
