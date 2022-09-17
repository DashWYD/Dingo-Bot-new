const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("welcomesetup")
        .setDescription("Setup our welcome system")
        .addStringOption(option => 
            option.setName("channelid")
            .setDescription("The id of your welcome channel")
            )
        .addStringOption(option => 
            option.setName("serverid").setDescription("The id of the server")
            ),
            /**
             * @param {ChatInputCommandInteraction} interaction
             */
        async execute(interaction, client) {
            let channelid = interaction.options.getString("channelid")
            let serverid = interaction.options.getString("serverid")
            if (channelid === null) return interaction.reply("No channel id included")

            await db.set(`${serverid}.welcomeChannel`, channelid);

                const setupEmbed = new EmbedBuilder()
                .setTitle("You are all setup to the db")
                .setColor("Green")
                .setTimestamp()
            interaction.reply({ embeds: [setupEmbed]})
        }

}