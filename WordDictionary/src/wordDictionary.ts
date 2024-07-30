import TrieNode from "./TrieNode";

export default class WordDictionary {
    private root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    private DFS(word: string, pointer: number, node: TrieNode): boolean {
        let current = node

        for (let i = pointer; i < word.length; i++) {
            const char = word[i]
            if (char === ".") {
                for (let value of current.children.values()) {
                    if (this.DFS(word, i + 1, value)) return true
                }
                return false
            }

            if (!current.children.has(char)) return false
            current = current.children.get(char)
        }

        return current.endOfWord
    }

    addWord(word: string): void {
        const nodes = word.split("")
        let current = this.root
        for (const node of nodes) {
            if (!current.children.has(node)) current.children.set(node, new TrieNode())
            current = current.children.get(node)
        }
        current.endOfWord = true
    }

    search(word: string): boolean {
        return this.DFS(word, 0, this.root)
    }
}

//https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3313694/typesript-trie-dfs/