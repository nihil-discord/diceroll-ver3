import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';

export default new Command({
  name: '나누기',
  description: '수를 나눈 값을 보여줍니다.',
  options: [ {
    name: '숫자1',
    description: '첫번째 숫자를 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, {
    name: '숫자2',
    description: '두번째 숫자를 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, ],
  run: async ({ interaction, }) => {
    const num1 = interaction.options.get('숫자1').value as number;
    const num2 = interaction.options.get('숫자2').value as number;

    const result = num1 / num2;

    const embed = new MessageEmbed()
      .setColor('#df2323')
      .addField('**[요청]**', `${num1} ÷ ${num2}`)
      .addField('**[결과]**', `***${result}***`);

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
