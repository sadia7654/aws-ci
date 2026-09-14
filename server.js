```javascript
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node DevOps App</title>
    </head>
    <body>
      <h1>Hello Sadia! 🚀</h1>
      <h2>Welcome to Node.js DevOps</h2>
      <p>This application is running inside a Docker container.</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
