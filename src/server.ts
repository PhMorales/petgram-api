import express from 'express'
import dotenv from "dotenv"
import { commentRouter, postRouter, userRouter } from './routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3333
app.use(express.json)

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)
app.listen(port, () => console.log(`Servidor rodante! Acesse-o aqui: \n http://localhost:${port}`))
