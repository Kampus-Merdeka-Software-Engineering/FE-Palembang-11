// more button
function showMoreQuestions() {
  window.location.href = "./page/pertanyaan.html";
}

function showMoreCourse() {
  window.location.href = "./page/course.html";
}

function showMoreTutorial() {
  window.location.href = "./page/tutorial.html";
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

//Question function

document.addEventListener("DOMContentLoaded", async () => {
const questionContainer = document.getElementById("questioner-container");

try {
  const response = await fetch("https://tame-church-production.up.railway.app/utama");
  const data = await response.json(JSON.stringify());
  console.log(data);

  data.forEach((questionData) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.textContent = questionData.pertanyaan;

    const answerNotificationDiv = document.createElement("div");
    answerNotificationDiv.classList.add("answer-notification");
    answerNotificationDiv.textContent = `${questionData.jawaban.length} Jawaban`;

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");

    questionData.jawaban.forEach((jawaban) => {
      const jawabanP = document.createElement("p");
      jawabanP.textContent = jawaban;
      answerDiv.appendChild(jawabanP);
    });

    questionBox.addEventListener("click", () => {
      answerDiv.classList.toggle("hidden");
    });

    questionBox.appendChild(questionDiv);
    questionBox.appendChild(answerNotificationDiv);
    questionBox.appendChild(answerDiv);

    questionContainer.appendChild(questionBox);
  });
} catch (error) {
  console.error("Error fetching data:", error);
}
});

document.addEventListener("DOMContentLoaded", async () => {
const questionerContainer = document.getElementById("questioner-container");
const formJawaban = document.getElementById("form-jawaban");
const jawabanPertanyaanTextarea = document.getElementById("jawaban-pertanyaan");
const idQuestionTextarea = document.getElementById("id_question");
const closedButton = document.getElementById("closed-button");



try {
  const response = await fetch("https://tame-church-production.up.railway.app/qna");
  const data = await response.json(JSON.stringify());

  data.forEach((questionData) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.textContent = questionData.pertanyaan;

    const answerNotificationDiv = document.createElement("div");
    answerNotificationDiv.classList.add("answer-notification");
    answerNotificationDiv.textContent = `${questionData.jawaban.length} Jawaban`;

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");

    const addButton = document.createElement("button");
    addButton.className = "jawaban-button";
    addButton.textContent = "Berikan Jawaban";

    addButton.addEventListener("click", () => {
      jawabanPertanyaanTextarea.value = questionData.pertanyaan;
      idQuestionTextarea.value = questionData.id_question;
      formJawaban.style.display = "block";
    });

    closedButton.addEventListener("click", () => {
      formJawaban.style.display = "none"; // Menutup formulir saat tombol penutup ditekan
    });

    questionData.jawaban.forEach((jawaban) => {
      const jawabanP = document.createElement("p");
      jawabanP.textContent = jawaban;
      answerDiv.appendChild(jawabanP);
    });

    questionDiv.addEventListener("click", () => {
      answerDiv.classList.toggle("hidden");
    });

    questionBox.appendChild(questionDiv);
    questionBox.appendChild(answerNotificationDiv);
    questionBox.appendChild(answerDiv);
    questionBox.appendChild(addButton);

    questionerContainer.appendChild(questionBox);
  });
} catch (error) {
  console.error("Error fetching data:", error);
}
});


document.addEventListener("DOMContentLoaded", () => {
const addButton = document.getElementById("tambah-pertanyaan");
const formPertanyaan = document.getElementById("form-pertanyaan");
const closeButton = document.getElementById("close-button");

addButton.addEventListener("click", () => {
  formPertanyaan.style.display = "block"; // Menampilkan formulir sebagai pop-up
});

closeButton.addEventListener("click", () => {
  formPertanyaan.style.display = "none"; // Menutup formulir saat tombol penutup ditekan
});
});

function submitPertanyaan() {
const namaInput = document.getElementById("name").value;
const tanyaInput = document.getElementById("pertanyaan").value;
const submitButton = document.getElementById("button-submit");

// Nonaktifkan tombol setelah diklik
submitButton.disabled = true;

// const formTanya = {
//   name: namaInput,
//   pertanyaan: tanyaInput,
// };

const formTanya = JSON.stringify({
  name: namaInput,
  pertanyaan: tanyaInput,
});

const axios = require('axios');

fetch("https://tame-church-production.up.railway.app/qna/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: formTanya,
})

  axios.request(fetch)

  .then((response) => JSON.stringify(response.body))
  .then((data) => {
    // Tangani respons dari server di sini, jika diperlukan
    const formPertanyaan = document.getElementById("form-pertanyaan");
    formPertanyaan.style.display = "none";
    alert("Pertanyaan telah dikirim!");

    window.location.reload();

    // Aktifkan kembali tombol setelah pengiriman selesai
    submitButton.disabled = false;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
    alert("Terjadi kesalahan saat mengirim pertanyaan.");

    // Aktifkan kembali tombol setelah terjadi kesalahan
    submitButton.disabled = false;
  });

return false; // Mencegah perilaku default tombol "Kirim Pertanyaan"
}
const tanyaButton = document.getElementById("button-submit");
tanyaButton.addEventListener("click", submitPertanyaan);

async function submitJawaban() {
// Mengambil nilai dari elemen HTML
const jawabanText = document.getElementById("jawaban").value;
const idQuestionInput = document.getElementById("id_question");

// Mengambil nilai idQuestion dari elemen input
const idQuestion = idQuestionInput.value;

// Pastikan idQuestion adalah tipe data INTEGER
const idQuestionInt = parseInt(idQuestion, 10);

// Validasi tipe data jawabanText
if (typeof jawabanText !== 'string') {
  // Tindakan yang perlu diambil jika jawabanText bukan string
  return;
}

// Data yang akan dikirimkan ke server
const formJawab = {
  id_question: idQuestionInt,
  jawaban: jawabanText,
};

try {
  const response = await fetch("https://tame-church-production.up.railway.app/qna/jawaban", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJawab),
  });

  if (response.ok) {
    const data = await response.json();
    // Tangani respons dari server di sini, jika diperlukan
    const formJawaban = document.getElementById("form-jawaban");
    formJawaban.style.display = "none";
    alert("Jawaban telah dikirim!");
    window.location.reload();
  } else {
    console.error("Terjadi kesalahan dalam mengirim jawaban:", response.statusText);
    alert("Terjadi kesalahan saat mengirim jawaban.");
  }
} catch (error) {
  console.error("Terjadi kesalahan:", error);
  alert("Terjadi kesalahan saat mengirim pertanyaan.");
}
}

// Menambahkan event listener ke tombol submit jawaban
const jawabanButton = document.getElementById("submit-jawaban");
jawabanButton.addEventListener("click", submitJawaban);

//Question function

