function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(s => s.style.display = 'none');
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.classList.remove('active');
    if (link.textContent.toLowerCase() === id.toLowerCase()) {
      link.classList.add('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  showSection('features');
});
