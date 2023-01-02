const express = require('express')
const cors = require('cors')
const dbConnect = require('./dbConnect')
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())
const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')
const port = process.env.PORT || 5000

app.use('/api/newsitems/' , newsRoute)
app.use('/api/users/' , userRoute)

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))