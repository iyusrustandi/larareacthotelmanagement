// JavaScript functionality can be added as needed
console.log('Dashboard loaded');

// Function to load the sidebar dynamically using AJAX
function loadSidebar() {
  fetch('sidebar.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('sidebar-container').innerHTML = data;
    })
    .catch((error) => console.error('Error loading sidebar:', error));
}

// Load sidebar on page load
loadSidebar();

console.log('Dashboard loaded');

// sidebar toggle
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});
