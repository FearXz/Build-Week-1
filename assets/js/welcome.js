function validateForm() {
    var checkbox = document.getElementById('checkbox');
    var errorMessage = document.getElementById('error-message');

    if (!checkbox.checked) {
      errorMessage.style.display = 'block';
      return false; // Impedisce l'invio del form
    } else {
      errorMessage.style.display = 'none';
      return true; // Consente l'invio del form
    }
  }