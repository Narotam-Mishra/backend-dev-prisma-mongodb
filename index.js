
const express = require('express')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const app = express()

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// cookie middleware - to trap the cookies and
// verifies that whether user is allowed to make request or not
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send("Working with Prisma")
})

const portNo = 8784

app.listen(portNo, () => {
    console.log(`server is running on port:${portNo}`);
})