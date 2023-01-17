document.getElementById("detailsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const personCode = document.getElementById("personCode").value;
  const telNumber = document.getElementById("telNumber").value;
  const email = document.getElementById("email").value;
  const img = document.getElementById("img").value;
  const user = {
    name: name,
    lastName: lastName,
    personCode: personCode,
    telNumber: telNumber,
    email: email,
    img: img,
  };
  fetch("https://localhost:7068/User", {
    method: "POST",
    body: JSON.stringify(user),
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
