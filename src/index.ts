import { WebSocketServer, createWebSocketStream } from 'ws';
import { httpServer } from './http_server';
import { commandHendler } from './commands/commandHendler';

const HTTP_PORT = 3000;
const WS_PORT = 8080;

httpServer.listen(HTTP_PORT, () => {
  process.stdout.write(`Start static http server on the ${HTTP_PORT} port! \n`);
});

const wsServer = new WebSocketServer({ port: WS_PORT });

wsServer.on('connection', (websoket) => {
  const websoketStream = createWebSocketStream(websoket, {
    encoding: 'utf8',
    decodeStrings: false,
  });

  websoketStream.on('data', (chunk: string): void => {
    console.log('resived: %s', chunk);

    commandHendler(chunk)
      .then((result) => {
        websoketStream.write(result, 'utf-8');
      })
      .catch((e) => {
        console.log(e);
      });
  });
});
