const terms = document.querySelector(".tandc");

const firebaseConfig = {
  apiKey: "AIzaSyA4SQqCf3U2vvTr_Bkbfl3bHZnGNxr1SMI",
  authDomain: "inductionio-event.firebaseapp.com",
  projectId: "inductionio-event",
  storageBucket: "inductionio-event.appspot.com",
  messagingSenderId: "101950700286",
  appId: "1:101950700286:web:96dd44a34780fe43c143af",
  measurementId: "G-4DYMK46ZVJ",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

terms.addEventListener("mouseover", (e) => {
  terms.style.textDecoration = "underline";
});

terms.addEventListener("mouseout", (e) => {
  terms.style.textDecoration = "none";
});

// Get the modal
var modal = document.querySelector(".modal");

modal;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

terms.addEventListener("click", (e) => {
  modal.style.display = "block";
  modal.classList.add("animate__animated");
  modal.classList.add("animate__zoomInRight");
});

const clicked = document.getElementById("clicked");

clicked.addEventListener("click", (e) => {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  console.log(user);
  console.log(pass);
  if (username.length != 0 && password.length != 0) {
    db.collection("user-details")
      .add({
        username: user,
        password: pass,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
});
