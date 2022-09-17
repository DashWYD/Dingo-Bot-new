const { CommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("botinfo")
        .setDescription("Replies with info on the bot"),
            /**
             * 
             * @param {CommandInteraction} interaction
             */
    execute(interaction, client) {
        const biEmbed = new EmbedBuilder()
            .setColor("#b57509")
            .setTitle("Bot Info")
            
            .addFields(
                { name: "Bot name", value: `${client.user.tag}`},
                { name: "Server Count", value: `${client.guilds.cache.size} server(s)`},
                { name: "Ping", value: `${client.ws.ping}`},
                { name: "Basic commands", value: "/ping,\n /8ball,\n /letter,\n /topic,\n /avatar,\n /number,\n /add,\n /subtract,\n /divide,\n /multiply,\n /pow"},
                { name: "Admin only commands", value: "/welcomesetup,\n /suggestion_setup"}
            )
            .setTimestamp()

            interaction.reply({ embeds: [biEmbed]})
    }
        
}