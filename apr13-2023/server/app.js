const express = require("express");

const app = express();

app.use(require("cors")({ origin: "* " }));

app.get("*", async (req, res) => {
  const request = await fetch(
    "https://random-word-api.herokuapp.com/word"
  ).then((res) => res.json());

  return res.json(request[0]);
});

app.listen(3000);
