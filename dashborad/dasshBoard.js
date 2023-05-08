// DashBoard
let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Page Add Course
let send = document.querySelector('#send');
let alert = document.querySelector(".alert");
let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

send.onclick = () => {
    alert.style.display = 'block';
}

setInterval(function() {
    alert.style.display = "none";
}, 5000);

// Toggle Navigation DashBoard
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector(".navigation");
let main = document.querySelector('.main');

toggle.onclick = () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active')
}