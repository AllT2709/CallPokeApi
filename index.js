const express = require('express');
const cors = require('cors');

const app = express();
const pokeRute = require('./routes/routes.js')

///routes//
app.use(cors());

app.use('/api',pokeRute);



app.listen(3000 , ()=>{
  console.log('escuchando en el puerto 3000');
})
