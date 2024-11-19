//mouse hover event

var hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'pink';
    hoverDiv.textContent = `Hover functions are fun!`;
});
hoverDiv.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
    hoverDiv.textContent = `Put your cursor here for a silly message`;
});

//keyboard event (key down)

document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
    }
);

//focus event
let focusEvent = document.getElementById('focusField');
focusEvent.addEventListener("focus", (event) => {
    event.target.style.background = 'pink';
    console.log(`Field in focus`);
});
let blurEvent = document.getElementById('focusField');
blurEvent.addEventListener("blur", (event) => {
    event.target.style.background = 'white';
    console.log(`Field blurred`);

});

// delegation event

let list = document.getElementById('itemList');

list.addEventListener('click', function(event) {
    if (event.target.className === 'dele') {
        alert('You selected ' + event.target.textContent +'!');
        event.target.style.backgroundColor = 'pink'; 
    }
});

// form validation

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