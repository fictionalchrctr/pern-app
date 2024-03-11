import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const PORT = 8888

app.use(express.json())

app.post('/api', async (req, res) => {
  const { email, name } = req.body

  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name required fields!' })
  }

  try {
    const createdRow = await prisma.waitList.create({
      data: {
        email,
        name,
      },
    })
    // какие поля вернуть в ответ
    res.json(createdRow)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже!',
    })
  }
})

const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
