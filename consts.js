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
  makeArrayFromString,
};
