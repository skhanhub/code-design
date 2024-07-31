import TokenStore, { Limit } from "./tokenStore";

export default class RateLimiter {
    tokenStore: TokenStore;
    capacity: number;
    refillTime: number;
    refillAmount: number;

    constructor(tokenStore: TokenStore, capacity: number, refillTime: number, refillAmount: number) {
        this.tokenStore = tokenStore;
        this.capacity = capacity;
        this.refillTime = refillTime;
        this.refillAmount = refillAmount;
    }

    private addToken(currentLimit: Limit, currentTime: number): Limit {

        const refillUnit = Math.floor((currentTime - currentLimit.lastAccess) / (this.refillTime * 1000)); // convert to milliseconds
        const newTokenAmount = Math.min(currentLimit.token + refillUnit * this.refillAmount, this.capacity);

        return { token: newTokenAmount, lastAccess: currentTime };
    }

    handleRequest(userId: string): boolean {
        const currentTime = Date.now();

        let userLimit = this.tokenStore.getLimit(userId) ?? { token: this.capacity, lastAccess: currentTime };


        if (currentTime - userLimit.lastAccess >= this.refillTime * 1000) {

            userLimit = this.addToken(userLimit, currentTime);
        }

        if (userLimit.token <= 0) return false;

        userLimit.token--;

        this.tokenStore.setLimit(userId, userLimit);

        return true;

    }
}

//https://leetcode.com/problems/logger-rate-limiter/description/?envType=company&envId=atlassian&favoriteSlug=atlassian-six-months

// Implement a rate limiter - implemented leaking bucket algorithm (day before watched this and implemented exactly the same algorithm)
// Modify it to be per user - added concurrent hashmap and pasted previous code for each bucket
// Add a credit system for each user in case rate was not used - happened to be so my code was easily adjustable for it
// Some discussions on thread safety, JVM and on how to make it distributed