const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return; //if the input received is empty then it returns from here
    generateBtn.innerText = "Generating QR Code...";
    // When getting a qr code of user entered value using qrserver
    // API and passing the API will be returned to the src of qrImg
    qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrValue;
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });  
});qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});