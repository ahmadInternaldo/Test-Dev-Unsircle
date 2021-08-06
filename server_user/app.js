const express = require('express');
const app = express();
const PORT = 4001;
const {connect} = require('./config/mongodb');
const userRoute = require('./routes/user_route');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(userRoute)
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