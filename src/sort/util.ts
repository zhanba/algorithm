export const exchange = (arr: number[], i: number, min: number) => {
  const temp = arr[i]
  arr[i] = arr[min]
  arr[min] = temp
}

export const isSorted = (arr: number[]) => {
  arr.forEach((item, i) => {
    if (i < arr.length - 1 && item > arr[i + 1]) {
      return false
    }
  })
  return true
}
