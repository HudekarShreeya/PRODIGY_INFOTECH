// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Here you can add your logic to handle the form submission, like sending it to a server or displaying a confirmation message
  
  // For demonstration purposes, let's just log the values
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
  // Clear form fields after submission
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Display a confirmation message
  alert('Message sent successfully!');
});
