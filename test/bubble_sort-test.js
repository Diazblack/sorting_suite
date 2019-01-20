const assert = require('chai').assert
const bubbleSort = require('../lib/bubble_sort')
console.log(bubbleSort)

describe('Sorting Algorithm ', function() {
  context('giving and array it will sort it ', function(){
    it('return an array of 1 value', function(){
      assert.deepEqual(bubbleSort([5]), [5]);
    })
    it('from smallest to biggest', function(){
      array = [3,1,2];
      assert.deepEqual(bubbleSort(array), [1,2,3]);
    })
    it('from smallest to biggest take 2', function(){
      array = [2,3,1];
      assert.deepEqual(bubbleSort(array), [1,2,3]);
    })

    it('from smallest to biggest take 3', function(){
      array = [1,3,2];
      assert.deepEqual(bubbleSort(array), [1,2,3]);
    })

    it('from sorted array', function(){
      array = [1,2,3];
      assert.deepEqual(bubbleSort(array), [1,2,3]);
    })
    it('sort duplicate values ', function() {
      array = [5,3,4,2,5,4,3,2,1,1];
      assert.deepEqual(bubbleSort(array), [1,1,2,2,3,3,4,4,5,5]);
    })
  })
})
