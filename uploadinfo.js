document.getElementById("detailsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const personCode = document.getElementById("personCode").value;
  const telNumber = document.getElementById("telNumber").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const street = document.getElementById("street").value;
  const houseNumber = document.getElementById("houseNumber").value;
  const flatNumber = document.getElementById("flatNumber").value;
  //const picture = document.getElementById("img").value;

  let base64String = "";
  function imageUploaded() {
    var file = document.getElementById("img")["files"][0];
    var reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      imageBase64Stringsep = base64String;
      console.log(base64String);
    };
    reader.readAsDataURL(file);
    return base64String;
  }
  var pic = imageUploaded();
  console.log(pic);
  const user = {
    name: name,
    lastName: lastName,
    personCode: personCode,
    telNumber: telNumber,
    email: email,
    picture: picture,
    city: city,
    street: street,
    houseNumber: houseNumber,
    flatNumber: flatNumber,
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
