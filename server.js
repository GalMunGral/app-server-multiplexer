const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/proxy/:url', async (req, res) => {
  const fetchURL = encodeURI(decodeURIComponent(req.params.url));
  // console.log('Fetching', url)
  try {
    const response = await fetch(fetchURL, {
      headers: {
        Range: req.headers.range
      },
      timeout: 5000
    });
    res.set('Content-Type', response.headers.get('Content-Type'));
    res.status(response.status);
    let type;
    if ((type = response.headers.get('Content-Type')) && (type.includes('text') || type.includes('javascript'))) {
      let text = await response.text();
      const url = new URL(req.params.url);
      text = text.replace(new RegExp(url.host, 'g'), 'localhost:8080');
      res.send(text);
    } else {
      response.body.pipe(res);  
    }
  } catch (error) {
    console.log(error);
    res.send();
  }
})

app.use(express.static('public'));

app.listen(8080, () => console.log('Listening!'));
