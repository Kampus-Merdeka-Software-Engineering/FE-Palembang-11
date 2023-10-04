// more button
function showMoreQuestions() {
  window.location.href = "pertanyaan.html";
}

function showMoreCourse() {
  window.location.href = "course.html";
}

function showMoreTutorial() {
  window.location.href = "tutorial.html";
}

function toggleAnswer(questionNumber) {
    const answer = document.querySelector(`#answer${questionNumber}`);
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

//whats
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeAccordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}