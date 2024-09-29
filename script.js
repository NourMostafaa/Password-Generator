let passBox = document.getElementsByTagName("input");
let length = 8;
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
let allChars = upper + lower + number + symbol;
let btn = document.querySelector(".gen-btn");
let copy = document.querySelector(".display img");
let more = document.querySelector(".more");
let label = document.querySelector("label");
let lengthInput = document.querySelector(".length");
let error = document.querySelector(".error");

// Start Tool Tip 
// End Tool tip
function genPassword(){
    let password = "";  
        password += upper.charAt(Math.floor(Math.random() * upper.length));
        password += lower.charAt(Math.floor(Math.random() * lower.length));
        password += number.charAt((Math.random() * number.length));
        password += symbol.charAt(Math.random() * upper.length);
        while(password.length < length){
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
    passBox[0].value = password;
}

btn.addEventListener("click", genPassword)

copy.addEventListener("click", () => {
    passBox[0].select();
    document.execCommand("copy")
})

more.addEventListener("click", () => {
    label.classList.toggle("hidden");
    lengthInput.classList.toggle("hidden");
})

lengthInput.onblur = () => {
    if(lengthInput.value < 8 || lengthInput.value > 32){
        error.style = "display: block"
    }else {
        error.style = "display: none"
        length = lengthInput.value;
    }
    
}