/**
 * 取剩余数组的第一个，和前面依次比较，插入适当位置
 * 时间复杂度n^2
 * @param arr
 */
export const insertionSort = (arr: number[]) => {
  arr.forEach((item, i) => {
    const temp = item
    let j = i
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j = j - 1
    }
    arr[j] = temp
  })
}
