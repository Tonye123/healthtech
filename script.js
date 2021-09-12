
let loginForm = document.getElementById('log-in')
let signupForm = document.getElementById('sign-up')

let toggleButton = document.getElementsByClassName('toggle-btn')[0]
let navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function signup() {

    loginForm.style.left ="-400px";
    signupForm.style.left = "50px";

    

}

function login() {

    loginForm.style.left ="50px";
    signupForm.style.left = "450px";

    

}