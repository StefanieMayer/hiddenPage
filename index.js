import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/hidden", (req, res) => {
    res.render("hidden.ejs");
});

app.post("/submit", (req, res) => {
    if (req.body["entry"] !== "password") {
    res.render ("index.ejs");
    }else{
    res.render ("hidden.ejs");
    };  
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});