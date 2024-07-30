import Router from "../../src/rateLimiter";


describe("test addRoute method of the Router", () => {
    test('should add /foo route without throwing error', () => {
        const router = new Router()

        expect(() => router.addRoute("/foo", "3")).not.toThrow();
    });
});