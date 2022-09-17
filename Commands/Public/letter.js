const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("letter")
        .setDescription("Replies a random letter"),
        /**
         * 
         * @param {CommandInteraction} interaction
         */
        execute(interaction, client) {
        let letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let result = Math.floor(Math.random() * letters.length);

                const letterEmbed = new EmbedBuilder()
                    .setColor("#b57509")
                    .setDescription(`${letters[result]}`)
                    .setTimestamp()
            

            interaction.reply({ embeds: [letterEmbed] })
        }
}