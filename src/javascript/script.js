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
const questionContainer = document.getElementById("questioner-containerHome");

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

    //

    const senderInfoDiv = document.createElement("div");
      senderInfoDiv.classList.add("sender-info");

      // Tambahkan elemen untuk menampilkan foto profil pengirim dari folder lokal
      const senderProfilePicture = document.createElement("img");
      senderProfilePicture.classList.add("sender-profile-picture");
      senderProfilePicture.src = "./src/img/mario.jpg";
      senderProfilePicture.width = 20; // Lebar dalam piksel
      senderProfilePicture.height = 20;

      // Tambahkan elemen untuk menampilkan nama pengirim
      const senderName = document.createElement("span");
      senderName.classList.add("sender-name");
      senderName.textContent = questionData.name;
      
      senderInfoDiv.style.display = "flex";
      senderInfoDiv.style.alignItems = "center"; // Gantilah dengan cara Anda mendapatkan nama pengirim

      senderInfoDiv.appendChild(senderProfilePicture);
      senderInfoDiv.appendChild(senderName);

      //

    const answerNotificationDiv = document.createElement("div");
    answerNotificationDiv.classList.add("answer-notification");
    answerNotificationDiv.textContent = `${questionData.jawaban.length} Jawaban`;

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");

    questionBox.addEventListener("click", () => {
      answerDiv.classList.toggle("hidden");

      //

    if (!answerDiv.classList.contains("hidden")) {
      // Hapus semua elemen penjawab sebelum menambahkan yang baru
      while (answerDiv.firstChild) {
        answerDiv.removeChild(answerDiv.firstChild);
      }
  
      // Tampilkan informasi penjawab
      questionData.jawaban.forEach((jawabanData) => {
        const penjawabDiv = document.createElement("div");
        penjawabDiv.classList.add("penjawab");
  
        // Tambahkan foto profil penjawab
        const penjawabProfilePicture = document.createElement("img");
        penjawabProfilePicture.classList.add("penjawab-profile-picture");
        penjawabProfilePicture.src = "./src/img/mario.jpg";
        penjawabProfilePicture.width = 20; // Lebar dalam piksel
        penjawabProfilePicture.height = 20;
  
        // Tambahkan nama penjawab
        const penjawabName = document.createElement("span");
        penjawabName.classList.add("penjawab-name");
        penjawabName.textContent = jawabanData.nama;
  
        // Tambahkan isi jawaban
        const jawabanP = document.createElement("p");
        jawabanP.textContent = jawabanData.jawaban;

        penjawabDiv.style.display = "flex";
        penjawabDiv.style.alignItems = "center";
  
        penjawabDiv.appendChild(penjawabProfilePicture);
        penjawabDiv.appendChild(penjawabName);
  
        answerDiv.appendChild(penjawabDiv);
        answerDiv.appendChild(jawabanP);
      });
    }

    //
  });
    questionBox.appendChild(senderInfoDiv);
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

    //
    const senderInfoDiv = document.createElement("div");
    senderInfoDiv.classList.add("sender-info");

    const senderProfilePicture = document.createElement("img");
    senderProfilePicture.classList.add("sender-profile-picture");
    senderProfilePicture.src = "../src/img/mario.jpg";
    senderProfilePicture.width = 20; // Lebar dalam piksel
    senderProfilePicture.height = 20;

    const senderName = document.createElement("span");
    senderName.classList.add("sender-name");
    senderName.textContent = questionData.name;

    senderInfoDiv.style.display = "flex";
    senderInfoDiv.style.alignItems = "center";
      
    senderInfoDiv.appendChild(senderProfilePicture);
    senderInfoDiv.appendChild(senderName);
    //

    const answerNotificationDiv = document.createElement("div");
    answerNotificationDiv.classList.add("answer-notification");
    answerNotificationDiv.textContent = `${questionData.jawaban.length} Jawaban`;

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");

    //
    
        // Tampilkan informasi penjawab
        questionData.jawaban.forEach((jawabanData) => {
          const penjawabDiv = document.createElement("div");
          penjawabDiv.classList.add("penjawab");
    
          // Tambahkan foto profil penjawab
          const penjawabProfilePicture = document.createElement("img");
          penjawabProfilePicture.classList.add("penjawab-profile-picture");
          penjawabProfilePicture.src = "../src/img/mario.jpg";
          penjawabProfilePicture.width = 20; // Lebar dalam piksel
          penjawabProfilePicture.height = 20;
    
          // Tambahkan nama penjawab
          const penjawabName = document.createElement("span");
          penjawabName.classList.add("penjawab-name");
          penjawabName.textContent = jawabanData.nama;
    
          // Tambahkan isi jawaban
          const jawabanP = document.createElement("p");
          jawabanP.textContent = jawabanData.jawaban;

          penjawabDiv.style.display = "flex";
          penjawabDiv.style.alignItems = "center";
    
          penjawabDiv.appendChild(penjawabProfilePicture);
          penjawabDiv.appendChild(penjawabName);
    
          answerDiv.appendChild(penjawabDiv);
          answerDiv.appendChild(jawabanP);
        });

    //

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

    questionBox.appendChild(senderInfoDiv);
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

const formq = document.getElementById("form-question");
formq.addEventListener("submit", submitPertanyaan);

function submitPertanyaan(e) {
e.preventDefault();
const namaInput = document.getElementById("name").value;
const tanyaInput = document.getElementById("pertanyaan").value;
const submitButton = document.getElementById("button-submit");

// Nonaktifkan tombol setelah diklik
submitButton.disabled = true;

const formTanya = {
  name: namaInput,
  pertanyaan: tanyaInput,
};

fetch("https://tame-church-production.up.railway.app/qna/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formTanya),
  redirect: "follow",
  mode: "cors", // Enable CORS
  credentials: "same-origin", // Optional: Include credentials (cookies) when making same-origin requests
})
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    // Handle the response from the server if needed
    const formPertanyaana = document.getElementById("form-pertanyaan");
    formPertanyaana.style.display = "none";
    alert("Pertanyaan telah dikirim!");
    window.location.reload();
    // Re-enable the submit button after the request is complete
    submitButton.disabled = false;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
    alert("Terjadi kesalahan saat mengirim pertanyaan.");
    // Re-enable the submit button after an error occurs
    submitButton.disabled = false;
  });

return false; // Prevent the default behavior of the "Kirim Pertanyaan" button
}
const tanyaButton = document.getElementById("button-submit");
tanyaButton.addEventListener("click", submitPertanyaan);

const forma = document.getElementById("form-answer");
forma.addEventListener("submit", submitJawaban);

async function submitJawaban(e) {
  e.preventDefault();
  // Mengambil nilai dari elemen HTML
  const nameInput = document.getElementById("nama").value;
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
  nama: nameInput,
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
    mode: "cors"
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
// const jawabanButton = document.getElementById("submit-jawaban");
// jawabanButton.addEventListener("click", submitJawaban);

//Question function

