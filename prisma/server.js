// https://github.com/prisma/prisma-examples/blob/master/node/rest-express/src/index.js
const express = require('express')
const bodyParser = require('body-parser')
const { prisma } = require('./generated/prisma-client')

const app = express()

app.use(bodyParser.json())

app.post(`/user`, async (req, res) => {
  const result = await prisma.createUser({
    ...req.body,
  })
  res.json(result)
})

app.get(`/users`, async(req, res) => {
    const result = await prisma.users()
    res.json(result)
})


app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)