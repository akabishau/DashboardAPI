import express, { Request, Response, NextFunction} from 'express'
const app = express()

import { userRouter } from './users/users.js'

app.use((req, res, next) => {
    console.log(`Time Now: ${Date.now()}`)
    next()
})

app.get('/hello', (req, res) => {
    //res.status(200).json( { success: true })
    throw new Error('Error!..')
})


app.use('/users', userRouter)


// example of the error middleware
// any error from the flow gets there  
app.use((err: Error, req: Request, res: Response, next: NextFunction ) => {
    console.log(err.message)
    res.status(501).send(err.message)
})

const port = 3000
app.listen(port, () => {
    console.log(`Server started on http:localhost:${port}`)
})

