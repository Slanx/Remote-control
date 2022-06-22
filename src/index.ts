import Jimp from 'jimp';
import { httpServer } from './http_server';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { commandHendler } from './commands/commandHendler';

const HTTP_PORT: number = 3000;
const WS_PORT: number = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({ port: WS_PORT });

wsServer.on('connection', async (websoket) => {
  const websoketStream = createWebSocketStream(websoket, {
    encoding: 'utf8',
    decodeStrings: false,
  });

  websoketStream.on('data', async (chunk) => {
    console.log('resived: %s', chunk);
    const result = await commandHendler(chunk);

    websoketStream.write(result, 'utf-8');
  });
});
