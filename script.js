
console.log("Welcome to my personal portfolio!");

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigating to:", link.getAttribute('href'));
  });
});
