const partition = (arr: number[], left: number, right: number) => {
  const pivot = arr[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

const swap = (arr: number[], index1: number, index2: number) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

export const quickSort = (arr: number[], left: number = 0, right: number = arr.length - 1) => {
  if (arr.length > 1) {
    const index = partition(arr, left, right)
    if (left < index - 1) {
      quickSort(arr, left, index - 1)
    }
    if (index < right) {
      quickSort(arr, index, right)
    }
  }
  return arr
}
