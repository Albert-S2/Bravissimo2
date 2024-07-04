const express = require("express");
const app = express();
const port = 8080;

const { searchForCollection } = require("./searchService");

app.get("/search", (req, res) => {
  // TODO: Why is this necessary? How might you improve this?
  res.header("Access-Control-Allow-Origin", "*");

  const collectionSearch = searchForCollection(req.query.collection);
  res.send(collectionSearch);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
