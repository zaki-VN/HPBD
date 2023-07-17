let disableEffectsFlag = false;

function createFirework() {
    if (!disableEffectsFlag) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.backgroundColor = getRandomColor();
        firework.style.animationDuration = (Math.random() * 1 + 1) + 's';
        firework.style.animationDelay = (Math.random() * 0.5) + 's';
        document.querySelector('.fireworks').appendChild(firework);
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}

setInterval(createFirework, 100);

function openCard() {
    const card = document.querySelector('.card');
    card.classList.add('open');
    
    const envelopeBtn = document.querySelector('.envelope-btn');
    envelopeBtn.style.display = 'none';
}

function disableEffects() {
    disableEffectsFlag = false;
}

function animateText() {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line) => {
        const words = line.querySelectorAll('.word');
        words.forEach((word) => {
            const chars = word.textContent.split('');
            word.textContent = '';
            chars.forEach((char) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.className = 'char';
                word.appendChild(span);
            });
        });
    });
}

animateText();

function getRandomColor() {
    const colors = ['#ff69b4', '#69d6e9', '#ffbedb', '#ffd700', '#00ff00', '#800080', '#ff0000', '#ffa500'];
    return colors[Math.floor(Math.random() * colors.length)];
}
