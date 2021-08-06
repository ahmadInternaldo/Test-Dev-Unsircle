const express = require('express');
const app = express();
const PORT = 4002;
const {connect} = require('./config/mongodb');
const PermissionRouter = require('./routes/PermissionRouter');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(PermissionRouter)
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