export interface IRollReturnType {
  arr: number[];
  total: number;
}

// eslint-disable-next-line no-unused-vars
type IRoll = (dice: number, dices?: number, extra?: number) => IRollReturnType;

export const roll: IRoll = (dice, dices = 1, extra = 0) => {
  const diceArray: number[] = [];

  for (let i = 0; i < dices; i++) {
    const result = Math.ceil(Math.random() * dice);
    diceArray.push(result);
  }

  const diceTotal = diceArray.reduce((pre, crr) => pre + crr, 0);
  const total = diceTotal + extra;

  return {
    arr: diceArray,
    total,
  };
};

export const MultipleRoll = (dice: number, dices?: number, extra?: number, loopNumber?: number) => {
  const rollArray: IRollReturnType[] = [];

  for (let i = 0; i < loopNumber; i++) {
    const result = roll(dice, dices, extra);
    rollArray.push(result);
  }

  return rollArray;
};
