function inputFill(inputData) {
  var btn = document.getElementById("registerBtn");
  if (inputData.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
