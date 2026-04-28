import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, rest)=>{
    rest.send("<h1>Hello!</h1>")
});

app.get("/about", (req, rest)=>{
    rest.send("<h1>About me</h1><p>I am Cesar Rivera</p>")
});

app.get("/contact", (req, rest)=>{
    rest.send("<h1>Contact</h1><p>You can contact me via email...</p>")
});



app.listen(port, () => {
    console.log(`Sever started on ${port}`);
});