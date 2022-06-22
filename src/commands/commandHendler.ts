import { moveMouse, getMousePosistion } from './mouse';
import { drawCircle, drawRectangle, drawSquare } from './draw';
import { ICommads } from './commands.interface';
import { printScreen } from './printScreen';

const commands: ICommads = {
  mouse_right: moveMouse.bind(null, 'mouse_right'),
  mouse_left: moveMouse.bind(null, 'mouse_left'),
  mouse_up: moveMouse.bind(null, 'mouse_up'),
  mouse_down: moveMouse.bind(null, 'mouse_down'),
  mouse_position: getMousePosistion,
  draw_circle: drawCircle,
  draw_square: drawSquare,
  draw_rectangle: drawRectangle,
  prnt_scrn: printScreen,
};

export const commandHendler = async (commandLine: string) => {
  const [command, ...args] = commandLine.split(' ');
  let commandArgs = args.map((item) => +item);

  return await commands[command](...commandArgs);
};
