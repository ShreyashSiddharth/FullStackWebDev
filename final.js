// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css Grid</title>
      <style>
          .container{
              display: grid;
             grid-template-areas:'navbar navbar navbar navbar'
                                 'section section section aside'     ;
          }
          .item{
              background-color: red;
              border: 2px solid black;
              padding: 15px 5px;
          }
          .item:first-child{
              
          }
          #navbar{
              grid-area: navbar;
          }
          #aside{
              grid-area: aside;
          }
          #section{
              grid-area: section;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="item" id="navbar">this is item-1</div>
          <div class="item" id="sectiomn">this is item-2</div>
          <div class="item" id="aside">this is item-3</div>
        
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});