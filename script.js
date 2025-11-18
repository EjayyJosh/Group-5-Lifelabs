// script.js (optional)
document.querySelector('.search-btn').addEventListener('click', () => {
  const query = document.querySelector('.search-input').value;
  alert(`You searched for: ${query}`);
});