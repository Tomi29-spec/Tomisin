
  function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the input fields
    const inputText = document.getElementById('inputText').value.trim();
    const passwordText = document.getElementById('passwordText').value.trim();

    // Get the error message element
    const errorMessage = document.getElementById('errorMessage');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validate the input fields
    if (inputText === '' || passwordText === '') {
      errorMessage.textContent = 'Please fill in both fields.';
      return;
    }

    // Perform further validation if needed (e.g., check if email format is correct)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputText.includes('@') && !emailRegex.test(inputText)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // If everything is valid, you can proceed with form submission
    alert('Congratulations!!! You can now proceed to Students Portal');
    console.log('Email or Jamb Registration Number:', inputText);
    console.log('Password:', passwordText);
  }

  // Attach the validateForm function to the form's submit event
  document.getElementById('login-Form').addEventListener('submit', validateForm);

