const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {

  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
      //console.log(response)

      return res.json(data)
  } catch (error) {
    console.error(error);
  }
    //return res.json([

    //{ 
    //  username: 'text'
    // },
    /// { 
    // username: 'text' 
    /// },
    // ])
})

app.listen(3333);