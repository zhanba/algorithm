/**
 * Fisher–Yates shuffle
 */
export const shuffle = (input: number[]) => {
  const arr = input.slice()
  for (let i = arr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const itemAtIndex = arr[randomIndex]
    arr[randomIndex] = arr[i]
    arr[i] = itemAtIndex
  }
  return arr
}
