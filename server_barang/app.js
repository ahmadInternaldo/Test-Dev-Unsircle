const express = require('express');
const app = express();
const PORT = 4003;
const {connect} = require('./config/mongodb');
const BarangRouter = require('./routes/BarangRouter');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(BarangRouter)
connect()
  .then(()=> {
    console.log('connected to mongodb')
    app.listen(PORT, ()=> {
      console.log('listening Port : ', PORT )
    })
  })
  .catch(err => {
    console.log(err)
  })