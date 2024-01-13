import express from 'express';
import path from 'path';

const app = express();

console.log();

app.get('/', (req, res) =>  {
  res.sendFile(path.resolve('index.html'));
});

app.get('/geckobugs', async (req, res) => {
  const bugs = await fetch('https://bugzilla.mozilla.org/rest/bug?product=Core&component=WebVR&resolution=---');
  const json = await bugs.json();
  res.send(json);
});

app.get('/webkitbugs', async (req, res) => {
  const bugs = await fetch('https://bugs.webkit.org/rest/bug?product=WebKit&component=WebXR&resolution=---');
  const json = await bugs.json();
  res.send(json);
});

app.listen(3000, () => { console.log('listening') });