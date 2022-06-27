import robot from 'robotjs';
import Jimp from 'jimp';

const swapColorChannel = (bmp: robot.Bitmap) => {
  const image = bmp.image as Buffer;
  const { width, height } = bmp;
  for (let i = 0; i < width * height * 4; i += 4) {
    [image[i], image[i + 2]] = [image[i + 2], image[i]];
  }
};

export const printScreen = async () => {
  const { x, y } = robot.getMousePos();
  const width = 200;
  const height = 200;
  const bitmap = robot.screen.capture(x - 100, y - 100, width, height);

  swapColorChannel(bitmap);

  const image = new Jimp({ data: bitmap.image as Buffer, width, height });

  const base64 = await image.getBase64Async('image/png');

  const formatedBase64 = base64.slice(base64.indexOf(',') + 1);

  return `prnt_scrn ${formatedBase64}`;
};

export default printScreen;
