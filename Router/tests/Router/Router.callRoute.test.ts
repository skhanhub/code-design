import Router from "../../src/Router";


describe("test callRoute method of the Router", () => {

    test.each([
        ["/foo", "3"],
        ["/foo/bar", "3"],
        ["/foo/bar", "2"]
    ])("For path %i should return %", (path, value) => {
        const router = new Router()

        router.addRoute(path, value)
        const result = router.callRoute(path)

        expect(result).toBe(value)
    });
});