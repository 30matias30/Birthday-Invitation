const checkForm = document.getElementById('checkForm');
const form = document.getElementById('form-window');
const closeButton = document.getElementById('close-form');

// SHOW WINDOW

checkForm.addEventListener('click', showForm);

function showForm () {
    form.classList.toggle('show')
}

// CLOSE WINDOW

closeButton.addEventListener('click', closeForm);

function closeForm () {
    form.classList.remove('show')
}