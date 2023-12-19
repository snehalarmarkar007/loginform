function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Perform registration logic (send data to server, etc.)
    console.log(`Registering user: ${username}, ${email}, ${password}`);
}

function login() {
    const loginIdentifier = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Perform login logic (send data to server, etc.)
    console.log(`Logging in user: ${loginIdentifier}, ${password}`);
}
