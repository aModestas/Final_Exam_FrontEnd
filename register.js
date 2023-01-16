document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const users = {
    username: username,
    password: password,
  };
  fetch("https://localhost:7068/User", {
    method: "POST",
    body: JSON.stringify(users),
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      alert("Užklausa sėkminga");
      window.location.replace("index.html");
    } else {
      alert("Užklausa nesėkminga");
    }
  });
});
