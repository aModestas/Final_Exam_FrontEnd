document.getElementById("detailsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const personCode = document.getElementById("personCode").value;
  const telNumber = document.getElementById("telNumber").value;
  const email = document.getElementById("email").value;
  const img = document.getElementById("img").value;
  function imageUploaded() {
    var file = document.getElementById("img")["files"][0];
    var reader = new FileReader();
    let base64String = "";
    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log(base64String);
    };
    reader.readAsDataURL(file);
    return base64String;
  }
  const user = {
    name: name,
    lastName: lastName,
    personCode: personCode,
    telNumber: telNumber,
    email: email,
    img: "123",
    addressid: 1,
    userid: 17,
  };
  fetch("https://localhost:7068/Person", {
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
