
const express = require('express')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send("Working with Prisma")
})

const portNo = 8784

app.listen(portNo, () => {
    console.log(`server is running on port:${portNo}`);
})