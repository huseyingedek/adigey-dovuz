// Node.js başlatma dosyası (cPanel Node.js App / Passenger için)
// Next.js production sunucusunu başlatır.
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(port, () => {
    console.log(`> Sunucu hazır: port ${port}`);
  });
});
