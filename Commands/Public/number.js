const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("number")
        .setDescription("Replies with a random number"),
        /**
         * 
         * @param {CommandInteraction} interaction
         */
        execute(interaction) {  
            const numbers = require("../../Assets/numbers.json")
            const math = (Math.floor(Math.random() * Math.floor(numbers.length)));

            const numbEmbed = new EmbedBuilder()
                .setColor("#b57509")
                .setDescription(`${numbers[math]}`)
                .setTimestamp()

            interaction.reply({ embeds: [numbEmbed] })
        }
}