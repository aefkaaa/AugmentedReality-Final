document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }, 3000);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    if (sectionId === 'dashboard') {
        document.getElementById('dashboard').classList.remove('hidden');
    } else {
        document.getElementById(`${sectionId}-section`).classList.remove('hidden');
    }
    toggleMenu(); // Hide the menu after selecting a section
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// Add event listeners to the buttons to show the dashboard section
document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function() {
        showSection('dashboard');
    });
});
