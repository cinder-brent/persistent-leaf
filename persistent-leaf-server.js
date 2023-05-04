/** PersistentLeaf server */
const http = require('http'),
      hostname = 'cinder-pi.local',
      port = 3000,
      fs = require("fs"),
      CinderLogger = require("../../cinder-logger/CinderLogger.js"),
      logger = new CinderLogger(
          fs,
          "PersistentLeaf.log",
      ),
      server = http.createServer((
          req,
          res,
      ) => {
          
          /** DEBUG */
          logger.log("Hello world!");

          /** DEBUG - WORKING */
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Hello World');
          
      });

server.listen(
    port,
    hostname,
    () => {}
);