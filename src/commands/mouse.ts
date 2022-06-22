import robot from 'robotjs';
import { IMousePosition } from './commands.interface';

export const getMousePosistion = (): string => {
  const axisX = robot.getMousePos().x;
  const axisY = robot.getMousePos().y;
  return `mouse_position ${axisX},${axisY}`;
};

export const moveMouse = (route: string, mouseOffset: number): string => {
  const position = robot.getMousePos();
  let newPosition: IMousePosition;

  switch (route) {
    case 'mouse_right':
      newPosition = {
        axisX: position.x + mouseOffset,
        axisY: position.y,
      };
      break;
    case 'mouse_left':
      newPosition = {
        axisX: position.x - mouseOffset,
        axisY: position.y,
      };
      break;
    case 'mouse_up':
      newPosition = {
        axisX: position.x,
        axisY: position.y - mouseOffset,
      };
      break;
    case 'mouse_down':
      newPosition = {
        axisX: position.x,
        axisY: position.y + mouseOffset,
      };
      break;
    default:
      newPosition = {
        axisX: position.x,
        axisY: position.y,
      };
  }

  robot.moveMouse(newPosition.axisX, newPosition.axisY);

  return `${route}`;
};
