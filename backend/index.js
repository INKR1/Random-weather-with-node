import express from "express";
import cors from "cors";
const app = express();
app.use(cors()); //priskiriam si moduli del metamu narsykleje cors klaidu

app.use("/images", express.static("images"));

app.get("/", function (req, res) {
  function rand(min, max) {
    let randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randNum;
  }
  let sunnyOrNot = ["Broken Clouds", "Mostly Sunny"];

  let weather = {
    status: sunnyOrNot[rand(0, 1)],
    degree: rand(10, 25),
    feeling: rand(13, 27),
    humidity: rand(50, 90)
  };

  res.json(weather);
});

app.listen(3001); //the server object listens on port 3001
