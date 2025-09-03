const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    document.querySelectorAll('.error').forEach(span => span.textContent = '');

    let valid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        document.getElementById('nameError').textContent = 'Име је обавезно!';
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Е-мејл адреса није исправна!';
        valid = false;
    }

    const passPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Лозинка није исправно унета!';
        valid = false;
    }

    if (password !== confirm) {
        document.getElementById('confirmError').textContent = 'Лозинке се не поклапају!';
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Порука је обавезна!';
        valid = false;
    }

    if (valid) {
        alert('Форма је успешно послата!');
        form.reset();
    }
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.toggle('active');
});