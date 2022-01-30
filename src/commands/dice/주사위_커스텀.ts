/* eslint-disable no-await-in-loop,guard-for-in */
import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';
import { MultipleRoll } from '@/utils';

export default new Command({
  name: '주사위_커스텀',
  description: '원하는 형태의 주사위를 굴릴 수 있습니다.',
  options: [ {
    name: '개수',
    description: '주사위의 개수를 입력하세요. 하나만 굴리려면 1을 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, {
    name: '면',
    description: '주사위 면의 수를 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, {
    name: '보정치',
    description: '보정치를 입력하세요. 없으면 0을 입력하세요. (음수 가능)',
    type: 'NUMBER',
    required: true,
  }, {
    name: '반복',
    description: '반복 횟수를 입력하세요. 하나만 굴리려면 1을 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, ],
  run: async ({ interaction, }) => {
    const dice = interaction.options.get('면').value as number;
    const dices = interaction.options.get('개수').value as number;
    const mod = interaction.options.get('보정치').value as number;
    const loop = interaction.options.get('반복').value as number;

    const dicesString = dices === 1 ? '' : `${dices}`;
    const modString = mod === 0
      ? ''
      : mod < 0
        ? `${mod}`
        : `+${mod}`;
    const loopString = loop === 1 ? '' : `× ${loop}`;

    const diceName = `***${dicesString}D${dice}${modString} ${loopString}***`;

    const diceResult = MultipleRoll(dice, dices, mod, loop).map((item) => {
      if (item.arr.length > 1) {
        return `***${item.total}*** (${item.arr.join(', ')}) ${modString}\n`;
      } else {
        if (mod === 0) {
          return `***${item.total}***\n`;
        } else {
          return `***${item.total}*** (${item.arr.join(', ')}) ${modString}\n`;
        }
      }
    });

    const embed = new MessageEmbed()
      .setColor('#df2323')
      .addField('**[주사위]**', diceName)
      .addField('**[결과]**', diceResult.join(''));

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
