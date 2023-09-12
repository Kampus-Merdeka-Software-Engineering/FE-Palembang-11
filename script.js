
// more button
function showMoreQuestions() {
    window.location.href = "pertanyaan.html";
}

function toggleAnswer(questionNumber) {
    const answer = document.querySelector(`#answer${questionNumber}`);
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}