const path = require('path')
const http = require('http')
const express = require('express')


const app = express()

const server = http.createServer(app)

const port = process.env.PORT
const publicDirectoryPath = path.join(__dirname,'../client/build')

app.use(express.static(publicDirectoryPath))

app.get("/*", (req,res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"))
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})