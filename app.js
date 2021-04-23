const { static } = require('express')
const express = require('express')
const app = express()
const port = 5000


app.use(express.urlencoded({extended:true}))
app.use(express.static('/public'));
app.set('view engine', 'ejs')




const router = require('./routes/routes')

app.use('/', router)

app.listen(port, () => {
    console.log(`app listen to port ${port}`)
})