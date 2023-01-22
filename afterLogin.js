document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace("index.html");
  sessionStorage.clear();
  console.log("Session cleared");
  console.log(sessionStorage.getItem("userId"));
});
