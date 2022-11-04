const passwordInput = document.querySelector(".password-box input"),
        copyIcon = document.querySelector(".password-box i"),
        rangeInput = document.querySelector(".range-box input"),
        sliderNumber = document.querySelector(".range-box .slider-number"),
        generateButton = document.querySelector(".wrapper .password-generator");

let allCharacters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

function generatePassword() {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value ; i++) {
        let randomIndice = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomIndice];
    }

    passwordInput.value=newPassword;
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); 
}

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

generateButton.addEventListener("click",generatePassword);

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});

generatePassword();
