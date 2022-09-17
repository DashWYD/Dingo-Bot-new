const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with the ms/ping of the bot"),
        /**
         * 
         * @param {CommandInteraction} interaction
         */
        execute(interaction, client) {

                const pingEmbed = new EmbedBuilder()
                    .setColor("Blue")
                    .setTitle(`Pong!! ${client.ws.ping} Ms`)
                    .setTimestamp()
            

            interaction.reply({ embeds: [pingEmbed] })
        }
}