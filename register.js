document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const repeatPassword = document.getElementById("repeatPassword").value;
  const user = {
    username: username,
    password: password,
    role: "string",
  };
  if (password == repeatPassword) {
    fetch("https://localhost:7068/User").then((response) => {
      response.json().then((data) => {
        let login = data.filter((element) => element.username == username);
        if (login.length == 1) {
          alert("This user already exists!");
        } else {
          fetch("https://localhost:7068/User", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              Accept: "text/plain",
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.ok) {
              alert("Account created");
              window.location.replace("index.html");
            } else {
              alert("Something went wrong");
            }
          });
        }
      });
    });
  } else {
    alert("The passwords do not match");
    window.location.reload();
  }
});
