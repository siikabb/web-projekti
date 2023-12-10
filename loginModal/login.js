'use strict'
// Get the modal
const modal = document.getElementById("loginModal");
// Get the button that opens the modal
const openModalBtn = document.getElementById("open-modal-btn");
// Get the <span> element that closes the modal
const cancelBtn = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "flex";
};
// When the user clicks on <span> (x), close the modal
cancelBtn.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// validate user input
function loginForm() {
  // Get form elements by their IDs
  const usernameInput = document.getElementById("userName");
  const passwordInput = document.getElementById("userPassword");

  // Get values from the form elements
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
};
