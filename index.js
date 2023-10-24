let express = require("express");
let app = express();

let works = {
    "data" : [
        {
            title: "conveyor belt",
            info: "a kinetic sculpture made of an embroidered belt and a frame",
            tech: "arduino, DC servomotor, time of flight sensor"
        },
        {
            title: "waterfall",
            info: "a webcam filter with blue creatures that fall over the user's head",
            tech: "p5.js, p5play, ml, DALL-E 2"
        },
        {
            title: "shell",
            info: "a 3D-printed charm for a bracelet that looks like a white, fibonacci shell",
            tech: "Autodesk Fusion 360, 3D printer"
        }
    ]
};

app.use('/', express.static('public'));

app.get('/about', (req, res) => {
    res.send("Elisabeth is a student of IMA LR at NYU, making and learning all the live long day.");
})

app.get('/works', (req, res) => {
    res.json(works);
})

app.listen(3000, ()=> {
    console.log("listening at localhost:3000");
})