import RateLimiter from "../../src/rateLimiter";
import TokenStore from "../../src/tokenStore";


describe("test ratelimmiter class", () => {
    test('should return true', () => {
        const tokenStore = new TokenStore()
        const rateLimiter = new RateLimiter(tokenStore, 1, 1, 1)

        expect(rateLimiter.handleRequest("a")).toBeTruthy()
    });

    test('should return false', () => {
        const tokenStore = new TokenStore()
        const rateLimiter = new RateLimiter(tokenStore, 1, 1, 1)

        rateLimiter.handleRequest("a")
        expect(rateLimiter.handleRequest("a")).toBeFalsy()
    });

    test('should return true if second request starts after the refil time', (done) => {
        const tokenStore = new TokenStore()
        const rateLimiter = new RateLimiter(tokenStore, 1, 1, 1)

        rateLimiter.handleRequest("a")

        setTimeout(() => {
            expect(rateLimiter.handleRequest("a")).toBeTruthy()
            done()
        }, 1500)
    });


});