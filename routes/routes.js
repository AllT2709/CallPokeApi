const router = require('express').Router();
const axios = require('axios');
const http = require('https')
var url = 'https://pokeapi.co/api/v2/pokemon/'


router.get('/:id',function(req,res) {
  //console.log(req);
  axios.get(url + req.params.id)
    .then(response =>{
      //console.log(response.data);

      res.json({
        error:false,
        id:response.data.id,
        name:response.data.name,
        order: response.data.order,
        //type:response.data.types[0].type.name
        type:response.data.types.map(type =>{
          return type.type.name
        })
      })
    })
    .catch(err =>{
      res.json({
        error:true,
        body:err
      })
    })
})


module.exports = router;
