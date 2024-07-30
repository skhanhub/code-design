import Router from "./Router";


const router = new Router()

router.addRoute("/go", "1")
router.addRoute("/foo/mark", "2")
router.addRoute("/foo/go/car", "3")


console.log(router.callRoute(""));
console.log(router.callRoute("/nah"));
console.log(router.callRoute("/foo/go/car"));

