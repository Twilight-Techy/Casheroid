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
  