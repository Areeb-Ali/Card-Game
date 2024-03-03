// Initializing Emojis

// Creates an array named emojis containing ten emoji characters.
const emojis = ["😵", "😵", "😇", "😇", "😊", "😊", "❤️", "😎", "🎯", "😍",]
// Shuffles the order of the emojis in the emojis array using a random sort function. 
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

// Creating the Game Board 

// Starts a loop that iterates through each emoji in the emojis array.
    for (var i = 0; i < emojis.length; i++) {
        // Creates a new div element representing a box on the game board.
        let box = document.createElement('div')
        // Assigns a class name of item to the box for styling purposes.
        box.className = 'item';
        // Sets the inner HTML of the box to the corresponding emoji from the shuffled shuf_emojis array.
        box.innerHTML = shuf_emojis[i]
        // Attaches a click event listener to the box, triggering a function when it's clicked.
        box.onclick = function () {

            // Handling Click Events

            // Adds the class boxOpen to the clicked box, visually indicating it's open.
            this.classList.add('boxOpen')
            // Delays the execution of the next function by 500 milliseconds (half a second).
            setTimeout(function () {

                // Checking for Matches (delayed function) 

                // Checks if more than one box is currently open.
                if (document.querySelectorAll('.boxOpen').length > 1) {
                    // If two boxes are open:
                    if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                        if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                            alert('YOU WIN')
                        }
                    }
                    else {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    }

                }
            }, 500)
        }
        document.querySelector('.game').appendChild(box);


    }
    // Add Coins Function 
    // Replace "100" with the actual starting number of coins
const startingCoins = 50;

// Get the coin display element
const coinDisplay = document.getElementById('coin-display');
const specialKeyInput = document.getElementById('special-key-input');
const addCoinsButton = document.getElementById('add-coins-button');
const wrongKeyMessage = document.getElementById('wrong-key-message');

// Update the coin display initially
coinDisplay.textContent = `You have ${startingCoins} coins.`;

// Function to update coin display
function updateCoins(change) {
  const currentCoins = parseInt(coinDisplay.textContent.split(' ')[2]);
  const newCoins = currentCoins + change;
  coinDisplay.textContent = `You have ${newCoins} coins.`;
}

// Validate special key and handle coin addition
addCoinsButton.addEventListener('click', () => {
  const inputValue = specialKeyInput.value.trim().toLowerCase();
  const parts = inputValue.split(' ');

  if (parts.length !== 2) {
    wrongKeyMessage.textContent = "Invalid input format (e.g., secretkey 100)";
    wrongKeyMessage.style.display = "block";
    return;
  }

  const specialKey = parts[0];
  const amount = parseInt(parts[1]);

  if (specialKey !== "secretkey") {
    wrongKeyMessage.textContent = "Wrong special key!";
    wrongKeyMessage.style.display = "block";
    return;
  }

  // Replace with your actual validation for the amount (if needed)
  if (amount <= 0) {
    wrongKeyMessage.textContent = "Invalid amount. Please enter a positive number.";
    wrongKeyMessage.style.display = "block";
    return;
  }

  updateCoins(amount);
  specialKeyInput.value = "";
  wrongKeyMessage.style.display = "none";
});
