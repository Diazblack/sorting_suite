const assert = require('chai').assert
const sort = require('../lib/bubble_sort')

describe('Sorting Algorithm ', function() {
  context('giving and array it will sort it ', function(){
    it('return an array of 1 value', function(){
      assert.deepEqual(sort([5]), [5]);
    })
    it('from smallest to biggest', function(){
      assert.deepEqual(sort([3,1,2]), [1,2,3]);
    })
    it('from smallest to biggest take 2', function(){
      assert.deepEqual(sort([2,3,1]), [1,2,3]);
    })

    it('from smallest to biggest take 3', function(){
      assert.deepEqual(sort([1,3,2]), [1,2,3]);
    })

    it('from sorted unsortedArray', function(){
      assert.deepEqual(sort([1,2,3]), [1,2,3]);
    })
    it('sort duplicate values ', function() {
      assert.deepEqual(sort([5,3,4,2,5,4,3,2,1,1]), [1,1,2,2,3,3,4,4,5,5]);
    })
  })
})
