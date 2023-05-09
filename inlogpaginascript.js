/*
const form = document.querySelector('form');
const error = document.querySelector('.error');
*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    if (username === 'myusername' && password === 'mypassword') {
        window.location.href = 'welcome.html';
    } else {
        error.textContent = 'Invalid username or password';
    }
});
