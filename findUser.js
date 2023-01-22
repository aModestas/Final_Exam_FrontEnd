document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace("index.html");
  sessionStorage.clear();
  console.log("Session cleared");
  console.log(sessionStorage.getItem("userId"));
});
createSearch();
createTable();
console.log(sessionStorage.getItem("role"));
function createTable() {
  const createTable = document.createElement("table");
  document.body.append(createTable);
  const tBody = document.createElement("tbody");
  const tHead = document.createElement("thead");
  createTable.append(tHead, tBody);

  const tr = document.createElement("tr");
  tHead.append(tr);

  const thID = document.createElement("th");
  const thName = document.createElement("th");
  const thLastname = document.createElement("th");
  const thPersonCode = document.createElement("th");
  const thTelNumber = document.createElement("th");
  const thEmail = document.createElement("th");
  const thAddressID = document.createElement("th");
  const thUserID = document.createElement("th");
  const thImg = document.createElement("th");
  thID.textContent = "ID";
  thImg.textContent = "Picture";
  thName.textContent = "Name";
  thLastname.textContent = "Lastname";
  thPersonCode.textContent = "Person Code";
  thTelNumber.textContent = "Tel. Number";
  thEmail.textContent = "Email";
  thAddressID.textContent = "Address ID";
  thUserID.textContent = "User ID";

  tr.append(
    thID,
    thImg,
    thName,
    thLastname,
    thPersonCode,
    thTelNumber,
    thEmail,
    thAddressID,
    thUserID
  );
}
function createSearch() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.id = "search";
  const button = document.createElement("button");
  button.id = "loadFromSearch";

  button.textContent = "Search";
  form.append(input, button);
  document.body.append(form);
}

document.getElementById("loadFromSearch").addEventListener("click", (e) => {
  e.preventDefault();
  let users = [];
  let input = document.querySelector("#search").value;
  fetch("https://localhost:7068/Person/id?id=" + input)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      renderData(data);
      users = data;
    });

  function renderData(user) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdImg = document.createElement("td");
    tdImg.style.height = "200px";
    tdImg.style.width = "200px";
    const img = document.createElement("img");
    const tdName = document.createElement("td");
    const tdLastname = document.createElement("td");
    const tdPersonCode = document.createElement("td");
    const tdTelNumber = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdAddressID = document.createElement("td");
    const tdUserID = document.createElement("td");
    const tdRemoveButton = document.createElement("button");
    tdRemoveButton.id = "removeButton";
    tdRemoveButton.textContent = "REMOVE";
    const tdMakeAdminButton = document.createElement("button");
    tdMakeAdminButton.id = "makeAdminButton";
    tdMakeAdminButton.textContent = "MAKE ADMIN";

    tdId.textContent = user.id;
    img.src = "data:image/png;base64," + user.picture;
    tdName.textContent = user.name;
    tdLastname.textContent = user.lastname;
    tdPersonCode.textContent = user.personCode;
    tdTelNumber.textContent = user.telNumber;
    tdEmail.textContent = user.email;
    tdAddressID.textContent = user.addressId;
    tdUserID.textContent = user.userId;

    tbody.append(tr);
    tr.append(
      tdId,
      tdImg,
      tdName,
      tdLastname,
      tdPersonCode,
      tdTelNumber,
      tdEmail,
      tdAddressID,
      tdUserID,
      tdMakeAdminButton,
      tdRemoveButton
    );
    tdImg.append(img);
    document.getElementById("removeButton").addEventListener("click", (e) => {
      e.preventDefault();
      let input = document.querySelector("#search").value;
      const role = sessionStorage.getItem("role");
      if (role == "admin" && user.userId != sessionStorage.getItem("userId")) {
        fetch("https://localhost:7068/Person/id?id=" + input, {
          method: "DELETE",
          body: JSON.stringify(user),
          headers: {
            Accept: "text/plain",
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.ok) {
            alert("User deleted");
            window.location.reload();
          } else {
            alert("Request failed");
          }
        });
      } else {
        alert("You don't have the capacity for that bigman");
      }
    });
    document
      .getElementById("makeAdminButton")
      .addEventListener("click", (e) => {
        e.preventDefault();
        //let input = document.querySelector("#search").value;
        const role = sessionStorage.getItem("role");
        if (
          role == "admin" &&
          user.userId != sessionStorage.getItem("userId")
        ) {
          fetch("https://localhost:7068/User/id?id=" + user.userId, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
              Accept: "text/plain",
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.ok) {
              alert("User role changed to admin");
              window.location.reload();
            } else {
              alert("Request failed");
            }
          });
        } else {
          alert("You don't have the capacity for that bigman");
        }
      });
  }
  document.querySelector("form").addEventListener("submit", masterFilter);
  function masterFilter(e) {
    e.preventDefault();
    let input = document.querySelector("#search").value;
    const foundUser = users.filter((user) => {
      return input == user.id;
    });
    renderData(foundUser);
  }
});
