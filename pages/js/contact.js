$("#submitButton").click(function () {
  submitForm();
});

var name_, email_, phone_, message_;

function submitForm() {
  name_ = getTnputValue("name");
  email_ = getTnputValue("email");
  phone_ = getTnputValue("phone");
  message_ = getTnputValue("comments");
  saveMessage(name_, email_, phone_, message_);
}

function getTnputValue(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, message) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then(function () {
          console.log("New user added to firestore");
          window.location.assign("homepage.html");
        })
        .catch(function (error) {
          console.log("Error adding new user: " + error);
        });
    } else {
      console.log("not logged in");
    }
  });
}
