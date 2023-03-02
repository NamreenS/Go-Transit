// Get all "Hello World" links
const links = document.querySelectorAll('.link');

// Add event listener to each link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    // Remove "active" class from all links
    links.forEach(l => {
      l.classList.remove('active');
    });
    // Add "active" class to clicked link
    this.classList.add('active');
  });
});