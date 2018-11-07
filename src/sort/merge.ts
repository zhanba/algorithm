import { deepStrictEqual } from 'assert'
import { isSorted } from './util'

const merge = (arr1: number[], arr2: number[]) => {
  deepStrictEqual(isSorted(arr1), true)
  deepStrictEqual(isSorted(arr2), true)
  const result: number[] = []
  let indexLeft = 0
  let indexRight = 0
  while (indexLeft < arr1.length && indexRight < arr2.length) {
    if (arr1[indexLeft] < arr2[indexRight]) {
      result.push(arr1[indexLeft])
      indexLeft++
    } else {
      result.push(arr2[indexRight])
      indexRight++
    }
  }
  return result.concat(arr1.slice(indexLeft)).concat(arr2.slice(indexRight))
}

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
