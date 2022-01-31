import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';
import { roll } from '@/utils';
import { configData } from '@/data';

export default new Command({
  name: '주사위_프리셋',
  description: '미리 준비되어있는 주사위를 선택해서 굴릴 수 있습니다.',
  options: [ {
    name: '주사위',
    description: '굴릴 주사위를 선택하세요.',
    type: 'NUMBER',
    required: true,
    choices: [ {
      name: 'D2',
      value: 2,
    }, {
      name: 'D4',
      value: 4,
    }, {
      name: 'D6',
      value: 6,
    }, {
      name: 'D8',
      value: 8,
    }, {
      name: 'D10',
      value: 10,
    }, {
      name: 'D12',
      value: 12,
    }, {
      name: 'D20',
      value: 20,
    }, {
      name: 'D100',
      value: 100,
    }, {
      name: '3D6',
      value: 1,
    }, ],
  }, ],
  run: async ({ interaction, }) => {
    const diceNumber = interaction.options.get('주사위').value as number;

    let result = diceNumber !== 1
      ? roll(diceNumber)
      : roll(6, 3, []);

    const topString = diceNumber !== 1
      ? `***D${diceNumber}***`
      : `***3D6***`;

    const bottomString = diceNumber !== 1
      ? `***${result.total}***`
      : `***${result.total}*** (${result.arr.join(', ')})`;

    const embed = new MessageEmbed()
      .setColor(configData.color.red)
      .addField('**[주사위]**', topString)
      .addField('**[결과]**', bottomString);

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
