const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I knew you'd say yes! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueG56ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/lTQF0ODLLJHzaOBCFy/giphy.gif";
    document.querySelector('.buttons').style.display = 'none';
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '🌸', '✨', '💖', '🧸'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 400);
