function loginUser() {
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var data = { name, password };

  fetch("http://localhost:3000/sign-in", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (userdata) {
      alert("Login Successfull");
      console.log(userdata);
    })
    .catch(function (error) {
      alert("Something went wrong");
      console.log(error);
    });
  console.log(data);
}
