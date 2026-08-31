//Starts here
//console.log("JavaScript loaded");

/*const uploadError = document.querySelector(".upload-error");
uploadError.textContent = "File size must be less than 500KB.";
uploadError.style.display = "block";
return;

uploadError.textContent = "Only JPG and PNG files are allowed.";
uploadError.style.display = "block";
return;
*/
/*uploadError.textContent = "";
uploadError.style.display = "none";
*/

/*function showError(message) {
    uploadError.textContent = message;
    uploadError.style.display = "block";
}*/

/*
if (file.size > maxSize) {
    showError("File size must be less than 500KB.");
    return;
}

if (!allowedTypes.includes(file.type)) {
    showError("Only JPG and PNG files are allowed.");
    return;
} */


function clearError() {
    uploadError.textContent = "";
    uploadError.style.display = "none";
}


const ticketPage = document.querySelector(".ticket-page");
const ticketCard = document.querySelector("#ticket-card");



const preview = document.querySelector(".upload-icon");
const uploadButtons = document.querySelector(".upload-buttons");
const uploadText = document.querySelector(".upload-text");
const removeButton = document.querySelector("#remove-btn");


const avatarInput = document.querySelector('#avatar-input');

avatarInput.addEventListener("change", function() {
    const file = this.files[0];
    if (!file) return;

    const maxSize = 500 * 1024;
    if (file.size > maxSize) {
        alert("File size must be less than 500KB");
        return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
        alert("Only JPG and PNG files are allowed");
        return;
    }


    preview.src = URL.createObjectURL(file);

const uploadText = document.querySelector(".upload-text");
    uploadButtons.style.display = "flex";


    uploadText.style.display = "none";

   


ticketAvatar.src = URL.createObjectURL(file);

});


removeButton.addEventListener("click", function () {
    avatarInput.value="";
preview.src = "assets/images/icon-upload.svg";
uploadButtons.style.display = "none";


});
const changeButton = document.querySelector("#change-btn");
changeButton.addEventListener("click", function () {
    avatarInput.click();
});



const form = document.querySelector("#ticket-form");

const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const github = document.querySelector("#github-username");

const ticketName = document.querySelector("#ticket-name");
const ticketGithub = document.querySelector("#ticket-github");
const ticketEmail = document.querySelector("#ticket-congrats-email");
const ticketCongratsName = document.querySelector("#ticket-congrats-name");
const ticketAvatar = document.querySelector("#ticket-avatar");

form.addEventListener("submit", function (e) {
e.preventDefault();

console.log(fullName.value);
console.log(email.value);
console.log(github.value);

ticketName.textContent = fullName.value;
ticketGithub.textContent = github.value;
ticketEmail.textContent = email.value;
ticketCongratsName.textContent = fullName.value;

ticketPage.style.display = "none";
ticketCard.style.display = "flex";

const randomNumber = Math.floor(100000 + Math.random() * 900000);

ticketNumber.textContent = "#" + randomNumber;
});


const ticketNumber = document.querySelector("#ticket-number");