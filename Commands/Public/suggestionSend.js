const {
  SlashCommandBuilder,
  EmbedBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("suggest")
    .setDescription("Send a suggestion to the suggestion channel")
    .addStringOption((option) =>
      option.setName("text").setDescription("Your suggestion")
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const serverid = interaction.guild.id;
    const channelid = await db.get(`${serverid}.suggestionChannel`);
    const message = interaction.options.getString("text");
    const messageEmbed = new EmbedBuilder()
      .setTitle(`${interaction.user.tag}'s suggestion`)
      .setDescription(`${message}`)
      .setColor("#b57509")
      .setTimestamp();

      try {
        const channel = await interaction.guild.channels.fetch(channelid);
        const msg = await channel.send({ embeds: [messageEmbed] });
        await  msg.react("✅")
        await msg.react("⏸");
        await msg.react("❌");
  
  
      } catch {
        // oh no it doesnt work
      }
 

    interaction.reply({
          content:
        "Your message has been sucessfully sent to the suggestion channel"
    });
  },
};
