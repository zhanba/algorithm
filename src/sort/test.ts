import { insertionSort } from './insertion'
import { mergeSort } from './merge'
import { quickSort } from './quick'
import { selectionSort } from './selection'
import { shuffle } from './shuffle'

describe('sort algorithm', () => {
  test('test selection sort', () => {
    const arr = [3, 5, 1, 2, 9]
    selectionSort(arr)
    expect(arr).toEqual([1, 2, 3, 5, 9])
  })

  test('test insertion sort', () => {
    const arr = [3, 5, 1, 2, 9]
    insertionSort(arr)
    expect(arr).toEqual([1, 2, 3, 5, 9])
  })

  test('test quick sort', () => {
    const arr = [3, 5, 1, 2, 9]
    quickSort(arr)
    expect(arr).toEqual([1, 2, 3, 5, 9])
  })

  test('test merge sort', () => {
    const arr = [3, 5, 1, 2, 9]
    const result = mergeSort(arr)
    expect(result).toEqual([1, 2, 3, 5, 9])
  })
})

test('shuffle array', () => {
  const arr = [3, 5, 1, 2, 9]
  const result = shuffle(arr)
  expect(result).not.toEqual(arr)
  expect(result).toEqual(expect.arrayContaining(arr))
})
