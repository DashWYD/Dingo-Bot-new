const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Play 8ball !")
    .addStringOption((options) =>
      options
        .setName("text")
        .setRequired(true)
        .setDescription("Ask your question")
    ),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */

  execute(interaction) {
    let rep = [
      "Yes.",
      "No.",
      "Probably.",
      "I think not.",
      "Certainly.",
      "Can you ask again your question please ?",
      "Never !",
      "Maybe.",
      "I'm sure !",
    ];
    let result = Math.floor(Math.random() * rep.length);
        const eightbEmbed = new EmbedBuilder()
            .setColor("#b57509")
            .setDescription(`**${interaction.options.getString("text")}**\nMy answer is: **${rep[result]}**`)
            .setTimestamp()

        interaction.reply({ embeds: [eightbEmbed]})
  },
};
