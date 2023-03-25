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
// function solve(boardString) {

// }
//    формирование массива массивов чисел без дефиссов РАБОТАЕТ!!!!!!!!!!!!!!!
// function createString (arr){
//   let res=[];
//   for(let i=0; i<arr.length;i++){
//    res.push(arr[i].filter((elem)=> Number(elem)));
//   } 
//   for(let j=0; j<res.length;j++){
//     res[j]=res[j].map((el)=> +el) 
//   }
//   return res
// }
  // формирование массива чисел из столбца заданного индекса без дефисов 
    // function createCollumn(arr, index){
    //   let res=[];
    //   for(let i=0; i<arr.length;i++){
    //     if (!isNaN(arr[i][index]))
    //   res.push(Number(arr[i][index]))
    //   } return res
    // }
    // /получаем массив недостающих цифр  в столбце индекса [index]
      function searchInString(arr, index){
    let res=[];
    let arr1 = [];
    const mas = [1,2,3,4,5,6,7,8,9];
    for(let i=0; i<arr.length;i++){
      if (!isNaN(arr[i][index]))
    res.push(Number(arr[i][index]))
    }
    for (let i = 0; i<mas.length; i++){
           if (!res.includes(mas[i])) {
            arr1.push(mas[i])}
  }return arr1}

    console.log(searchInString(boardString,0));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
// function isSolved(board) {

// }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {

// }

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
