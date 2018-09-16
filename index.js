const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', (req, res) => {
  res.send('test response from express backend')
})

app.post('/echo', (req, res) => {
  res.send(req.body)
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))