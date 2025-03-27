const express = require('express')
const app = express()
const semiFinalquiz = require('./routes/semiFinalquiz')

app.use(express.json())

app.get('/exam-group, semiFinalquiz')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})

