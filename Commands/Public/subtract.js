const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("subtract")
        .setDescription("subtract two whole numbers together")
        .addStringOption(option => 
            option.setName("num1").setDescription("first number you want to subtract"))
         .addStringOption(option => 
             option.setName("num2").setDescription("second number you want to subtract")),
        /**
         * 
         * @param {ChatInputCommandInteraction} interaction
         */
        async execute(interaction, client) {
            let num1 = interaction.options.getString("num1")
            let num2 = interaction.options.getString("num2")

            const mathFunc = parseFloat(num1 - num2)
            
            await interaction.reply({ content: `${num1} - ${num2} = ${mathFunc}`})

        }
}