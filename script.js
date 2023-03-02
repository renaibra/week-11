		// game variables
		let board = [[null, null, null], [null, null, null], [null, null, null]];
		let currentPlayer = 'X';
		let moves = 0;
		let gameOver = false;

		// HTML elements
		const turnElement = document.getElementById('turn');
		const cells = document.getElementsByClassName('cell');

		// function to make a move
		function play(row, col) {
            console.log("play " + row + "," +col);
			if (gameOver || board[row][col] !== null) {
				return;
			}

			board[row][col] = currentPlayer;
			cells[row*3+col].innerHTML = currentPlayer;
			cells[row*3+col].classList.add('text-'+currentPlayer.toLowerCase());

			if (checkWin(currentPlayer)) {
				gameOver = true;
				alert(currentPlayer + ' wins!');
			} else if (++moves === 9) {
				gameOver = true;
				alert('Draw!');
			} else {
				currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
				turnElement.innerHTML = "It's " + currentPlayer + "'s turn";
			}
		}

		// function to check if a player has won
		function checkWin(player) {
            // check rows
            for (let i = 0; i < 3; i++) {
              if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
              }
            }
          
            // check columns
            for (let j = 0; j < 3; j++) {
              if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
                return true;
              }
            }
          
            // check diagonals
            if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
              return true;
            }
            if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
              return true;
            }
          
            // no win
            return false;
          }

        function restart() {
            board = [[null, null, null], [null, null, null], [null, null, null]];
            currentPlayer = 'X';
            moves = 0;
            gameOver = false;
            turnElement.innerHTML = "It's " + currentPlayer + "'s turn";
            for (let i = 0; i < cells.length; i++) {
              cells[i].innerHTML = '';
              cells[i].classList.remove('text-x', 'text-o');
            }
          }