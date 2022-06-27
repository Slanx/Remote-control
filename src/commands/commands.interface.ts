import {
  MouseActions,
  Rectangle,
  SquareAndCirlce,
  MousePosition,
  PrintScreen,
} from './commands.types';

interface IMousePosition {
  axisX: number;
  axisY: number;
}

interface ICommads {
  [command: string]: MouseActions | Rectangle | SquareAndCirlce | MousePosition | PrintScreen;
}

export { IMousePosition, ICommads };
