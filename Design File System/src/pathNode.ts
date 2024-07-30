export default class PathNode<T> {
    value: T
    children: Map<string, PathNode<T>>
    constructor() {
        this.children = new Map<string, PathNode<T>>
        this.value = null
    }
}