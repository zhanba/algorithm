export const twoSum = (nums: number[], target: number) => {
  const map = new Map()
  nums.forEach((num, i) => {
    map.set(num, i)
  })

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)]
    }
  }
}
