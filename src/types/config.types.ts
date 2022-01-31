import { ColorResolvable } from 'discord.js';

interface IColorData {
  red: ColorResolvable;
}

export interface IConfigData {
  color: IColorData;
  version: string;
}
