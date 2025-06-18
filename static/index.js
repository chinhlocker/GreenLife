// Dark/Light Mode Switch sử dụng class W3.CSS
const body = document.body;
const modeBtn = document.getElementById('modeBtn');

function toggleDarkMode() {
    body.classList.toggle('w3-dark-gray');
    body.classList.toggle('w3-text-white');

    document.querySelectorAll('.w3-card-4').forEach(card => {
        card.classList.toggle('w3-dark-gray');
        card.classList.toggle('w3-text-white');
    });

    const isDark = body.classList.contains('w3-dark-gray');
    modeBtn.textContent = isDark ? "Chuyển sang Light Mode" : "Chuyển sang Dark Mode";
    localStorage.setItem('darkMode', isDark);
}

window.onload = function () {
    const isDark = JSON.parse(localStorage.getItem('darkMode'));
    if (isDark) {
        body.classList.add('w3-dark-gray', 'w3-text-white');
        document.querySelectorAll('.w3-card-4').forEach(card => {
            card.classList.add('w3-dark-gray', 'w3-text-white');
        });
        modeBtn.textContent = "Chuyển sang Light Mode";
    }
};