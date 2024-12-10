document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login logic here
            console.log('Login submitted');
        });
    }

    // Signup Form Handler
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your signup logic here
            console.log('Signup submitted');
        });
    }

    // Social Auth Handlers
    const googleAuth = document.querySelector('.google-auth');
    const githubAuth = document.querySelector('.github-auth');

    if (googleAuth) {
        googleAuth.addEventListener('click', function() {
            // Add Google authentication logic
            console.log('Google auth clicked');
        });
    }

    if (githubAuth) {
        githubAuth.addEventListener('click', function() {
            // Add GitHub authentication logic
            console.log('GitHub auth clicked');
        });
    }
}); 