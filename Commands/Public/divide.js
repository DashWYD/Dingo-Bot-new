const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("divide")
        .setDescription("divide two whole numbers")
        .addStringOption(option => 
            option.setName("num1").setDescription("Your dividend"))
         .addStringOption(option => 
             option.setName("num2").setDescription("Your divisor")),
        /**
         * 
         * @param {ChatInputCommandInteraction} interaction
         */
        async execute(interaction, client) {
            let num1 = interaction.options.getString("num1")
            let num2 = interaction.options.getString("num2")

            const mathFunc = parseFloat(num1 / num2)
            
            await interaction.reply({ content: `${num1} / ${num2} = ${mathFunc}`})

        }
}