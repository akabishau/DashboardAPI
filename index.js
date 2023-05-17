import express from 'express'
const app = express()

import { userRouter } from './users/users.js'

app.use((req, res, next) => {
    console.log(`Time Now: ${Date.now()}`)
    next()
})

app.get('/hello', (req, res) => {
    res.status(200).json( { success: true })
})


app.use('/users', userRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Server started on http:localhost:${port}`)
})

