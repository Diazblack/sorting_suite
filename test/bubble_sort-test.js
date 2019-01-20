const assert = require('chai').assert
const bubbleSort = require('../lib/bubble_sort')

describe('Sorting Algorithm ', function() {
  context('giving and array it will sort it ', function(){
    it('from smallest to biggest', function(){
      assert.equal(bubbleSort([5,3,4,2,1]), [1,2,3,4,5])
    })
  })
})
