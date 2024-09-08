import { Router } from 'express'
const appRouter = Router()

appRouter.get('/', (_, res) => {
    res.send('Hello World')
})

export { appRouter }
