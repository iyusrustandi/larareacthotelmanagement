// Function to load HTML components
function loadComponent(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load navbar and sidebar
loadComponent('navbar', 'components/navbar.html');
loadComponent('sidebar', 'components/sidebar.html');
