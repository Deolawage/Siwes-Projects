//Script Starts here!!!

//Submit Button

const form = document.querySelector("#contact-form");
const successToast = document.querySelector("#contact-form-success-toast");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    successToast.classList.remove("hidden");

    setTimeout(function () {
        successToast.classList.add("hidden");
    }, 7000);
});




const firstForm = document.getElementById('contact-first-name');
const FirstPrompt = document.querySelectorAll('.contact-prompt')[0];

    firstForm.addEventListener('mouseover', (e) =>  {
    FirstPrompt.textContent = 'This field is required';
  
});

firstForm.addEventListener('mouseout', (e) => {
    FirstPrompt.textContent = '';
  
});

firstForm.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    FirstPrompt.textContent = '';
});




const lastForm = document.getElementById('contact-last-name');
const LastPrompt = document.querySelectorAll('.contact-prompt')[1];

lastForm.addEventListener('mouseover', (e) =>  {
    LastPrompt.textContent = 'This field is required';
})

lastForm.addEventListener('mouseout', (e) => {
    LastPrompt.textContent = '';
  
});

lastForm.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    LastPrompt.textContent = '';
});




const emailForm = document.getElementById('email-address');
const message = document.querySelector('#email-address-prompt');

emailForm.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    e.preventDefault();
    message.textContent = 'Please enter a valid email address';
});

emailForm.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    e.preventDefault();
    message.textContent = '';
});

emailForm.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    message.textContent = '';
});

const generalEnquiry = document.getElementById('contact-query-type');
const generalEnquiryPrompt = document.querySelectorAll('.contact-prompt')[2];

generalEnquiry.addEventListener('mouseover', (e) => {
    generalEnquiryPrompt.textContent = 'This field is required';
});

generalEnquiry.addEventListener('mouseout', (e) => {
    generalEnquiryPrompt.textContent = '';
});


generalEnquiry.addEventListener('click', (e) => {
    e.stopPropagation();
    generalEnquiryPrompt.textContent = '';
});

const messageForm = document.getElementById('message');
const messagePrompt = document.querySelectorAll('.contact-prompt')[3];

messageForm.addEventListener('mouseover', (e) => {
    messagePrompt.textContent = 'This field is required';
});

messageForm.addEventListener('mouseout', (e) => {
    messagePrompt.textContent = '';
});

messageForm.addEventListener('click', (e) => {
    e.stopPropagation();
    messagePrompt.textContent = '';
}); 


const consentCheckbox = document.getElementById('consent-checkbox');
const consentPrompt = document.querySelectorAll('.contact-prompt')[4];

consentCheckbox.addEventListener('mouseover', (e) => {
    consentPrompt.textContent = 'To submit this form, please consent to being contacted';
});

consentCheckbox.addEventListener('mouseout', (e) => {
    consentPrompt.textContent = '';
});

consentCheckbox.addEventListener('click', (e) => {
    e.stopPropagation();
    consentPrompt.textContent = '';
});









