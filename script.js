// Theme switch functionality
const themeSwitch = document.getElementById('themeSwitch');

// Check if user has a saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
}

// Toggle theme when switch is changed
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
