'use strict'
// Get the modal
const modal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
// Get the button that opens the modal
const openModalBtn = document.getElementById("open-modal-btn");
// Get the <span> element that closes the modal
const cancelBtn = document.getElementsByClassName("close")[0];
const registerCancelBtn = document.getElementsByClassName("close")[1];
const registerBtn = document.getElementsByClassName("register-div")[0];
// When the user clicks on the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "flex";
};
// When the user clicks on register icon, close the  first modal open second modal
registerBtn.onclick = function() {
  modal.style.display = "none";
  registerModal.style.display = "flex";
};
// When the user clicks on <span> (x) or anywhere outside the modal, close the modal
cancelBtn.onclick = function() {
  modal.style.display = "none";
};
registerCancelBtn.onclick = function() {
  registerModal.style.display = "none"; // Close the register modal as well
};

window.onclick = function(event) {
  if (event.target == modal || event.target == registerModal) {
    modal.style.display = "none";
    registerModal.style.display = "none"; // Close the register modal as well
  }
};
