import express, {Request, Response, Express} from "express";

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: "I'm alive!"
  })
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})
