/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  // Проверка на то, что сумма чисел в каждой строке равна 45
  const rowSums = board.map((row) => row.reduce((acc, cur) => acc + cur, 0));
  const checkSumInRows = rowSums.every((num) => num === 45);

  // Транспонирование матрицы
  const transposedBoard = [];
  for (let i = 0; i < board[0].length; i += 1) {
    const transposedLine = [];
    board.forEach((piece) => {
      transposedLine.push(piece[i]);
    });
    transposedBoard.push(transposedLine);
  }

  // Проверка на то, что в сумма чисел в каждой транспонированной строке равна 45
  const columnSums = board.map((row) => row.reduce((acc, cur) => acc + cur, 0));
  const checkSumInColumns = columnSums.every((num) => num === 45);

  return (checkSumInRows && checkSumInColumns);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
