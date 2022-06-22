import robot, { Bitmap } from 'robotjs';
import Jimp from 'jimp';

export const printScreen = async () => {
  const { x, y } = robot.getMousePos();
  const width = 200;
  const height = 200;
  const bitmap = robot.screen.capture(x - 100, y - 100, width, height);

  swapColorChannel(bitmap);

  const image = new Jimp({ data: bitmap.image, width, height });

  const base64 = await image.getBase64Async('image/png');

  const formatedBase64 = base64.slice(base64.indexOf(',') + 1);

  return `prnt_scrn ${formatedBase64}`;
};

const swapColorChannel = (bmp: Bitmap) => {
  for (let i = 0; i < bmp.width * bmp.height * 4; i += 4) {
    [bmp.image[i], bmp.image[i + 2]] = [bmp.image[i + 2], bmp.image[i]];
  }
};
