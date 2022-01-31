export interface IRollReturnType {
  arr: number[];
  total: number;
}

// eslint-disable-next-line no-unused-vars
type IRoll = (dice: number, dices?: number, mod?: number[]) => IRollReturnType;

export const roll: IRoll = (dice, dices = 1, mod = [] as number[]) => {
  const diceArray: number[] = [];

  for (let i = 0; i < dices; i++) {
    const result = Math.ceil(Math.random() * dice);
    diceArray.push(result);
  }

  const modTotal = mod.reduce((acc, crr) => acc + crr, 0);
  const diceTotal = diceArray.reduce((pre, crr) => pre + crr, 0);
  const total = diceTotal + modTotal;

  return {
    arr: diceArray,
    total,
  };
};

export const MultipleRoll = (dice: number, dices?: number, mod?: number[], loopNumber?: number) => {
  const rollArray: IRollReturnType[] = [];

  for (let i = 0; i < loopNumber; i++) {
    const result = roll(dice, dices, mod);
    rollArray.push(result);
  }

  return rollArray;
};
