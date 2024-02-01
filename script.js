function login() {
    
    alert('Login button clicked');
}

function showSetup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('setupForm').style.display = 'block';
}

function showForgotPassword() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
}
    function completeSetup() {
        
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

       
        if (fullName === '' || email === '' || newPassword === '' || confirmPassword === '') {
            alert('Please fill in all fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        alert('Setup completed successfully:\nFull Name: ' + fullName + '\nEmail: ' + email);

        
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
        

        
    }
   
    function sendPasswordResetEmail() {
        
        var resetEmail = document.getElementById('email').value;

        
        if (resetEmail === '') {
            alert('Please enter your email address');
            return;
        }

        alert('Password reset email sent to: ' + resetEmail);
        
        document.getElementById('email').value = '';
     
    }

    function showLogin() {
        
        document.getElementById('forgotPasswordForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }



