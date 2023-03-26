const boardString = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-','-', '7', '6', '4', '-', '5' ],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-']
]
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

}
// Получение массива недостающих чисел в строке по индексу
function getMissingValuesInRow (arr,index){
  const res =(arr[index].filter((elem)=> Number(elem)));
  let existingNumbers = [];
  for(let i=0; i<res.length;i++){
    existingNumbers = res.map((el)=> +el) 
  }
  let missingNumber =[];
  const mas = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i<mas.length; i++){
    if (!existingNumbers.includes(mas[i])) {
      missingNumber.push(mas[i]);
    }
  }
  return missingNumber
}

// Получение массива недостающих чисел в столбце по индексу
function getMissingValuesInCollumn(arr, index){
  let res=[];
  let arr1 = [];
  const mas = [1,2,3,4,5,6,7,8,9];
  for(let i=0; i<arr.length;i++){
    if (!Number.isNaN(arr[i][index])){
      res.push(Number(arr[i][index]))
    }
  }
  for (let i = 0; i<mas.length; i++){
    if (!res.includes(mas[i])) {
      arr1.push(mas[i])
    }
  }
  return arr1
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {

// }
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
