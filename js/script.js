function submitConfirm() {
  alert("Test");
}

var submitButton = document.querySelectorAll("input[type="email"]");
submitButton.addEventListener("click", submitConfirm());