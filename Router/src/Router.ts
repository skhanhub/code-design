import PathNode from "./PathNode";

export default class Router {
    private root: PathNode<string>
    constructor() {
        this.root = new PathNode()
    }


    addRoute(path: string, result: string): void {
        let current = this.root
        const nodes = path.split("/")

        for (const node of nodes) {
            if (!current.children.has(node)) current.children.set(node, new PathNode())
            current = current.children.get(node)
        }
        current.value = result
    }

    callRoute(path: string): string {
        return this.DFS(path.split("/"), 0, this.root)
    }

    private DFS(nodes: Array<string>, pointer, current: PathNode<string>): string {
        if (!current) return ""
        if (pointer === nodes.length) return current.value === null ? "" : current.value

        const node = nodes[pointer]
        if (node === "*") {
            for (const child of current.children.values()) {
                const result = this.DFS(nodes, pointer + 1, child)
                if (result !== "") return result
            }
            return ""
        }
        return this.DFS(nodes, pointer + 1, current.children.get(node))
    }
}

//https://leetcode.com/discuss/interview-question/object-oriented-design/2167390/atlassian-ood-design-a-middelware-router