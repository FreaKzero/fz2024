const express = require('express');
const app = express();
const cors = require('cors');
const port = 1337;
const EventEmitter = require('events');
const Stream = new EventEmitter(); 
const chokidar = require('chokidar');

app.use(cors());
let client = null;

app.use(express.static('static'))

app.get('/sub', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
      };
      res.writeHead(200, headers);

      client = res;

      Stream.on("push", function(event, data) {
        res.write(`event:${String(event)}\ndata:${data}\n\n`);
      });

      Stream.emit("push", "msg", 'subbed!');

      res.on('close', () => {
        client = null;
      });
});

app.get('/client', (req, res) => {
    const code = `
    (function() {
        var evtSource = new EventSource('http://localhost:1337/sub');

        evtSource.onerror = () => {
            alert("Eventsource Error!");
        }

        evtSource.addEventListener("refresh", function (event) {
            location.replace(location.href);
          });
    })()
    `;

    res.send(code);
});

// TODO: only check for build and dist
chokidar.watch('../').on('all', (event, path) => {
    Stream.emit("push", "refresh", null);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});