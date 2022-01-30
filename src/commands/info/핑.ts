import { MessageEmbed } from 'discord.js';
import { Command } from '@/structures/Command';

export default new Command({
  name: '핑',
  description: '핑을 보여줍니다.',
  run: async ({ interaction, client, }) => {
    const embed = new MessageEmbed()
      .setColor('#df2323')
      .addField('**[핑]**', `***${client.ws.ping}ms***`);

    await interaction.followUp({ embeds: [ embed, ], });
  },
});
