import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    
    //console.log(day)
    
    let type = "a weekday";
    let adv = "it's time to work hard!"

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to relax!";
    };

  res.render("index.ejs", {
    weekday: today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }), 
    dayType: type, 
    advice: adv,

});
});

// the port and the second the port
app.listen(port, () => {
    console.log(`Server running on port ${port}.`); //Callback function\
})
