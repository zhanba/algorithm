import { twoSum } from './two-sum'

describe('two sum', () => {
  it('case 1: have 2 same number', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  it('case 2: have a number equal to half of the target', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('case 3:  have 2 same number', () => {
    expect(twoSum([2, 3, 3], 6)).toEqual([1, 2])
  })

  it('case 4: common case', () => {
    expect(twoSum([5, 3, 2, 4], 9)).toEqual([0, 3])
  })
})
