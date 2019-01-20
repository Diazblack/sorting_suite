function bubbleSort(unsorted) {
  var swap;
  do {
    swap = false;
    for(var i = 0; i < unsorted.length; i++){
      if(unsorted[i] && unsorted[i + 1] && unsorted[i] > unsorted[i + 1]) {
      [unsorted[i], unsorted[i + 1]] = [unsorted[i + 1], unsorted[i]];
      swap = true;
      }
    }
  } while(swap);
  return unsorted;
}

module.exports = bubbleSort;
