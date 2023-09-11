function showMoreQuestions() {
    const hiddenQuestions = document.querySelectorAll('.question-box.hidden');

    for (let i = 0; i < 3 && i < hiddenQuestions.length; i++) {
        hiddenQuestions[i].style.display = 'block';
        hiddenQuestions[i].classList.remove('hidden');
    }

    if (document.querySelectorAll('.question-box.hidden').length === 0) {
        document.querySelector('.more-button').style.display = 'none';
    }
}

function toggleAnswer(questionNumber) {
    const answer = document.querySelector(`#answer${questionNumber}`);
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}