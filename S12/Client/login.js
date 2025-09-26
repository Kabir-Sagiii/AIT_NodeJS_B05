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
      if (userdata.ok) {
        location.href = "home.html";
      } else {
        alert(userdata.message);
      }
    })
    .catch(function (error) {
      alert("Something went wrong");
      console.log(error);
    });
}
