const questions =[
    {
        question : "which is largest animal in the world?",
        answers :[
            { text:"shark", correct:"false"},
            { text:"Blue Whale", correct:"true"},
            { text:"Elepent", correct:"false"},
            { text:"Giraffe", correct:"false"}
        ]
    },
    {
        question : "which is largest desert in the world?",
        answers :[
            { text:"kalahari", correct:"false"},
            { text:"gobi", correct:"false"},
            { text:"sahara", correct:"false"},
            { text:"Antarctica", correct:"true"}
        ]
    },
    {
        question : "which is the smallest country in the world?",
        answers :[
            { text:"asia", correct:"false"},
            { text:"australia", correct:"true"},
            { text:"arctic", correct:"false"},
            { text:"africa", correct:"false"}
        ]
    },
    {
        question : "which is the smallest city in the world?",
        answers :[
            { text:"Dhaka", correct:"true"},
            { text:"Dubai", correct:"false"},
            { text:"noakhali", correct:"false"},
            { text:"borisal", correct:"false"}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIdex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIdex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIdex];
    let questionNo = currentQuestionIdex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.currect = answer.correct
        }
        button.addEventListener('click', selectAnswer);
    })
};

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add('correct');
        score ++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.Disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length }`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIdex ++;
    if(currentQuestionIdex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIdex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();