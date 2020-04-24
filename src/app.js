const path=require('path') 
const express = require('express')
const hbs = require('hbs')
const request= require('request')

const app=express()
const port=process.env.PORT || 3000
// define paths for express js
const publicDirect = path.join(__dirname,"../public")
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/particals')

// set handle bars egine and view location
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirect))

// the main app....
app.get('',(req,res)=>{res.render('index',{})})


app.listen(port,()=>{console.log('the server is started  port in  '+port)})