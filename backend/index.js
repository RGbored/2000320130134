const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const port = 8080;

app.use(express.json())
app.use(cors());

var token = "";
var trains = {};
const bodyParameters = {
    "companyName": "Trains Checker", 
    "clientID": "4b1ec91b-de61-458f-803d-384bce4df65d",
    "ownerName": "Rohan Garg",
    "ownerEmail": "rgbored2002@gmail.com",
    "rollNo": "2000320130134",
    "clientSecret": "buyVTPEZjtFPuvTZ",
 };
 let interval = 1000;
 axios.post( 
   'http://20.244.56.144/train/auth',
   bodyParameters
 ).then((res)=>{
     token = res.data.access_token;
     setInterval(()=>{

         const config = {
             headers: { Authorization: `Bearer ${token}` }
         };
         axios.get('http://20.244.56.144/train/trains', config)
    .then(res => trains = res.data)
    .catch(err => console.log(err))
     }, 5000);
    
     console.log(res.data.expires_in);
     interval = res.data.expires_in;
     setInterval(() => {
         axios.post( 
             'http://20.244.56.144/train/auth',
             bodyParameters
             ).then((res)=>{
                 token = res.data.access_token;


             console.log(token);
             interval = res.data.expires_in;
         }).catch(console.log);
      }, interval);
 }).then(console.log(interval)).catch(console.log);


app.get('/trains', (req, res)=>{
    res.json(trains);
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})