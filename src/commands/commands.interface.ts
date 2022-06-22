interface IMousePosition {
  axisX: number;
  axisY: number;
}

interface ICommads {
  [command: string]: Function;
}

export { IMousePosition, ICommads };
