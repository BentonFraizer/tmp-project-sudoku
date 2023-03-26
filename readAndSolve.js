// Подключить функции из файла sudoku.js.
const sudoku = require("./sudoku");
const { EOL } = require("os");
const { getPrettyNumber, makeArrayFromString } = require("./consts");

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = fileData.split(EOL).filter((line) => line !== "");

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1;

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1];
  console.log(`
   ___       _     _     ___           __  __                           _     
  |  _ \\ ___| |   | |   |_ _|__ _  ___|  \\/  |    ___ _   _  __ _  ___ | | ___   _ 
  | |_) / _ \\ |   | |    | |/ _  |/ _ \\ |\\/| |   / __| | | |/ _  |/ _ \\| |/ / | | |
  |  __/  __/ |___| |___ | | (_| |  __/ |  | |  | (__| |_| | (_| | (_) |   <| |_| |  
  |_|   \\___|_____|_____|___\\__ _|\\___|_|  |_|   \\___|\\__  |\\__  |\\___/|_|\\_\\__  |
                                                      |___/ |___/            |___/ 
`);
  console.log(`${getPrettyNumber(puzzleNumber)}`);
  console.log(sudoku.prettyBoard(makeArrayFromString(puzzle)), EOL);

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(makeArrayFromString(puzzle));

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`
     _   _               __  __               _ ___                     _     _     ___     _____ _                                _          
    | | | | ___      ___|  \\/  | ___  _ __   | |_ _|   _     _ __   ___| |   | |   |_ _|   |_   _| |__       ___ _   _  __ _  ___ | | ___   _ 
    | |_| |/ _ \\    / __| |\\/| |/ _ \\|  __|  | || | | | |   |  _ \\ / _ \\ |   | |    | | | | || | |  _ \\     / __| | | |/ _  |/ _ \\| |/ / | | |
    |  _  |  __/   | (__| |  | | (_) | | | |_| || | |_| |   | |_) |  __/ |___| |___ | | |_| || | | |_) |   | (__| |_| | (_| | (_) |   <| |_| |
    |_| |_|\\___|    \\___|_|  |_|\\___/|_|  \\___/|___\\__ _|   |  __/ \\___|_____|_____|___\\__ _||_| |_ __/     \\___|\\__  |\\__  |\\___/|_|\\_\\__   |
                                                            |_|                                                  |___/ |___/            |___/  
    `);
    console.log(sudoku.prettyBoard(solvedPuzzle), EOL);
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`
   ____                  _                         _     _     ___     _   _                           _     _     ___ _   _           _ 
  / ___|   _  __ _  ___ | | ___   _     _ __   ___| |   | |   |_ _|___| | | |    _   _  ___ _ __   ___| |   | |   |_ _| | | | ___     | |
 | |  | | | |/ _  |/ _ \\| |/ / | | |   |  _ \\ / _ \\ |   | |    | |/ _ \\ |_| |   | | | |/ __|  _ \\ / _ \\ |   | |    | || |_| |/ _ \\    | |
 | |__| |_| | (_| | (_) |   <| |_| |   | |_) |  __/ |___| |___ | |  __/  _  |   | |_| | (__| | | |  __/ |___| |___ | ||  _  | (_) |   |_|
  \\____\\__  |\\__  |\\___/|_|\\_\\__   |   |  __/ \\___|_____|_____|___\\___|_| |_|    \\__  |\\___|_| |_|\\___|_____|_____|___|_| |_|\\___/    (_)
       |___/ |___/            |___/    |_|                                       |___/ 
  `);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(sudoku.prettyBoard(solvedPuzzle), EOL);
}

module.exports = readAndSolve;
