const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');
let firstCard, secondCard;
let hasFlippedCard = false;

function handleCardClick(event) {
	const clickedCard = event.target;
	clickedCard.classList.add('flipped');
	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = clickedCard;
		return;
	}
	secondCard = clickedCard;
	checkForMatch();
}

function checkForMatch() {
	if (firstCard.dataset.value === secondCard.dataset.value) {
		alert(`Match! Value: ${firstCard.dataset.value}`);
		resetBoard();
	} else {
		alert('No match! Try again.');
		unflipCards();
	}
}

function unflipCards() {
	setTimeout(() => {
		firstCard.classList.remove('flipped');
		secondCard.classList.remove('flipped');
		hasFlippedCard = false;
	}, 1000);
}

function resetBoard() {
	firstCard = null;
	secondCard = null;
	hasFlippedCard = false;
	const cards = document.querySelectorAll('.card');
	cards.forEach(card => card.classList.remove('flipped'));
}

function shuffleCards() {
	gameBoard.addEventListener('click', handleCardClick);
}