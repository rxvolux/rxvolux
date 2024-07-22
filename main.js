document.addEventListener("DOMContentLoaded", () => {
    const purpleGradient = document.getElementById('purple_gradient');
    const beigeGradient = document.getElementById('beige_gradient');

    let start = null;

    const animateBlobs = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        const purpleX = 20 + Math.sin(progress / 2000) * 2; // Adjust the divisor to change speed
        const purpleY = 70 + Math.cos(progress / 3000) * 2; // Adjust the divisor to change speed
        const beigeX = 80 + Math.cos(progress / 2500) * 2; // Adjust the divisor to change speed
        const beigeY = 30 + Math.sin(progress / 3500) * 2; // Adjust the divisor to change speed

        purpleGradient.style.left = `${purpleX}%`;
        purpleGradient.style.top = `${purpleY}%`;

        beigeGradient.style.left = `${beigeX}%`;
        beigeGradient.style.top = `${beigeY}%`;

        requestAnimationFrame(animateBlobs);
    };

    requestAnimationFrame(animateBlobs);
});