import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Game.css';

const Game = () => {
  const [board, setBoard] = useState(() => initializeBoard());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => parseInt(localStorage.getItem('bestScore')) || 0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [mergingTiles, setMergingTiles] = useState(new Set());
  const [animatingTiles, setAnimatingTiles] = useState(new Set());

  function initializeBoard() {
    const newBoard = Array(4).fill().map(() => Array(4).fill(0));
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    return newBoard;
  }

  function addRandomTile(board) {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) {
          emptyCells.push({ x: i, y: j });
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      board[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  function isGameOver(board) {
    // Check for empty cells
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) return false;
      }
    }

    // Check for possible merges
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = board[i][j];
        if (
          (i < 3 && board[i + 1][j] === current) ||
          (j < 3 && board[i][j + 1] === current)
        ) {
          return false;
        }
      }
    }

    return true;
  }



  function moveLeft(board) {
    let moved = false;
    let scoreIncrease = 0;
    const newBoard = board.map(row => [...row]);
    const mergingPositions = new Set();
    const movingTiles = new Set();

    for (let i = 0; i < 4; i++) {
      let row = newBoard[i].filter(cell => cell !== 0);
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          const mergeValue = row[j] * 2;
          scoreIncrease += mergeValue;
          row[j] = mergeValue;
          row[j + 1] = 0;
          mergingPositions.add(`${i}-${j}`);

          // Trigger vibration on mobile devices for merge feedback
          if ('vibrate' in navigator) {
            navigator.vibrate(50);
          }
        }
      }
      row = row.filter(cell => cell !== 0);
      while (row.length < 4) row.push(0);

      // Track moving tiles
      for (let j = 0; j < 4; j++) {
        if (newBoard[i][j] !== row[j]) {
          moved = true;
          movingTiles.add(`${i}-${j}`);
        }
      }

      newBoard[i] = row;
    }

    return { board: newBoard, moved, scoreIncrease, mergingPositions, movingTiles };
  }

  function moveRight(board) {
    let moved = false;
    let scoreIncrease = 0;
    const newBoard = board.map(row => [...row]);
    const mergingPositions = new Set();
    const movingTiles = new Set();

    for (let i = 0; i < 4; i++) {
      let row = newBoard[i].filter(cell => cell !== 0);
      for (let j = row.length - 1; j > 0; j--) {
        if (row[j] === row[j - 1]) {
          const mergeValue = row[j] * 2;
          scoreIncrease += mergeValue;
          row[j] = mergeValue;
          row[j - 1] = 0;
          mergingPositions.add(`${i}-${3 - j}`);

          // Trigger vibration on mobile devices for merge feedback
          if ('vibrate' in navigator) {
            navigator.vibrate(50);
          }
        }
      }
      row = row.filter(cell => cell !== 0);
      while (row.length < 4) row.unshift(0);

      for (let j = 0; j < 4; j++) {
        if (newBoard[i][j] !== row[j]) {
          moved = true;
          movingTiles.add(`${i}-${j}`);
        }
      }

      newBoard[i] = row;
    }

    return { board: newBoard, moved, scoreIncrease, mergingPositions, movingTiles };
  }

  function moveUp(board) {
    let moved = false;
    let scoreIncrease = 0;
    const newBoard = board.map(row => [...row]);
    const mergingPositions = new Set();
    const movingTiles = new Set();

    for (let j = 0; j < 4; j++) {
      let column = [];
      for (let i = 0; i < 4; i++) {
        if (newBoard[i][j] !== 0) column.push(newBoard[i][j]);
      }
      for (let i = 0; i < column.length - 1; i++) {
        if (column[i] === column[i + 1]) {
          const mergeValue = column[i] * 2;
          scoreIncrease += mergeValue;
          column[i] = mergeValue;
          column[i + 1] = 0;
          mergingPositions.add(`${i}-${j}`);

          // Trigger vibration on mobile devices for merge feedback
          if ('vibrate' in navigator) {
            navigator.vibrate(50);
          }
        }
      }
      column = column.filter(cell => cell !== 0);
      while (column.length < 4) column.push(0);

      for (let i = 0; i < 4; i++) {
        if (newBoard[i][j] !== column[i]) {
          moved = true;
          movingTiles.add(`${i}-${j}`);
        }
        newBoard[i][j] = column[i];
      }
    }

    return { board: newBoard, moved, scoreIncrease, mergingPositions, movingTiles };
  }



  function moveDown(board) {
    let moved = false;
    let scoreIncrease = 0;
    const newBoard = board.map(row => [...row]);
    const mergingPositions = new Set();
    const movingTiles = new Set();

    for (let j = 0; j < 4; j++) {
      let column = [];
      for (let i = 0; i < 4; i++) {
        if (newBoard[i][j] !== 0) column.push(newBoard[i][j]);
      }
      for (let i = column.length - 1; i > 0; i--) {
        if (column[i] === column[i - 1]) {
          const mergeValue = column[i] * 2;
          scoreIncrease += mergeValue;
          column[i] = mergeValue;
          column[i - 1] = 0;
          mergingPositions.add(`${3 - i}-${j}`);

          // Trigger vibration on mobile devices for merge feedback
          if ('vibrate' in navigator) {
            navigator.vibrate(50);
          }
        }
      }
      column = column.filter(cell => cell !== 0);
      while (column.length < 4) column.unshift(0);

      for (let i = 0; i < 4; i++) {
        if (newBoard[i][j] !== column[i]) {
          moved = true;
          movingTiles.add(`${i}-${j}`);
        }
        newBoard[i][j] = column[i];
      }
    }

    return { board: newBoard, moved, scoreIncrease, mergingPositions, movingTiles };
  }

  const moveBoard = useCallback((direction) => {
    if (gameOver || won) return;

    let result;
    switch (direction) {
      case 'left':
        result = moveLeft(board);
        break;
      case 'right':
        result = moveRight(board);
        break;
      case 'up':
        result = moveUp(board);
        break;
      case 'down':
        result = moveDown(board);
        break;
      default:
        return;
    }

    if (result.moved) {
      setScore(prevScore => prevScore + result.scoreIncrease);

      // Add animations
      if (result.mergingPositions && result.mergingPositions.size > 0) {
        setMergingTiles(result.mergingPositions);
      }
      if (result.movingTiles && result.movingTiles.size > 0) {
        setAnimatingTiles(result.movingTiles);
      }
      setTimeout(() => {
        setMergingTiles(new Set());
        setAnimatingTiles(new Set());
      }, 300);

      const newBoard = [...result.board];
      addRandomTile(newBoard);
      setBoard(newBoard);

      // Check for win condition
      const has2048 = newBoard.some(row => row.includes(2048));
      if (has2048 && !won) {
        setWon(true);
      }
    }
  }, [board, gameOver, won]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver || won) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          moveBoard('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          moveBoard('right');
          break;
        case 'ArrowUp':
          e.preventDefault();
          moveBoard('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          moveBoard('down');
          break;
        default:
          break;
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (gameOver || won) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const minSwipeDistance = 50;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (Math.abs(diffX) > minSwipeDistance) {
          if (diffX > 0) {
            moveBoard('right');
          } else {
            moveBoard('left');
          }
        }
      } else {
        // Vertical swipe
        if (Math.abs(diffY) > minSwipeDistance) {
          if (diffY > 0) {
            moveBoard('down');
          } else {
            moveBoard('up');
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [moveBoard, gameOver, won]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem('bestScore', score.toString());
    }

    if (isGameOver(board) && !won) {
      setGameOver(true);
    }
  }, [board, score, bestScore, won]);

  const resetGame = () => {
    setBoard(initializeBoard());
    setScore(0);
    setGameOver(false);
    setWon(false);
    setMergingTiles(new Set());
  };

  const getTileColor = (value) => {
    const colors = {
      0: '#cdc1b4',
      2: '#eee4da',
      4: '#ede0c8',
      8: '#f2b179',
      16: '#f59563',
      32: '#f67c5f',
      64: '#f65e3b',
      128: '#edcf72',
      256: '#edcc61',
      512: '#edc850',
      1024: '#edc53f',
      2048: '#edc22e',
    };
    return colors[value] || '#3c3a32';
  };

  const getTileTextColor = (value) => {
    return value <= 4 ? '#776e65' : '#f9f6f2';
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title left-aligned">2048 Game</h1>
          <p className="hero-subtitle">Slide tiles to combine them and reach 2048!</p>
        </div>
      </section>

      <section className="game-section">
        <div className="container">
          <div className="game-container">
            <div className="game-header">
              <div className="score-display">
                <div className="score-item">
                  <span className="score-label">Score</span>
                  <span className="score-value">{score}</span>
                </div>
                <div className="score-item">
                  <span className="score-label">Best</span>
                  <span className="score-value">{bestScore}</span>
                </div>
              </div>
              <div className="controls">
                <button className="game-btn restart-btn" onClick={resetGame}>
                  <i className="fas fa-redo"></i> New Game
                </button>
              </div>
            </div>

            <div className="game-board">
              {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                  const tileKey = `${rowIndex}-${colIndex}`;
                  const isMerging = mergingTiles.has(tileKey);
                  const isMoving = animatingTiles.has(tileKey);

                  return (
                    <div
                      key={tileKey}
                      className={`tile ${cell === 0 ? 'empty' : ''} ${isMerging ? 'merging' : ''} ${isMoving ? 'moving' : ''}`}
                      style={{
                        backgroundColor: getTileColor(cell),
                        color: getTileTextColor(cell),
                      }}
                    >
                      {cell !== 0 && cell}
                    </div>
                  );
                })
              )}
            </div>

            {(gameOver || won) && (
              <div className="game-over-overlay">
                <div className={`game-over-message ${won ? 'won' : ''}`}>
                  <h2>{won ? 'You Win!' : 'Game Over!'}</h2>
                  <p>Score: {score}</p>
                  {won && <p className="win-message">Congratulations! You reached 2048!</p>}
                  <button className="game-btn restart-btn" onClick={resetGame}>
                    <i className="fas fa-redo"></i> Play Again
                  </button>
                </div>
              </div>
            )}

            <div className="game-instructions">
              <h3>How to Play:</h3>
              <div className="instructions-grid">
                <div className="instruction-item">
                  <i className="fas fa-arrows-alt"></i>
                  <span>Use arrow keys to move tiles</span>
                </div>
                <div className="instruction-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Swipe to move on mobile</span>
                </div>
                <div className="instruction-item">
                  <i className="fas fa-plus"></i>
                  <span>Combine matching numbers</span>
                </div>
                <div className="instruction-item">
                  <span className="tile-preview">2</span>
                  <span>New tiles appear randomly</span>
                </div>
                <div className="instruction-item">
                  <i className="fas fa-trophy"></i>
                  <span>Reach 2048 to win!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Game;