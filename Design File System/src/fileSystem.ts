import PathNode from "./pathNode";

export default class FileSystem {
    private root: PathNode<number>
    constructor() {
        this.root = new PathNode()
    }

    createPath(path: string, value: number): boolean {
        let current = this.root
        const nodes = path.split("/")
        for (let i = 1; i < nodes.length; i++) {
            if (!current.children.has(nodes[i])) {
                if (i < nodes.length - 1) return false
                current.children.set(nodes[i], new PathNode())
            }
            current = current.children.get(nodes[i])
        }
        if (current.value === null) {
            current.value = value
            return true
        }
        return false
    }

    get(path: string): number {
        let current = this.root
        const nodes = path.split("/")

        for (const node of nodes) {
            if (!current.children.has(node)) {
                return -1
            }
            current = current.children.get(node)
        }
        return current.value
    }
}