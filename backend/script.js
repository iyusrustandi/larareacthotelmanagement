document.addEventListener('DOMContentLoaded', function () {
  fetch('sidebar.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById('sidebar-container').innerHTML = html;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
