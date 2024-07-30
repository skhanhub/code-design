export default class TrieNode<T> {
    value: T
    children: Map<string, TrieNode<T>>
    constructor() {
        this.children = new Map<string, TrieNode<T>>
        this.value = null
    }
}