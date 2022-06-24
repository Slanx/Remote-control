import robot from 'robotjs';

export const drawCircle = (radius: number) => {
  const { x: positionX, y: positionY } = robot.getMousePos();

  robot.mouseToggle('down');
  for (let i = 0; i < Math.PI * 2.0; i += 0.01) {
    const axisY = positionY + radius * Math.sin(i);
    const axisX = positionX + radius * Math.cos(i) - radius;

    robot.moveMouse(axisX, axisY);
  }

  robot.mouseToggle('up');

  return 'draw_circle';
};

export const drawRectangle = (width: number, height: number) => {
  const { x, y } = robot.getMousePos();

  robot.mouseToggle('down');

  for (let i = 0; i <= height; i += 1) {
    robot.moveMouse(x, y - i);
  }

  for (let i = 0; i <= width; i += 1) {
    robot.moveMouse(x + i, y);
  }

  for (let i = 0; i <= height; i += 1) {
    robot.moveMouse(x, y + i);
  }

  for (let i = 0; i <= width; i += 1) {
    robot.moveMouse(x - i, y);
  }

  robot.mouseToggle('up');

  return 'draw_rectangle';
};

export const drawSquare = (width: number) => {
  drawRectangle(width, width);
  return 'draw_square';
};
