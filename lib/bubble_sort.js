// function switched(array, i, j) {
//   var change = array[i];
//   array[i] = array[j];
//   array[j] = change;
// }

// var array = [5,2,5,4,1,3,2,1,4,3]

function bubbleSort(unsortArray) {
  var swap;
  do {
    swap = false;
    for(var i = 0; i < unsortArray.length; i++ )  {
      if(unsortArray[i] && unsortArray[i + 1] && unsortArray[i] > unsortArray[i + 1]) {
      [unsortArray[i], unsortArray[i + 1]] = [unsortArray[i + 1], unsortArray[i]];
      swap = true;
      }
    }
  } while(swap);
  return unsortArray;
}

//
// console.log( bubbleSort(array))
module.exports = bubbleSort();
