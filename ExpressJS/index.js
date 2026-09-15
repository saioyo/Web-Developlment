const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; // 8080

app.listen(port,() =>{
    console.group(`app is listening on port ${port}`);
});  

app.get("/:username/:id",(req,res) => {
    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome to page of @${username}.</h1>`
    res.send(htmlStr);
});

app.get("/search",(req , res) =>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`<h1>search results for query ${q}</h1>`);
});



// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>apple<li>mango<li>orange</ul>"
//     res.send(code);
// });



// app.get("/apple", (req,res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req,res) => {
//     res.send("you contacted orange path");
// });

// app.get("else", (req,res) => {
//     res.send("This pathe does not exists");
// });

