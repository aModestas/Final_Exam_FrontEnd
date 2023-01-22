console.log(sessionStorage.getItem("userId"));
fetch("https://localhost:7068/Person").then((response) => {
  response.json().then((data) => {
    let login = data.filter(
      (element) => element.userId == sessionStorage.getItem("userId")
    );
    if (login.length == 1) {
      document
        .getElementById("updateNameField")
        .addEventListener("click", (e) => {
          e.preventDefault();
          const name = document.getElementById("name").value;
          console.log(login);
          fetch("https://localhost:7068/Person/name?id=" + login[0].id, {
            method: "PUT",
            body: JSON.stringify(name),
            headers: {
              Accept: "text/plain",
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.ok) {
              alert("Užklausa sėkminga");
            } else {
              alert("Užklausa nesėkminga");
            }
          });
        }),
        document
          .getElementById("updateLastNameField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const lastName = document.getElementById("lastName").value;
            console.log(login);
            fetch("https://localhost:7068/Person/lastname?id=" + login[0].id, {
              method: "PUT",
              body: JSON.stringify(lastName),
              headers: {
                Accept: "text/plain",
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updatePersonCodeField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const personCode = document.getElementById("personCode").value;
            console.log(login);
            fetch(
              "https://localhost:7068/Person/personCode?id=" + login[0].id,
              {
                method: "PUT",
                body: JSON.stringify(personCode),
                headers: {
                  Accept: "text/plain",
                  "Content-Type": "application/json",
                },
              }
            ).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updateTelNumberField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const telNumber = document.getElementById("telNumber").value;
            console.log(login);
            fetch("https://localhost:7068/Person/telNumber?id=" + login[0].id, {
              method: "PUT",
              body: JSON.stringify(telNumber),
              headers: {
                Accept: "text/plain",
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updateEmailField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            console.log(login);
            fetch("https://localhost:7068/Person/email?id=" + login[0].id, {
              method: "PUT",
              body: JSON.stringify(email),
              headers: {
                Accept: "text/plain",
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updateCityField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const city = document.getElementById("city").value;
            console.log(login);
            fetch("https://localhost:7068/Person/city?id=" + login[0].id, {
              method: "PUT",
              body: JSON.stringify(city),
              headers: {
                Accept: "text/plain",
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updateStreetField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const street = document.getElementById("street").value;
            console.log(login);
            fetch("https://localhost:7068/Person/street?id=" + login[0].id, {
              method: "PUT",
              body: JSON.stringify(street),
              headers: {
                Accept: "text/plain",
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updateHouseNumberField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const houseNumber = document.getElementById("houseNumber").value;
            console.log(login);
            fetch(
              "https://localhost:7068/Person/houseNumber?id=" + login[0].id,
              {
                method: "PUT",
                body: JSON.stringify(houseNumber),
                headers: {
                  Accept: "text/plain",
                  "Content-Type": "application/json",
                },
              }
            ).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updateFlatNumberField")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const flatNumber = document.getElementById("flatNumber").value;
            console.log(login);
            fetch(
              "https://localhost:7068/Person/flatNumber?id=" + login[0].id,
              {
                method: "PUT",
                body: JSON.stringify(flatNumber),
                headers: {
                  Accept: "text/plain",
                  "Content-Type": "application/json",
                },
              }
            ).then((res) => {
              if (res.ok) {
                alert("Užklausa sėkminga");
              } else {
                alert("Užklausa nesėkminga");
              }
            });
          }),
        document
          .getElementById("updatePicture")
          .addEventListener("click", (e) => {
            e.preventDefault();
            imageUploaded();
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
                fetch(
                  "https://localhost:7068/Person/picture?id=" + login[0].id,
                  {
                    method: "PUT",
                    body: JSON.stringify(base64String),
                    headers: {
                      Accept: "text/plain",
                      "Content-Type": "application/json",
                    },
                  }
                ).then((res) => {
                  if (res.ok) {
                    alert("Užklausa sėkminga");
                  } else {
                    alert("Užklausa nesėkminga");
                  }
                });
              };
              reader.readAsDataURL(file);
            }
          });
    } else {
      console.log("Wrong details");
      alert("Something went wrong");
    }
  });
});
