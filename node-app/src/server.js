const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Eu te Maria Clara");
});

app.listen(3000, function (){
    console.log("app listening on port 3000");
});
