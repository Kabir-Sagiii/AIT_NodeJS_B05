const URL = "http://localhost:3000/get-users";
function getUsers() {
  fetch(URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.results);

      const tableRef = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");

      tableRef.appendChild(thead);
      tableRef.appendChild(tbody);

      const tr1 = document.createElement("tr");

      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      const th3 = document.createElement("th");
      const th4 = document.createElement("th");

      th1.innerText = "NAME";
      th2.innerText = "PASSWORD";
      th3.innerText = "EMAIL";
      th4.innerText = "ACTION";

      tr1.appendChild(th1);
      tr1.appendChild(th2);
      tr1.appendChild(th3);
      tr1.appendChild(th4);

      thead.style.backgroundColor = "black";
      thead.style.color = "white";
      thead.appendChild(tr1);

      data.results.forEach(function (user) {
        var button = document.createElement("button");
        button.innerText = "Remove";

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerText = user.name;
        td2.innerText = user.password;
        td3.innerText = user.emailId;
        td4.appendChild(button);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tr.align = "center";

        tbody.append(tr);
      });

      tableRef.frame = "box";
      tableRef.rules = "all";
      tableRef.cellPadding = "10px";
      tableRef.width = "100%";

      document.querySelector(".section-2").appendChild(tableRef);
    })
    .catch(function (error) {
      alert("Something went wrong");
      console.log(error);
    });
}

function logout() {
  location.href = "login.html";
}
