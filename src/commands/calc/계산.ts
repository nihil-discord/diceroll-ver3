import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';
import { configData } from '@/data';

export default new Command({
  name: '계산',
  description: '간단한 계산을 할 수 있습니다.',
  options: [ {
    name: '연산자',
    description: '연산자를 선택하세요.',
    type: 'STRING',
    required: true,
    choices: [ {
      name: '더하기',
      value: '+',
    }, {
      name: '빼기',
      value: '-',
    }, {
      name: '곱하기',
      value: '×',
    }, {
      name: '나누기',
      value: '÷',
    }, ],
  }, {
    name: '숫자1',
    description: '숫자를 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, {
    name: '숫자2',
    description: '숫자를 입력하세요.',
    type: 'NUMBER',
    required: true,
  }, ],
  run: async ({ interaction, args, }) => {
    const operator = args.get('연산자').value as string;
    const number1 = args.get('숫자1').value as number;
    const number2 = args.get('숫자2').value as number;

    const result = {
      '+': `***${number1 + number2}***`,
      '-': `***${number1 - number2}***`,
      '×': `***${number1 * number2}***`,
      '÷': `몫: ***${number1 / number2}*** 나머지: ***${number1 % number2}***`,
    }[operator];

    const embed = new MessageEmbed()
      .setColor(configData.color.red)
      .addField('**[요청]**', `${number1} ${operator} ${number2}`)
      .addField('**[결과]**', result);

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
