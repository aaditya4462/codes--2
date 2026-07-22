document.getElementById('submit-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorDiv = document.getElementById('error-message');
    const successSection = document.getElementById('success-section');

    errorDiv.style.display = 'none';

    if (name === "" || email === "" || phone === "") {
        errorDiv.innerText = "All fields are required.";
        errorDiv.style.display = 'block';
    } else if (phone.length !== 10) {
        errorDiv.innerText = "Phone number must be exactly 10 digits.";
        errorDiv.style.display = 'block';
    } else {
        document.getElementById('disp-name').innerText = name;
        document.getElementById('disp-email').innerText = email;
        document.getElementById('disp-phone').innerText = phone;

        successSection.style.display = 'block';
    }
});