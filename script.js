const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
    // This makes the button jump to a random spot
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    document.getElementById('question').innerHTML = "Yay! I love you! ❤️";
    document.querySelector('.buttons').style.display = 'none';
});
