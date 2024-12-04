const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

// Items Array
const items = [
	{ name: "bee", image: "bee.png" },
	{ name: "crocodile", image: "crocodile.png" },
	{ name: "macaw", image: "macaw.png" },
	{ name: "gorilla", image: "gorilla.png" },
	{ name: "tiger", image: "tiger.png" },
	{ name: "monkey", image: "monkey.png" },
	{ name: "chameleon", image: "chameleon.png" },
	{ name: "piranha", image: "piranha.png" },
	{ name: "anaconda", image: "anaconda.png" },
	{ name: "sloth", image: "sloth.png" },
	{ name: "cockatoo", image: "cockatoo.png" },
	{ name: "toucan", image: "toucan.png" },
];

// Initial Time
let seconds = 0,
	minutes = 0;

// Initial moves and win count
let movesCount = 0,
	winCount = 0;

// For timer
const timeGenerator = () => {
	seconds += 1;
	// Minutes logic
	if (seconds >= 60) {
		minutes += 1;
		seconds = 0;
	}
	// Format time before displaying
	let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
	let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
	timeValue.innerHTML = `<span>Time:</span> ${minutesValue}: ${secondsValue}`;
};

// For calculating moves
const movesCounter = () => {
	movesCount += 1;
	moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
};

// Pick random objects from the items array
const generateRandom = (size = 4) => {
	let tempArray = [...items];
	let cardValues = [];
	size = (size * size) / 2;
	for (let i = 0; i < size; i++) {
		const randomIndex = Math.floor(Math.random() * tempArray.length);
		cardValues.push(tempArray[randomIndex]);
		tempArray.splice(randomIndex, 1);
	}
	return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
	gameContainer.innerHTML = "";
	cardValues = [...cardValues, ...cardValues];
	cardValues.sort(() => Math.random() - 0.5);
};
