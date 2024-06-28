function toggleLists() {
  var visibleList = document.getElementById('visible-list');
  var hiddenList = document.getElementById('hidden-list');

  if (visibleList.classList.contains('hidden')) {
    // Switch to visible list
    visibleList.classList.remove('hidden');
    hiddenList.classList.add('hidden');
    document.getElementById('content1').classList.remove('hidden');
    document.getElementById('content2').classList.add('hidden');
  } else {
    // Switch to hidden list
    visibleList.classList.add('hidden');
    hiddenList.classList.remove('hidden');
    document.getElementById('content1').classList.add('hidden');
    document.getElementById('content2').classList.remove('hidden');
  }
}

// gotten from the group website, used W3 to create and Chat GPT to get it modified for this webpage
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // Show the clicked section and hide others
      sections.forEach(section => {
        section.classList.toggle('hidden', section.id !== targetId);
      });

      // Scroll to the corresponding section
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Toggle lists visibility based on the targeted section
      if (targetId === 'content1' || targetId === 'content2') {
        toggleLists();
      }
    });
  });
});
