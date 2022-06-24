export type MouseActions = {
  (mouseOffset: number): string;
};

export type MousePosition = {
  (): string;
};

export type SquareAndCirlce = {
  (radius: number): string;
  (height: number): string;
};

export type Rectangle = {
  (width: number, height: number): string;
};

export type PrintScreen = {
  (): Promise<string>;
};
