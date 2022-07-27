import throttle from "lodash.throttle";


const LOCALSTORAGE_KEY = "feedback-form-state";

let formData = {email: "", message: ""};
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea")
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput, 500));

fillingTextarea()

// 1 Dodav v lokal danni 
function onTextareaInput(event) {
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

// 2 Pru onovlenni vutyagnyv z lokaly i vstavuv y polya

function fillingTextarea() {
    
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    
    try {
    savedData = JSON.parse(savedData);
     } catch (error) {
     console.log(error.name); 
     console.log(error.message); 
    }
    
    if (savedData) {
        refs.input.value = savedData.email;     
        refs.textarea.value = savedData.message; 
        
        formData = {email: savedData.email, message: savedData.message}
    }
}
// 3 Ochustuv formy pislya vidpravku i vuviv danni v consoli 

function onFormSubmit(event) {
    event.preventDefault();
    console.log("email:", formData.email, "message:", formData.message);
    alert(`email: ${formData.email} message: ${formData.message}`);
    event.currentTarget.reset();
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
}



