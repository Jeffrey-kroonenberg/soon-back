// Countdown Timer functionality
let countdownInterval;

// Set your target date here (year, month (0-11), day, hour, minute, second)
const targetDate = new Date(2024, 5, 1, 12, 0, 0).getTime(); // June 1, 2024, 12:00:00

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Start the countdown
updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);

// Logo customization
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    const newLogoUrl = prompt('Enter new logo URL:');
    if (newLogoUrl) {
        logo.src = newLogoUrl;
    }
});

// Add dynamic background elements
function createBackgroundElement() {
    const element = document.createElement('div');
    element.className = 'background-element';
    element.style.cssText = `
        position: fixed;
        width: ${Math.random() * 100 + 50}px;
        height: ${Math.random() * 100 + 50}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.1});
        border-radius: 50%;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        pointer-events: none;
        z-index: 0;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
    `;
    document.body.appendChild(element);
}

// Create multiple background elements
for (let i = 0; i < 20; i++) {
    createBackgroundElement();
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Add train smoke effect
function createSmoke() {
    const train = document.querySelector('.train');
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        top: 10px;
        left: 0;
        animation: smokeFloat 2s ease-out forwards;
    `;
    train.appendChild(smoke);
    setTimeout(() => smoke.remove(), 2000);
}

// Add smoke animation
const smokeStyle = document.createElement('style');
smokeStyle.textContent = `
    @keyframes smokeFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
        }
        100% {
            transform: translate(-50px, -50px) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(smokeStyle);

// Create smoke periodically
setInterval(createSmoke, 500); 