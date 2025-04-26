// Initialize the QR code scanner
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

// Attempt to access the user's camera and start scanning
Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
        // Choose the first camera and start the scanner when button is clicked
        document.getElementById("scanButton").addEventListener('click', function() {
            scanner.start(cameras[0]);
        });
    } else {
        console.error("No cameras found.");
    }
}).catch(function(e) {
    console.error("Error accessing the camera: ", e);
});

// Add event listener to handle QR code scan results
scanner.addListener('scan', function(content) {
    console.log("QR Code Scanned:", content);  // Debugging log

    const waterData = parseQRCode(content); // Parse the QR code content for info

    // Update the page with data from the QR code
    document.getElementById('safeStatus').innerText = "Safe to Drink: " + waterData.safeToDrink;
    document.getElementById('lastCleaned').innerText = "Last Cleaned: " + waterData.lastCleaned;
    document.getElementById('nearbyAccess').innerText = "Nearby Clean Water: " + waterData.nearbyAccess;
    document.getElementById('hygieneTips').innerText = "Water Hygiene Tips: " + waterData.hygieneTips;
});

// Function to parse QR code content (dummy for simulation)
function parseQRCode(content) {
    console.log("Parsing QR code content:", content);  // Debugging log

    // Simulating parsed QR data from the code (this should match what QR contains)
    return {
        safeToDrink: content === "safe" ? "Yes 🌸" : "No 💧",
        lastCleaned: "2025-04-25 🌸",
        nearbyAccess: "Nearby well: 50 meters 💧",
        hygieneTips: "Wash hands regularly with clean water and soap 💖."
    };
}
