function findMatching(array, string){
    return array.filter(s => s.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(array, string) {
  return array.filter(s => s.toLowerCase().indexOf(string.toLowerCase()) === 0
  )
}

function matchName(array, string) {
  return array.filter(s => s.name === string)
}


// OR less dry:
//  
// function findMatching(drivers, name) {
//     return drivers.filter(driver => {
//         if(driver.toLowerCase() === name.toLowerCase()) {
//             return driver;
//         }
//     });
// }

// function fuzzyMatch(drivers, letters) {
//     return drivers.filter(driver => driver.startsWith(letters));
// }

// function matchName(drivers, name) {
//     return drivers.filter(driver => {
//         if(driver.name === name) {
//             return driver.name;
//         }
//     })
// }