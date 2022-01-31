import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';
import { getDiceResult } from '@/utils';
import { configData } from '@/data';

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
    description: '보정치를 [] 안에 입력하세요. 여러개를 입력할 때에는 쉼표로 구분해주세요. 없으면 []만 입력하세요. (음수 가능) ex) [2,-5]',
    type: 'STRING',
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
    const mod = interaction.options.get('보정치').value as string;
    const loop = interaction.options.get('반복').value as number;

    const diceResult = getDiceResult(dice, dices, mod, loop);

    const embed = new MessageEmbed()
      .setColor(configData.color.red)
      .addField('**[주사위]**', diceResult.topString)
      .addField('**[결과]**', diceResult.bottomString.join(''));

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
