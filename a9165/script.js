const sheetURL = "https://sheetdb.io/api/v1/bnxrx2avfhsob"; // <-- replace with your actual SheetDB URL

// Read the current status
fetch(sheetURL)
  .then(response => response.json())
  .then(data => {
    if (data && data[0]) {
      document.getElementById('status').innerText = `Current Status: ${data[0].status}`;
      document.getElementById('lastUpdated').innerText = `Last Updated: ${data[0].updated_at}`;
    } else {
      document.getElementById('status').innerText = "No data available.";
    }
  });

// Handle new reports
document.getElementById('reportForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const report = document.getElementById('reportType').value;
  const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD

  fetch(sheetURL, {
    method: 'PATCH', // Update instead of create new
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [
        {
          status: report,
          updated_at: today
        }
      ]
    })
  }).then(() => {
    alert('Report submitted! Thank you 💖');
    location.reload(); // Refresh to show new status
  });
});
