document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');

        darkModeToggle.innerHTML = isDarkMode
            ? '<i class="fas fa-sun"></i> Mode Clair'
            : '<i class="fas fa-moon"></i> Mode Sombre';

        localStorage.setItem('darkMode', isDarkMode);
    }

    if (localStorage.getItem('darkMode') === 'true') body.classList.add('dark-mode');

    darkModeToggle.addEventListener('click', toggleDarkMode);
});

