const getPrettyNumber = (number) => {
  switch (number) {
    case 1:
      console.log(`
       _   _    _ 
      | \\ | |  / |
      |  \\| |  | |
      | |\\  |  | |
      |_| \\_|  |_|
   
      `);
      break;
    case 2:
      console.log(`
       _   _    ____    
      | \\ | |  |___ \\ 
      |  \\| |    __) |
      | |\\  |   / __/ 
      |_| \\_|  |_____|
      `);
      break;
    case 3:
      console.log(`
       _   _    _____ 
      | \\ | |  |___ / 
      |  \\| |    |_ \\ 
      | |\\  |   ___) |
      |_| \\_|  |____/ 
      `);
      break;
    case 4:
      console.log(`
       _   _    _  _   
      | \\ | |  | || |  
      |  \\| |  | || |_ 
      | |\\  |  |__   _|
      |_| \\_|     |_| 
      `);
      break;
    case 5:
      console.log(`
       _   _    ____  
      | \\ | |  | ___| 
      |  \\| |  |___ \\ 
      | |\\  |   ___) |
      |_| \\_|  |____/ 
      `);
      break;
    case 6:
      console.log(`
       _   _     __   
      | \\ | |   / /_  
      |  \\| |  |  _ \\ 
      | |\\  |  | (_) |
      |_| \\_|   \\___/ 
      `);
      break;
    case 7:
      console.log(`
       _   _    _____ 
      | \\ | |  |___  |
      |  \\| |     / / 
      | |\\  |    / /  
      |_| \\_|   /_/   
      `);
      break;
    case 8:
      console.log(`
       _   _     ___  
      | \\ | |   ( _ ) 
      |  \\| |   / _ \\ 
      | |\\  |  | (_) |
      |_| \\_|   \\___/ 
      `);
      break;
    case 9:
      console.log(`
       _   _     ___  
      | \\ | |   / _ \\ 
      |  \\| |  | (_) |
      | |\\  |   \\__  |
      |_| \\_|     /_/ 
      `);
      break;
    case 10:
      console.log(`
       _   _    _  ___  
      | \\ | |  / |/ _ \\ 
      |  \\| |  | | | | |
      | |\\  |  | | |_| |
      |_| \\_|  |_|\\___/ 
      `);
      break;
    case 11:
      console.log(`
       _   _    _ _ 
      | \\ | |  / / |
      |  \\| |  | | |
      | |\\  |  | | |
      |_| \\_|  |_|_|
      `);
      break;
    case 12:
      console.log(`
       _   _    _ ____  
      | \\ | |  / |___ \\ 
      |  \\| |  | | __) |
      | |\\  |  | |/ __/ 
      |_| \\_|  |_|_____|
      `);
      break;
    case 13:
      console.log(`
       _   _    _ _____ 
      | \\ | |  / |___ / 
      |  \\| |  | | |_ \\ 
      | |\\  |  | |___) |
      |_| \\_|  |_|____/ 
      `);
      break;
    case 14:
      console.log(`
       _   _    _ _  _   
      | \\ | |  / | || |  
      |  \\| |  | | || |_ 
      | |\\  |  | |__   _|
      |_| \\_|  |_|  |_| 
      `);
      break;
    case 15:
      console.log(`
       _   _    _ ____  
      | \\ | |  / | ___| 
      |  \\| |  | |___ \\ 
      | |\\  |  | |___) |
      |_| \\_|  |_|____/ 
      `);
      break;
    default:
      console.log('Не красивые буковки ибо не правильно попросили циферку.');
  }
};

function getValuesInSquare(arr,row,col){
  let resultArray =[];
  if ((row===0||row===1||row===2)&&(col===0||col===1||col===2)){
    resultArray.push(arr[0][0],arr[0][1],arr[0][2],arr[1][0],arr[1][1],arr[1][2],
      arr[2][0],arr[2][1],arr[2][2]) 
  } 
  if ((row===3||row===4||row===5)&&(col===0||col===1||col===2)){
    resultArray.push(arr[3][0],arr[3][1],arr[3][2],arr[4][0],arr[4][1],arr[4][2],
      arr[5][0],arr[5][1],arr[5][2]) 
  }
  if ((row===6||row===7||row===8)&&(col===0||col===1||col===2)){
    resultArray.push(arr[6][0],arr[6][1],arr[6][2],arr[7][0],arr[7][1],arr[7][2],
      arr[8][0],arr[8][1],arr[8][2]) 
  }
  if ((row===0||row===1||row===2)&&(col===3||col===4||col===5)){
    resultArray.push(arr[0][3],arr[0][4],arr[0][5],arr[1][3],arr[1][4],arr[1][5],
      arr[2][3],arr[2][4],arr[2][5]) 
  } 
  if ((row===3||row===4||row===5)&&(col===3||col===4||col===5)){
    resultArray.push(arr[3][3],arr[3][4],arr[3][5],arr[4][3],arr[4][4],arr[4][5],
      arr[5][3],arr[5][4],arr[5][5]) 
  }
  if ((row===6||row===7||row===8)&&(col===3||col===4||col===5)){
    resultArray.push(arr[6][3],arr[6][4],arr[6][5],arr[7][3],arr[7][4],arr[7][5],
      arr[8][3],arr[8][4],arr[8][5]) 
  }
  if ((row===0||row===1||row===2)&&(col===6||col===7||col===8)){
    resultArray.push(arr[0][6],arr[0][7],arr[0][8],arr[1][6],arr[1][7],arr[1][8],
      arr[2][6],arr[2][7],arr[2][8]) 
  } 
  if ((row===3||row===4||row===5)&&(col===6||col===7||col===8)){
    resultArray.push(arr[3][6],arr[3][7],arr[3][8],arr[4][6],arr[4][7],arr[4][8],
      arr[5][6],arr[5][7],arr[5][8]) 
  }
  if ((row===6||row===7||row===8)&&(col===6||col===7||col===8)){
    resultArray.push(arr[6][6],arr[6][7],arr[6][8],arr[7][6],arr[7][7],arr[7][8],
      arr[8][6],arr[8][7],arr[8][8]) 
  }
  return resultArray
} 

// функция поиска "пересечения" трех массивов 
// (возвращает массив чисел, которые подходят для пустой ячейки)
function  getCorrectValues (arr1,arr2,arr3){
  let res= [];
  for (let i=0; i<arr1.length; i++){
    for (let j=0;j<arr2.length;j++){
      if (arr1[i]==arr2[j]){
         for (let k=0;k<arr3.length;k++){
          if(arr1[i]==arr3[k]){
            res.push(arr3[k])
          }
         }
      }
    }
  }
  return res;
}

function makeArrayFromString(string, startIndex) {
  const puzzleArr = string.split('');

  const array = [];
  const y = ((startIndex - 1) * 81);
  for (let i = y; i < puzzleArr.length; i += 1) {
    array.push(puzzleArr.splice(y, 9));
    if (array.length === 9) { break; }
  }
  return array;

}

module.exports = {
  getPrettyNumber,
  getValuesInSquare,
  getCorrectValues,
  makeArrayFromString,
};
