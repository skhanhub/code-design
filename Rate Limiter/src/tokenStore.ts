export type Limit = {
    token: number
    lastAccess: number
}

export default class TokenStore {
    private store: Map<string, Limit>
    constructor() {
        this.store = new Map<string, Limit>()
    }

    getLimit(userId: string): Limit {
        return this.store[userId]
    }

    setLimit(userId: string, limit: Limit) {
        this.store[userId] = limit
    }
}