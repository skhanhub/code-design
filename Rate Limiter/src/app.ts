import RateLimiter from "./rateLimiter";
import TokenStore from "./tokenStore";

const tokenStore = new TokenStore()
const rateLimiter = new RateLimiter(tokenStore, 4, 1, 1)


console.log(rateLimiter.handleRequest("a"));
console.log(rateLimiter.handleRequest("a"));
console.log(rateLimiter.handleRequest("a"));
console.log(rateLimiter.handleRequest("a"));
console.log(rateLimiter.handleRequest("a"));
console.log(rateLimiter.handleRequest("a"));

setTimeout(() => {
    console.log(rateLimiter.handleRequest("a"));
    console.log(rateLimiter.handleRequest("a"));
}, 2000)
