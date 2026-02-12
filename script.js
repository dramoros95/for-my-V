const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

// Make "No" button move
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Success Event
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th! ❤️🌸";
    
    // Change to a happy bear gif
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueG56ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/lTQF0ODLLJHzaOBCFy/giphy.gif";
    
    // Hide buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Create extra celebration hearts
    for(let i=0; i<20; i++) {
        createHeart();
    }
});

// Background Heart Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '🌸', '🧸', '✨'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 500);
