function createUser() {
  const url = "http://localhost:3000/create-new-user";
  var textBoxDomElement = document.getElementById("username");
  var emailBoxDomElment = document.getElementById("email");
  var passwordBoxDomElement = document.getElementById("password");
  var h1 = document.getElementById("result");

  const username = textBoxDomElement.value;
  const email = emailBoxDomElment.value;
  const password = passwordBoxDomElement.value;

  //   console.log(username, email, password);
  var new_user = {
    name: username,
    password: password,
    emailId: email,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(new_user),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      h1.innerText = data;
      textBoxDomElement.value = "";
      passwordBoxDomElement.value = "";
      emailBoxDomElment.value = "";
    })
    .catch((error) => {
      console.log(error);
    });
}
