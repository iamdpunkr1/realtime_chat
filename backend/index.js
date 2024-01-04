const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    
    const { username } = req.body;
    console.log(username);
  try{
    const r = await axios.put("https://api.chatengine.io/users/",
    {username, secret: username, first_name: username},
    {headers: {"Private-Key": process.env.chat_engine_private_key}
    });

    return res.status(r.status).json(r.data)

  }catch(e){
    
    return res.status(e.response.status).json(e.response.data);
  }
  
});

app.listen(3001,()=> console.log("Server started on port 3001"));