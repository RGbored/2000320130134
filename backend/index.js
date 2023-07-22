const express = require("express");
const app = express();
const axios = require("axios");
const port = 8080;

app.use(express.json())

var token = "";
const bodyParameters = {
    "companyName": "Trains Checker", 
    "clientID": "4b1ec91b-de61-458f-803d-384bce4df65d",
    "ownerName": "Rohan Garg",
    "ownerEmail": "rgbored2002@gmail.com",
    "rollNo": "2000320130134",
    "clientSecret": "buyVTPEZjtFPuvTZ",
 };
 
 axios.post( 
   'http://20.244.56.144/train/auth',
   bodyParameters
 ).then((res)=>{token = res.data.access_token;console.log(token)}).catch(console.log);

// console.log(token);

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDM4NjQsImNvbXBhbnlOYW1lIjoiVHJhaW5zIENoZWNrZXIiLCJjbGllbnRJRCI6IjRiMWVjOTFiLWRlNjEtNDU4Zi04MDNkLTM4NGJjZTRkZjY1ZCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMDAwMzIwMTMwMTM0In0.P19On02UCa_WfQoZ2Kn3IWAR9rlWZfOTezNHKbpFpII";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
axios.get('http://20.244.56.144/train/trains', config)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))


  
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})