import { exchange } from './util'

/**
 * 时间复杂度 n^2
 * @param arr
 */
export const selectionSort = (arr: number[]) => {
  arr.forEach((item, i) => {
    let min = i
    /**
     * 每次在剩余的数组中找到最小值，放到最前
     * 第一次找到最小，放到第一位
     * 第二次找到第二小（剩余最小），放到第二位
     * 依此类推
     */
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    exchange(arr, i, min)
  })
}
