function copyText() {
    // Get the text you want to copy
    var textToCopy = document.getElementById("textToCopy").innerText;
  
    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch(err => {
        console.error("Error in copying text: ", err);
      });
  }

  // JavaScript to add the spin animation on click
  function spinFan() {
    document.getElementById('fan-icon').addEventListener('click', function() {
      const fanIcon = this;

      // Add the spinning animation class
      fanIcon.classList.add('spin-animation');

      // Set a timeout for 10 seconds (10000ms)
      setTimeout(function() {
        // Remove the spin class to stop the animation
        fanIcon.classList.remove('spin-animation');

        // Trigger the alert after 10 seconds
        alert('Congratulations! You won ₦200');
      }, 5000); // 10000 milliseconds = 10 seconds
    });
  }