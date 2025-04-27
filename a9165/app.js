function signIn() {
    document.getElementById("report-form").style.display = "block";  // Show the report form after sign-in
}

document.getElementById('water-quality').addEventListener('input', function () {
    const qualityValue = this.value;
    document.getElementById('water-quality-value').innerText = `Quality: ${qualityValue}%`;

    const slider = document.getElementById('water-quality');
    if (qualityValue < 30) {
        slider.style.backgroundColor = '#ff4d4d'; // Red for bad quality
    } else if (qualityValue < 70) {
        slider.style.backgroundColor = '#ffd700'; // Yellow for average quality
    } else {
        slider.style.backgroundColor = '#32cd32'; // Green for good quality
    }
});

document.getElementById('photo').addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const preview = document.createElement('img');
        preview.src = e.target.result;
        preview.alt = "Uploaded Photo";
        preview.style.maxWidth = "200px";
        document.body.appendChild(preview); // Append image preview to the page
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function submitReport() {
    const location = document.getElementById("location").value;
    const quality = document.getElementById("water-quality").value;
    const status = document.getElementById("status").value;
    const photo = document.getElementById("photo").files[0];

    if (location && quality && status) {
        alert(`Report submitted!\nLocation: ${location}\nQuality: ${quality}%\nStatus: ${status}`);
        // You can integrate backend logic here to save the report

        // Reset form after submission
        document.getElementById("location").value = "";
        document.getElementById("water-quality").value = 50;
        document.getElementById("status").value = "Working";
        document.getElementById("photo").value = "";
        document.getElementById("water-quality-value").innerText = "Quality: 50%";
    } else {
        alert("Please fill out all the fields before submitting.");
    }
}
