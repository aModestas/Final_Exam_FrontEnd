createSearch();
createTable();
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
  document.body.prepend(form);
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
    const img = document.createElement("img");
    const tdName = document.createElement("td");
    const tdLastname = document.createElement("td");
    const tdPersonCode = document.createElement("td");
    const tdTelNumber = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdAddressID = document.createElement("td");
    const tdUserID = document.createElement("td");

    tdId.textContent = user.id;
    img.src = user.picture;
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
      tdUserID
    );
    tdImg.append(img);
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
