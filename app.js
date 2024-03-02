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