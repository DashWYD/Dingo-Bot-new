const { SlashCommandBuilder, CommandInteraction } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Gets the avatar of the user selected")
        .addUserOption((options) => 
        options.setName("target").setDescription("The user.").setRequired(true)),
        /**
         * 
         * @param {CommandInteraction} interaction 
         */
    execute(interaction){
        const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
    }
}