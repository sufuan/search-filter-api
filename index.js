import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";
require('dotenv').config()
const port = process.env.PORT || 4000


app.use(cors());

app.get("/", (req, res) => {


  // res.json(Users.splice(0,10))
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

app.listen(port, () => console.log("API is working!"));
