import { MultipleRoll } from '@/utils/roll';

interface IGetDiceResultReturn {
  topString: string;
  bottomString: string[];
}

interface IGetDiceResult {
  // eslint-disable-next-line no-unused-vars
  (dice: number, dices?: number, mod?: string, loop?: number): IGetDiceResultReturn;
}

export const getDiceResult: IGetDiceResult = (
  dice,
  dices,
  mod,
  loop
) => {
  const dicesString = dices === 1 ? '' : `${dices}`;
  const loopString = loop === 1 ? '' : `× ${loop}`;

  const modArray: number[] = JSON.parse(mod);
  const modStringArray = modArray.map((item) => {
    if (item < 0) {
      return `${item}`;
    } else {
      return `+${item}`;
    }
  });

  return {
    topString: `***${dicesString}D${dice}${modStringArray.join('')} ${loopString}***`,
    bottomString: MultipleRoll(dice, dices, modArray, loop).map((item) => {
      if (item.arr.length > 1) {
        const itemTotal = item.arr.reduce((pre, crr) => pre + crr, 0);

        return `***${item.total}*** (${itemTotal} => ${item.arr.join(', ')})${modStringArray.join('')}\n`;
      } else {
        if (modArray.length === 0) {
          return `***${item.total}***\n`;
        } else {
          return `***${item.total}*** (${item.arr.join(', ')})${modStringArray.join('')}\n`;
        }
      }
    }),
  };
};
