document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.tab-link');
  const sections = document.querySelectorAll('.games-container');
  const resetButton = document.getElementById('reset-tabs');

  // Default: show all sections side by side using flex
  sections.forEach(section => {
    section.style.display = 'flex';
  });

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);

      sections.forEach(section => {
        // Show only the clicked section
        if (section.id === targetId) {
          section.style.display = 'flex';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  resetButton.addEventListener('click', function () {
    // Show all sections again
    sections.forEach(section => {
      section.style.display = 'flex';
    });
  });
});
