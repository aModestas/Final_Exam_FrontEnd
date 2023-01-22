document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const user = {
    username: username,
    password: password,
    role: "string",
  };
  fetch("https://localhost:7068/User").then((response) => {
    response.json().then((data) => {
      let login = data.filter(
        (element) =>
          element.username == username && element.password == password
      );
      if (login.length == 1) {
        console.log("Success");
        sessionStorage.setItem("userId", login[0].id);
        sessionStorage.setItem("role", login[0].role);
        window.location.replace("afterLogIn.html");
      } else {
        console.log("Wrong details");
        alert("Wrong username or password");
      }
    });
  });
});
