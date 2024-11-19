// Function to animate the counter
function startCounter() {
  // Select all elements with the class 'statistic-counter'
  const counters = document.querySelectorAll('.statistic-counter');
  
  counters.forEach(counter => {
      // Get the target value from the data-target attribute
      const target = parseInt(counter.getAttribute('data-target')); // Target value (e.g., 200)
      
      let currentValue = 0;  // Start from 0
      
      // Set the duration for the animation (in milliseconds)
      const duration = 2000;  // 2 seconds for the animation
      
      // Calculate the increment (how much to increase every 50ms)
      const increment = target / (duration / 50);  // Increment per 50ms
      
      // Use setInterval to update the counter every 50ms
      const interval = setInterval(() => {
          currentValue += increment;  // Increase the counter by increment

          // If the counter has reached or exceeded the target, stop the animation
          if (currentValue >= target) {
              currentValue = target;  // Set the current value to the target value
              clearInterval(interval);  // Stop the animation
          }

          // Update the display with the current value
          counter.textContent = Math.floor(currentValue);  // Round to nearest integer
      }, 50);  // Update the counter value every 50ms
  });
}

// Function to update the progress bar
function updateProgressBar(id, targetPercentage) {
  var progressBar = document.getElementById(id);
  let currentProgress = 0;

  var interval = setInterval(function() {
      // Increase progress by 1% until it reaches the target
      if (currentProgress < targetPercentage) {
          currentProgress++;
          progressBar.style.width = currentProgress + '%';
          progressBar.setAttribute('aria-valuenow', currentProgress);
          progressBar.innerHTML = currentProgress + '%';
      } else {
          clearInterval(interval);
      }
  }, 50); // Speed of progress (in milliseconds)
}

// Combined window.onload function to trigger both animations
window.onload = function() {
  // Start the counter animation
  startCounter();
  
  // Start the progress bar animations
  updateProgressBar('jsProgressBar', 50);     // JavaScript Progress
  updateProgressBar('cssProgressBar', 50);    // CSS Progress
  updateProgressBar('pythonProgressBar', 50); // Python Progress
  updateProgressBar('htmlProgressBar', 50);   // HTML Progress
};



