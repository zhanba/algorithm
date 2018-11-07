import { INode } from './node'

export class Tree {
  private root?: INode
  constructor(n?: INode) {
    this.root = n
  }

  public insert(node: INode) {
    this.root = this.insertNode(this.root, node)
  }

  public preOrder(): number[] {
    return []
  }

  public inOrder(): number[] {
    return this.inOrderTraverse(this.root)
  }

  public postOrder(): number[] {
    return []
  }

  private inOrderTraverse(node: INode | undefined): number[] {
    if (node === undefined) {
      return []
    }
    let result: number[] = []
    result = result.concat(this.inOrderTraverse(node.left))
    result.push(node.value)
    result = result.concat(this.inOrderTraverse(node.right))
    return result
  }

  private insertNode(current: INode | undefined, node: INode): INode {
    if (current === undefined) {
      return node
    }
    if (node.value < current.value) {
      current.left = this.insertNode(current.left, node)
    }
    if (node.value > current.value) {
      current.right = this.insertNode(current.right, node)
    }
    if (node.value === current.value) {
      // not handle this
    }
    return current
  }
}
