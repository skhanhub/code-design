export default class TrieNode {
    endOfWord: boolean
    children: Map<string, TrieNode>
    constructor() {
        this.children = new Map<string, TrieNode>
        this.endOfWord = false
    }
}