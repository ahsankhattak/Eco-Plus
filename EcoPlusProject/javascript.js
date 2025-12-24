const scanBtn = document.getElementById('scan-btn');
const statusText = document.getElementById('system-status');

scanBtn.addEventListener('click', () => {
    // 1. Change appearance to 'Connecting'
    scanBtn.innerText = "🛰️ Linking to Satellite...";
    scanBtn.classList.add('connecting');
    statusText.innerText = "System Status: Establishing Uplink...";
    statusText.style.color="orange"
    // 2. Simulate the 'Deep Cloud' connection delay
    setTimeout(() => {
        scanBtn.innerText = "📡 Connection Secure";
        scanBtn.classList.remove('connecting');
        scanBtn.style.backgroundColor = "#00c853"; // Bright green for success
        statusText.innerText = "System Status: Receiving Live Data...";
        statusText.style.backgroundColor = "#0a2608"; // Extremely dark forest green
         statusText.style.color = "#a5d6a7"; // Pale mint green text
         statusText.style.boxShadow = "0 0 10px #2e7d32";
        // This is where you will eventually call your Java Backend!
    }, 3000); // 3 seconds delay
});s

