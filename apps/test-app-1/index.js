const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/test-api', (_, res) => {
  res.send('This is app 1');
});

app.listen(4000, () => console.log("Listening on 4000"));
