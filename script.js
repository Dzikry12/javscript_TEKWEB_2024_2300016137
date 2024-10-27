const body = document.body
document.title = 'Prak 3'

// background color
document.getElementById('bgColor').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

// Font size
document.getElementById('fontSize').addEventListener('input', function() {
    document.body.style.fontSize = this.value + 'px';
});

// Toggle Dark Mode
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Change Font Style
document.getElementById('fontStyle').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});