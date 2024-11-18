let submit = document.getElementById("submit");
let nameSaved = document.getElementById("name");
let emailSaved = document.getElementById("email");
let phoneSaved = document.getElementById("phone");
let infoSaved = document.getElementById("info");
let selectSaved = document.getElementById("select");
let consentSaved = document.getElementById("consent");   



submit.addEventListener('click', function (event) {
    event.preventDefault();
    let name = nameSaved.value;
    let email = emailSaved.value;
    let phone = phoneSaved.value;
    let info = infoSaved.value;
    let select = selectSaved.value;
    let consent = consentSaved.value;

    if (name && email && phone && info && select && consent) {
        alert("Thank you for entering our Holly Jolly giveaway!")
    } else {
        alert("Please fill out all forms before submitting.");
    }
        

});