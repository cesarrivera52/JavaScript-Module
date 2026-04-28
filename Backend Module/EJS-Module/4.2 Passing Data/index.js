import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let userFName = "";
let userLName = "";
let fullName = "";
let fullNameNumLetters = 0; // CHANGED: initialized to 0 since it holds a number

app.use(bodyParser.urlencoded({ extended: true }));

function nameSplitter(req, res, next) {
  userFName = req.body["fName"];
  userLName = req.body["lName"];
  fullName = userFName + userLName;             // CHANGED: string goes here
  fullNameNumLetters = fullName.length;         // CHANGED: length goes here
  next();
}

app.use(nameSplitter);

app.get("/", (req, res) => {
  res.render("index.ejs", { numberOfLetters: 0 }); // CHANGED: added default value
});

app.post("/submit", (req, res) => {
  console.log(fullName, fullNameNumLetters);
  res.render("index.ejs", {                    // CHANGED: fixed misplaced )
    fullName: fullName,
    numberOfLetters: fullNameNumLetters,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
