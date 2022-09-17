const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("topic")
        .setDescription("Replies with a random topic"),
        /**
         * 
         * @param {CommandInteraction} interaction
         */
        execute(interaction) {  
            const topics = require("../../Assets/topics.json")
            const math = (Math.floor(Math.random() * Math.floor(topics.length)));
            
            const tEmbed = new EmbedBuilder()
            .setColor("#b57509")
            .setDescription(`${topics[math]}`)
            .setTimestamp()
            interaction.reply({ embeds: [tEmbed]})
        }
}