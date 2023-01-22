document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace("index.html");
  sessionStorage.clear();
  console.log("Session cleared");
  console.log(sessionStorage.getItem("userId"));
});
document.getElementById("loadUsers").addEventListener("click", (e) => {
  e.preventDefault();
  var x = document.getElementById("loadUsers");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  let users = [];
  createTable();
  fetch("https://localhost:7068/Person")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      renderData(data);
      users = data;
    });
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
    const thAddressCity = document.createElement("th");
    const thAddressStreet = document.createElement("th");
    const thAddressHouseNumber = document.createElement("th");
    const thAddressFlatNumber = document.createElement("th");
    const thUserID = document.createElement("th");
    const thImg = document.createElement("th");
    thID.textContent = "ID";
    thImg.textContent = "Picture";
    thName.textContent = "Name";
    thLastname.textContent = "Lastname";
    thPersonCode.textContent = "Person Code";
    thTelNumber.textContent = "Tel. Number";
    thEmail.textContent = "Email";
    thAddressCity.textContent = "City";
    thAddressStreet.textContent = "Street";
    thAddressHouseNumber.textContent = "House Nr.";
    thAddressFlatNumber.textContent = "Flat Nr.";

    tr.append(
      thID,
      thImg,
      thName,
      thLastname,
      thPersonCode,
      thTelNumber,
      thEmail,
      thAddressCity,
      thAddressStreet,
      thAddressHouseNumber,
      thAddressFlatNumber
    );
  }

  function renderData(users) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    users.forEach((user) => {
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
      const tdAddressCity = document.createElement("td");
      const tdAddressStreet = document.createElement("td");
      const tdAddressHouseNumber = document.createElement("td");
      const tdAddressFlatNumber = document.createElement("td");
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
      tdAddressCity.textContent = user.address.city;
      tdAddressStreet.textContent = user.address.street;
      tdAddressHouseNumber.textContent = user.address.houseNumber;
      tdAddressFlatNumber.textContent = user.address.flatNumber;
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
        tdAddressCity,
        tdAddressStreet,
        tdAddressHouseNumber,
        tdAddressFlatNumber,
        tdMakeAdminButton,
        tdRemoveButton
      );
      tdImg.append(img);
    });
  }
});
