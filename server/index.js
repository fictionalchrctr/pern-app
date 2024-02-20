import express from 'express'

const app = express()
const PORT = 8888

app.use(express.json())

app.post('/api', async (req, res) => {
  const { email, name } = req.body

  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name required fields!' })
  }
})

const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
