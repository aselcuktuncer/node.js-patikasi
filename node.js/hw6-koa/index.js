const Koa = require('koa');
const Router = require('koa-router');

const port = 3000
const app = new Koa();

const router = new Router()

router.get('/', async (ctx, next) => {
    ctx.body = "<h1>INDEX Page</h1>"
    await next();
})

router.get('/about', async (ctx, next) => {
    ctx.body = "<h1>ABOUT Page</h1>"
    await next();
})

router.get('/contact', async (ctx, next) => {
    ctx.body = "<h1>CONTACT Page</h1>"
    await next();
})

app.use(router.routes());

app.listen(port, () => {
    console.log(`App is running on port number: ${port}`)
});
