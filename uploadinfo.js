fetch("https://localhost:7068/Person").then((response) => {
  response.json().then((data) => {
    let login = data.filter(
      (element) => element.userId == sessionStorage.getItem("userId")
    );
    if (login.length == 0) {
      document.getElementById("logout").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.replace("index.html");
        sessionStorage.clear();
        console.log("Session cleared");
        console.log(sessionStorage.getItem("userId"));
      });
      document.getElementById("detailsForm").addEventListener("submit", (e) => {
        e.preventDefault();
        imageUploaded();
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const personCode = document.getElementById("personCode").value;
        const telNumber = document.getElementById("telNumber").value;
        const email = document.getElementById("email").value;
        const city = document.getElementById("city").value;
        const street = document.getElementById("street").value;
        const houseNumber = document.getElementById("houseNumber").value;
        const flatNumber = document.getElementById("flatNumber").value;

        let base64String = "";
        function imageUploaded() {
          var file = document.getElementById("img")["files"][0];
          var reader = new FileReader();
          reader.onload = function () {
            base64String = reader.result
              .replace("data:", "")
              .replace(/^.+,/, "");
            imageBase64Stringsep = base64String;
            console.log(base64String);
            const user = {
              name: name,
              lastName: lastName,
              personCode: personCode,
              telNumber: telNumber,
              email: email,
              picture: base64String,
              city: city,
              street: street,
              houseNumber: houseNumber,
              flatNumber: flatNumber,
              userId: sessionStorage.getItem("userId"),
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
                alert("User information has been updated");
                window.location.replace("afterLogin.html");
              } else {
                alert("Something went wrong");
              }
            });
          };
          reader.readAsDataURL(file);
        }
      });
    } else {
      console.log("User details already filled");
      window.location.replace("updateInfo.html");
    }
  });
});
