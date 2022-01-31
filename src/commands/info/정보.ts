import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';
import { configData } from '@/data';

export default new Command({
  name: '정보',
  description: '봇의 정보를 보여줍니다.',
  run: async ({ interaction, }) => {
    const embed = new MessageEmbed()
      .setColor(configData.color.red)
      .setTitle('DiceRoll V3')
      .setURL('https://nihilapp.github.io/dice/')
      .setDescription('DiceRoll은 TRPG를 하다가 만들게 된 웹 프로그램입니다. 주사위를 간편하게 굴릴 수 있습니다. 미리 준비된 주사위를 굴릴 수도 있고 커스텀 주사위를 굴릴 수도 있습니다. TRPG 뿐만 아니라 다양한 용도로 사용할 수도 있습니다. 주사위 뿐만 아니라 간단한 계산 기능도 넣어두었습니다.')
      .addField('\u200b', '\u200b')
      .addFields({
        name: '**제작**', value: '[**NIHILncunia**](https://github.com/NIHILncunia)', inline: true,
      }, {
        name: '**버전**', value: `***${configData.version}***`, inline: true,
      })
      .addField('**사용법**', '이 봇은 빗금 명령어를 지원합니다. `/`를 입력하면 명령어 리스트가 나타납니다. 원하는 명령어를 사용하면 됩니다.')
      .setImage('https://nihilapp.github.io/dice/images/site-image.png')
      .setTimestamp();

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
