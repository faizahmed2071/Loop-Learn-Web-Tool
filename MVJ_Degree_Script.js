let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
navLinks.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }
});
// Handle click on the "Courses" dropdown
document.getElementById('coursesDropdown').addEventListener('click', function() {
    var dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
});


// Handle click on the "AboutMvjDropdown" dropdown
document.getElementById('aboutMVJDropdown').addEventListener('click', function() {
    var aboutdropdownContent = this.querySelector('.dropdown-content');
    aboutdropdownContent.style.display = (aboutdropdownContent.style.display === 'block') ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
});
function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlay').style.zIndex = '9999';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : 'faizahmed2024@gmail.com',
        From : 'faizahmed911gt3@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "Name:"+ document.getElementById("user_name").value
            + "<br> Email: " + document.getElementById("user_email").value
            + "<br> Phone Number: " + document.getElementById("user_contactNo").value
            + "<br> Course: " + document.getElementById("course").value
            + "<br> Message: " + document.getElementById("user_message").value
    }).then(
      message => alert("Form filled successfully")
    );
}
