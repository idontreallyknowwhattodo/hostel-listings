// This adds a slight parallax effect to the hero background when you move your mouse
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// For mobile devices, use touch movement
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        const hero = document.querySelector('.hero');
        const x = (touch.clientX / window.innerWidth - 0.5) * 20;
        const y = (touch.clientY / window.innerHeight - 0.5) * 20;
        hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    }
});
