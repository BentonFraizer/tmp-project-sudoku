const boardString = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

}
// Получение массива недостающих чисел в строке по индексу
function getMissingValuesInRow(arr, index) {
  const res = (arr[index].filter((elem) => Number(elem)));
  let existingNumbers = [];
  for (let i = 0; i < res.length; i += 1) {
    existingNumbers = res.map((el) => +el);
  }
  const missingNumber = [];
  const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < mas.length; i += 1) {
    if (!existingNumbers.includes(mas[i])) {
      missingNumber.push(mas[i]);
    }
  }
  return missingNumber;
}

// Получение массива недостающих чисел в столбце по индексу
function getMissingValuesInCollumn(arr, index) {
  const res = [];
  const arr1 = [];
  const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isNaN(arr[i][index])) {
      res.push(Number(arr[i][index]));
    }
  }
  for (let i = 0; i < mas.length; i += 1) {
    if (!res.includes(mas[i])) {
      arr1.push(mas[i]);
    }
  }
  return arr1;
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

  // Преобразование исходного массива в массив котором в каждом элементе находятся
  // цифры из каждого квадрата размером 3х3
  const numbersFromLittleSquares = [];
  let middleArr = [];
  let rowIndex = 3;
  let columnIndex = 3;
  let perThreeColumns = 0;
  for (let i = 0; i < rowIndex; i += 1) {
    for (let j = perThreeColumns; j < columnIndex; j += 1) {
      middleArr.push(board[i][j]);
    }

    if (i === 2 || i === 5) {
      rowIndex += 3;
    }

    if (middleArr.length === 9) {
      numbersFromLittleSquares.push(middleArr);
      middleArr = [];
      if (numbersFromLittleSquares.length === 3 || numbersFromLittleSquares.length === 6) {
        perThreeColumns += 3;
        columnIndex += 3;
      }
    }

    if (i === 8) {
      i = -1;
      rowIndex = 3;
    }

    if (numbersFromLittleSquares.length === 9) {
      break;
    }
  }

  // Проверка на то, что в сумма чисел в каждом секторе 3х3 равна 45
  const littleSquaresSums = board.map((row) => row.reduce((acc, cur) => acc + cur, 0));
  const checkSumInLittleSquares = littleSquaresSums.every((num) => num === 45);

  // Если одна из проверок не пройдена, вернётся false
  return (checkSumInRows && checkSumInColumns && checkSumInLittleSquares);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const arr = [['-----------------']];
  for (let i = 0; i < board.length; i += 1) {
    arr.push(board[i].join('|').split(','));
    arr.push(['-----------------']);
  }
  const newArr = [];
  for (let j = 0; j < arr.length; j += 1) {
    newArr.push(arr[j].join(''));
  }
  const resultString = newArr.join('\n');

  return resultString;
}
console.log(prettyBoard(boardString));
// function searchInSquare (arr,i,j){
//   let res=[];
//   let arr1 = [];
//   if ((i==0||i==1||i==2)&&(j==0||j==1||j==2)){
//     const res = res.push(arr[0][0]....arr[2][2])
//     return massiv;
//   }
//   if ((i==0||i==1||i==2)&&(j==0||j==1||j==2)){
//       return massiv;

//   }
// return arr1}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
