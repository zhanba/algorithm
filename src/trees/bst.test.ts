import { Tree } from './bst'

describe('tree', () => {
  test('insert node', () => {
    const tree = new Tree()

    tree.insert({ value: 1 })
    tree.insert({ value: 3 })
    tree.insert({ value: 6 })
    tree.insert({ value: 7 })
    tree.insert({ value: 20 })
    tree.insert({ value: 9 })
    tree.insert({ value: 8 })
    tree.insert({ value: 10 })
    tree.insert({ value: 25 })

    expect(tree.inOrder()).toEqual([1, 3, 6, 7, 8, 9, 10, 20, 25])
  })
})
