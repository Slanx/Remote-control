import robot from 'robotjs';

export const drawCircle = (radius: number) => {
  let { x: positionX, y: positionY } = robot.getMousePos();

  robot.mouseToggle('down');
  for (let i = 0; i < Math.PI * 2.0; i += 0.01) {
    let axisY = positionY + radius * Math.sin(i);
    let axisX = positionX + radius * Math.cos(i) - radius;

    robot.moveMouse(axisX, axisY);
  }

  robot.mouseToggle('up');

  return `draw_circle`;
};

export const drawRectangle = (width: number, height: number) => {
  let { x, y } = robot.getMousePos();

  robot.mouseToggle('down');

  for (let i = 0; i <= height; i++) {
    y--;
    robot.moveMouse(x, y);
  }

  for (let i = 0; i <= width; i++) {
    x++;
    robot.moveMouse(x, y);
  }

  for (let i = 0; i <= height; i++) {
    y++;
    robot.moveMouse(x, y);
  }

  for (let i = 0; i <= width; i++) {
    x--;
    robot.moveMouse(x, y);
  }

  robot.mouseToggle('up');

  return `draw_rectangle`;
};

export const drawSquare = (width: number) => {
  drawRectangle(width, width);
  return `draw_square`;
};
