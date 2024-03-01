const targetDate = new Date("2024-03-08T00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = targetDate - now;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("timer").textContent = 
    ("0" + hours).slice(-2) + ":" + 
    ("0" + minutes).slice(-2) + ":" + 
    ("0" + seconds).slice(-2);

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").textContent = "EXPIRED";
  }
}, 1000); // Update every second