import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// public folder for statics files.
app.use(express.static("public"));


//used axios to get a random joke from the joke api and pass it to the index.ejs to display.
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
    res.render("index.ejs", {
      setup: result.data.setup,
    category: result.data.category,
     });
  } catch (error) {
      console.log(error.response.data);
      res.status(500);
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  