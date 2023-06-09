// Game Parameters
const HEIGHT = 750;
const GRID_SIZE = 5;
const DELAY_END = 2;
const FPS = 60;

// Derived Dimensions
const WIDTH = HEIGHT * 0.9;
const CELL = WIDTH / (GRID_SIZE + 2);
const STROKE = CELL / 12;
const DOT = STROKE;
const MARGIN = HEIGHT - (GRID_SIZE + 1) * CELL;

// Colors
const COLOR_BOARD = "#0f3057";
const COLOR_BORDER = "yellow";
const COLOR_DOT = "white";
const COLOR_AI = "orange";
const COLOR_AI_LIGHT = "rgba(255, 166, 0, 0.3)";
const COLOR_PLAYER = "lawngreen";
const COLOR_PLAYER_LIGHT = "rgba(126, 252, 0, 0.3)";
const COLOR_TIE = "white";

// Text
const TEXT_AI = "Computer";
const TEXT_AI_SML = "AI";
const TEXT_PLAYER = "Player";
const TEXT_PLAYER_SML = "RI";
const TEXT_SIZE_CELL = CELL / 2.5;
const TEXT_SIZE_TOP = MARGIN / 6;
const TEXT_TIE = "Draw";
const TEXT_WIN = "Won";

const Side = {
  BOTTOM: 0,
  LEFT: 1,
  RIGHT: 2,
  TOP: 3,
};

// Canvas
let canvasEl = document.createElement("canvas");
canvasEl.height = HEIGHT;
canvasEl.width = WIDTH;
document.body.appendChild(canvasEl);
let canvasRect = canvasEl.getBoundingClientRect();

// Context
const ConX = canvasEl.getContext("2d");
ConX.lineWidth = STROKE;
ConX.textAlign = "center";
ConX.textBaseline = "middle";

// game variables
let currentCells, playersTurn, squares;

let scoreAI, scoreRI;

let timeEnd;

canvasEl.addEventListener("mousemove", highlightGrid);

canvasEl.addEventListener("click", click);

function playGame() {
  requestAnimationFrame(playGame);
  drawBoard();
  drawSquares();
  drawGrid();
  drawScores();
}

function click(e) {
  // if it is not playerTurn, return
  if (timeEnd > 0) {
    return;
  }

  selectSide();
}

function drawBoard() {
  ConX.fillStyle = COLOR_BOARD;
  ConX.strokeStyle = COLOR_BORDER;
  ConX.fillRect(0, 0, WIDTH, HEIGHT);
  ConX.strokeRect(
    STROKE / 4,
    STROKE / 4,
    WIDTH - STROKE / 2,
    HEIGHT - STROKE / 2
  );
}

function drawDot(x, y) {
  ConX.fillStyle = COLOR_DOT;
  ConX.beginPath();
  ConX.arc(x, y, DOT, 0, Math.PI * 2);
  ConX.fill();
}

function drawGrid() {
  for (let i = 0; i < GRID_SIZE + 1; i++) {
    for (let j = 0; j < GRID_SIZE + 1; j++) {
      drawDot(getGridX(j), getGridY(i));
    }
  }
}

function drawLine(x0, y0, x1, y1, color) {
  ConX.strokeStyle = color;
  ConX.beginPath();
  ConX.moveTo(x0, y0);
  ConX.lineTo(x1, y1);
  ConX.stroke();
}

function drawScores() {
  let colorAI = playersTurn ? COLOR_AI_LIGHT : COLOR_AI;
  let colorRI = playersTurn ? COLOR_PLAYER : COLOR_PLAYER_LIGHT;
  drawText(TEXT_PLAYER, WIDTH * 0.25, MARGIN * 0.25, colorRI, TEXT_SIZE_TOP);
  drawText(scoreRI, WIDTH * 0.25, MARGIN * 0.6, colorRI, TEXT_SIZE_TOP * 2);
  drawText(TEXT_AI, WIDTH * 0.75, MARGIN * 0.25, colorAI, TEXT_SIZE_TOP);
  drawText(scoreAI, WIDTH * 0.75, MARGIN * 0.6, colorAI, TEXT_SIZE_TOP * 2);

  if (timeEnd > 0) {
    timeEnd--;

    // handle a tie
    if (scoreAI == scoreRI) {
      drawText(TEXT_TIE, WIDTH * 0.5, MARGIN * 0.6, COLOR_TIE, TEXT_SIZE_TOP);
      console.log("TIE");
    } else {
      let playerWins = scoreRI > scoreAI;
      let color = playerWins ? COLOR_PLAYER : COLOR_AI;
      let text = playerWins ? TEXT_PLAYER : TEXT_AI;
      drawText(text, WIDTH * 0.5, MARGIN * 0.5, color, TEXT_SIZE_TOP);
      drawText(TEXT_WIN, WIDTH * 0.5, MARGIN * 0.7, color, TEXT_SIZE_TOP);
    }

    // new game
    if (timeEnd == 0) {
      newGame();
    }
  }
}

function drawSquares() {
  for (let row of squares) {
    for (let square of row) {
      square.drawSides();
      square.drawFill();
    }
  }
}

function drawText(text, x, y, color, size) {
  ConX.fillStyle = color;
  ConX.font = `${size}px sans-serif`;
  ConX.fillText(text, x, y);
}

function getColor(player, light) {
  if (player) {
    return light ? COLOR_PLAYER_LIGHT : COLOR_PLAYER;
  } else {
    return light ? COLOR_AI_LIGHT : COLOR_AI;
  }
}

function getText(player, small) {
  if (player) {
    return small ? TEXT_PLAYER_SML : TEXT_PLAYER;
  } else {
    return small ? TEXT_AI_SML : TEXT_AI;
  }
}

function getGridX(col) {
  return CELL * (col + 1);
}

function getGridY(row) {
  return MARGIN + CELL * row;
}

function highlightGrid(e) {
  // if it is not playerTurn, return
  if (timeEnd > 0) {
    return;
  }

  // get mouse position relative to the canvas
  let x = e.clientX - canvasRect.left;
  let y = e.clientY - canvasRect.top;

  // highlight the square's side
  highlightSide(x, y);
}

function highlightSide(x, y) {
  // clear previous highlighting
  for (let row of squares) {
    for (let square of row) {
      square.highlight = null;
    }
  }

  // check each cell
  let rows = squares.length;
  let cols = squares[0].length;

  currentCells = [];

  OUTER: for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (squares[i][j].contains(x, y)) {
        let side = squares[i][j].highlightSide(x, y);

        if (side != null) {
          currentCells.push({ row: i, col: j });
        }

        let row = i,
          col = j,
          highlight,
          neighbour = true;

        if (side == Side.LEFT && j > 0) {
          // from the neighbours perspective
          col = j - 1;
          highlight = Side.RIGHT;
        } else if (side == Side.RIGHT && j < cols - 1) {
          // from the neighbours perspective
          col = j + 1;
          highlight = Side.LEFT;
        } else if (side == Side.TOP && i > 0) {
          // from the neighbours perspective
          row = i - 1;
          highlight = Side.BOTTOM;
        } else if (side == Side.BOTTOM && i < rows - 1) {
          // from the neighbours perspective
          row = i + 1;
          highlight = Side.TOP;
        } else {
          neighbour = false;
        }

        if (neighbour) {
          squares[row][col].highlight = highlight;
          currentCells.push({ row: row, col: col });
        }

        break OUTER;
      }
    }
  }
}

function newGame() {
  currentCells = [];

  playersTurn = Math.random() >= 0.5;

  scoreAI = 0;
  scoreRI = 0;

  timeEnd = 0;

  // set up the suqares array
  squares = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    squares[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      squares[i][j] = new Square(getGridX(j), getGridY(i), CELL, CELL);
    }
  }
}

function selectSide() {
  if (currentCells == null || currentCells.length == 0) {
    return;
  }

  let filledSquare = false;
  for (let cell of currentCells) {
    if (squares[cell.row][cell.col].selectSide()) {
      filledSquare = true;
    }
  }
  currentCells = [];

  // check for winner
  if (filledSquare) {
    if (scoreRI + scoreAI == GRID_SIZE * GRID_SIZE) {
      // game over
      timeEnd = Math.ceil(DELAY_END * FPS);
    }
  } else {
    // next player's turn
    playersTurn = !playersTurn;
  }
}

class Square {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.bottom = y + h;
    this.left = x;
    this.right = x + w;
    this.top = y;
    this.highlight = null;
    this.numSelected = 0;
    this.owner = null;
    this.sideBottom = { owner: null, selected: false };
    this.sideLeft = { owner: null, selected: false };
    this.sideRight = { owner: null, selected: false };
    this.sideTop = { owner: null, selected: false };
  }

  contains = (x, y) => {
    return x >= this.left && x < this.right && y >= this.top && y < this.bottom;
  };

  drawFill = () => {
    if (this.owner == null) {
      return;
    }

    // light background
    ConX.fillStyle = getColor(this.owner, true);
    ConX.fillRect(
      this.left + STROKE,
      this.top + STROKE,
      this.w - STROKE * 2,
      this.h - STROKE * 2
    );

    drawText(
      getText(this.owner, true),
      this.left + this.w / 2,
      this.top + this.h / 2,
      getColor(this.owner, false),
      TEXT_SIZE_CELL
    );
  };

  drawSide = (side, color) => {
    switch (side) {
      case Side.BOTTOM:
        drawLine(this.left, this.bottom, this.right, this.bottom, color);
        break;

      case Side.LEFT:
        drawLine(this.left, this.top, this.left, this.bottom, color);
        break;

      case Side.RIGHT:
        drawLine(this.right, this.top, this.right, this.bottom, color);
        break;

      case Side.TOP:
        drawLine(this.left, this.top, this.right, this.top, color);
        break;
    }
  };

  drawSides = () => {
    // highlighting
    if (this.highlight != null) {
      this.drawSide(this.highlight, getColor(playersTurn, true));
    }

    if (this.sideBottom.selected) {
      this.drawSide(Side.BOTTOM, getColor(this.sideBottom.owner, false));
    }

    if (this.sideLeft.selected) {
      this.drawSide(Side.LEFT, getColor(this.sideLeft.owner, false));
    }

    if (this.sideRight.selected) {
      this.drawSide(Side.RIGHT, getColor(this.sideRight.owner, false));
    }

    if (this.sideTop.selected) {
      this.drawSide(Side.TOP, getColor(this.sideTop.owner, false));
    }
  };

  highlightSide = (x, y) => {
    // calculate the distances to each side
    let distBottom = this.bottom - y;
    let distLeft = x - this.left;
    let distRight = this.right - x;
    let distTop = y - this.top;

    // determine closest values
    let distClosest = Math.min(distBottom, distLeft, distRight, distTop);

    // highlight the closest if already not selected
    if (distClosest == distBottom && !this.sideBottom.selected) {
      this.highlight = Side.BOTTOM;
    } else if (distClosest == distLeft && !this.sideLeft.selected) {
      this.highlight = Side.LEFT;
    } else if (distClosest == distRight && !this.sideRight.selected) {
      this.highlight = Side.RIGHT;
    } else if (distClosest == distTop && !this.sideTop.selected) {
      this.highlight = Side.TOP;
    }

    // return the highlighted side
    return this.highlight;
  };

  selectSide = () => {
    if (this.highlight == null) {
      return;
    }

    // select the highlighted side
    switch (this.highlight) {
      case Side.BOTTOM:
        this.sideBottom.owner = playersTurn;
        this.sideBottom.selected = true;
        break;

      case Side.LEFT:
        this.sideLeft.owner = playersTurn;
        this.sideLeft.selected = true;
        break;

      case Side.RIGHT:
        this.sideRight.owner = playersTurn;
        this.sideRight.selected = true;
        break;

      case Side.TOP:
        this.sideTop.owner = playersTurn;
        this.sideTop.selected = true;
        break;
    }

    this.highlight = null;

    this.numSelected++;
    if (this.numSelected == 4) {
      this.owner = playersTurn;

      if (playersTurn) {
        scoreRI++;
      } else {
        scoreAI++;
      }

      return true;
    }
    return false;
  };
}

newGame();
playGame();
