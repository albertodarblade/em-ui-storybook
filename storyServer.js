const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
app.use(serveStatic(path.join(__dirname, 'storybook-static')))
const port = process.env.PORT || 3600
app.listen(port)
