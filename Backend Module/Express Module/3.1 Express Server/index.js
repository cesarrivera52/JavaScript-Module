import express from "express";
const app = express();
const port = 3000;



// the port and the second the port
app.listen(port, () => {
    console.log(`Server running on port ${port}.`); //Callback function\
})

