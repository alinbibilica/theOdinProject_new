let counter = 3; // Variable to modify
  const outputDiv = document.getElementById('loopOutput');

  // Function to display current value
  function display() {
    outputDiv.innerHTML += '<p>Counter: ' + counter + '</p>';
  }

  // Initial display
  display();

  // Button event listeners
  document.getElementById('incrementBtn').addEventListener('click', () => {
    counter++;
    display();
  });

  document.getElementById('decrementBtn').addEventListener('click', () => {
    counter--;
    display();
  });