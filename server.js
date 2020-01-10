const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/proxy/:url', async (req, res) => {
  const fetchURL = encodeURI(decodeURIComponent(req.params.url));
  // console.log('Fetching', url)
  try {
    const response = await fetch(fetchURL, { timeout: 1000 });
    res.set('Content-Type', response.headers.get('Content-Type'));
    console.log(response.headers.get('Content-Type'));
    let type;
    if ((type = response.headers.get('Content-Type')) && type.includes('text')) {
      let text = await response.text();
      const url = new URL(req.params.url);
      console.log(url.origin, url.host);
      text = text.replace(new RegExp(url.origin, 'g'), 'http://localhost:8080');
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
