/*----- constants -----*/
const players = {
    '1': ['burlywood', 'X'],
    '-1': ['lightsteelblue', 'O'],
	'null': ['yellowgreen', ' '],
}

const winCombo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizonal combos
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical combos
    [0, 4, 8], [2, 4, 6] //diagonal combos
]

/*----- app's state (variables) -----*/
let board = [];
let turn;
let winner;

/*----- cached element references -----*/
let cellEls = Array.from(document.querySelectorAll('#gameBoard > div')); //pops nodelist into an array
let msgEl = document.getElementById('msg');
let body = document.querySelector('body');

/*----- event listeners -----*/
document.getElementById('gameBoard').addEventListener('click', handleClick);
document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/
function init() {
    board =
    [
        null, null, null, //top
        null, null, null, //mid
        null, null, null //bottom
	];
	turn = 1;
    // turn = Object.keys(players)[Math.round(Math.random() * 1)]; //Random start was breaking diagonal combos. I left it out untilli figure it out.
    winner = null;
	render();
};

function render() {
	board.forEach(function(cellVal, cellIdx) {
		if (winner ? body.style.backgroundColor = players[null][0] : body.style.backgroundColor = players[turn][0]);
		cellEls[cellIdx].style.color = players[cellVal][0];
		cellEls[cellIdx].innerText = players[cellVal][1];
	});
	if (winner === 't') {
		msgEl.innerHTML = `CAT'S GAME!`;
	} else if (winner) {
		msgEl.innerHTML = `<span style="color: ${players[winner][1]}">${players[winner][1].toUpperCase()}</span> WINS!`;
	} else {
		msgEl.innerHTML = `<span style="color: ${players[turn][1]}">${players[turn][1].toUpperCase()}'s</span> TURN!`;
	}
}

function handleClick(event) {
	let currentCellIdx = cellEls.indexOf(event.target);
	if (board[currentCellIdx] || winner ) return;
	board[currentCellIdx] = turn;
	turn *= -1;
	winner = getWinner();
	render();
}

function getWinner() {
		for (let i = 0; i < winCombo.length; i++) {
			if (Math.abs(board[winCombo[i][0]] + board[winCombo[i][1]] + board[winCombo[i][2]]) === 3) { //there's something weird going on here with diagonal wins. I think it had something to do with the random start
				return board[winCombo[i][0]];
			};
		};
		if (board.includes(null)) {
			return null;
		} else {
			return 't';
		}
	};

init();

	

//----- min ---------------------------------------------

// /*----- constants -----*/
// const players = {
//     '1': 'firebrick', //redish
//     '-1': 'darkgoldenrod', //orangeish
//     'null': 'transparent',
// }

// const winCombo = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizonal combos
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical combos
//     [0, 4, 8], [2, 4, 6] //diagonal combos
// ]
// /*----- app's state (variables) -----*/
// let board = [];
// let turn;
// let winner;
// /*----- cached element references -----*/
// let cellEls = Array.from(document.querySelectorAll('#gameBoard > div'));
// let msgEl = document.getElementById('msg');
// let resetButton = document.getElementById('reset-button');

// /*----- event listeners -----*/
// document.getElementById('gameBoard').addEventListener('click', handleClick);
// resetButton.addEventListener('click', init);
// /*----- functions -----*/
// init();

// function init() {
//     board =
//     [
//         null, null, null, //top
//         null, null, null, //mid
//         null, null, null //bottom
//     ];
//     turn = 1 //set this to random later
//     winner = null;
// 	render();
// };

// function render() {
// 	board.forEach(function(cellVal, cellIdx) { //look up params for forEach. This was a blocker.
// 		cellEls[cellIdx].style.backgroundColor = players[cellVal];
// 	});
// 	if (winner === 't') {
// 		msgEl.innerHTML = `CAT'S GAME!`;
// 	} else if (winner) {
// 		msgEl.innerHTML = `<span style="color: ${players[winner]}">${players[winner].toUpperCase()}'s</span> WINS!`;
// 	} else {
// 		msgEl.innerHTML = `<span style="color: ${players[turn]}">${players[turn].toUpperCase()}'s</span> TURN!`;
// 	}
// }

// function handleClick(event) {
// 	let currentCellIdx = cellEls.indexOf(event.target);
// 	if (board[currentCellIdx] || winner ) {
// 		return;
// 	}
// 	board[currentCellIdx] = turn;
// 	turn *= -1;
// 	winner = getWinner();
// 	render();
// }

// function getWinner() {
// 		for (let i = 0; i < winCombo.length; i++) {
// 			if (Math.abs(board[winCombo[i][0]] + board[winCombo[i][1]] + board[winCombo[i][2]]) === 3) {
// 				return board[winCombo[i][0]];
// 			};
// 		};
// 		if (board.includes(null)) {
// 			return null;
// 		} else {
// 			return 't';
// 		}
// 	};