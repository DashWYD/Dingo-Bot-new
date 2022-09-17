const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js")
 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("add")
        .setDescription("Add two whole numbers together")
        .addIntegerOption(option => 
            option.setName("num1").setDescription("first number you want to add"))
         .addIntegerOption(option => 
             option.setName("num2").setDescription("second number you want to add")),
        /**
         * 
         * @param {ChatInputCommandInteraction} interaction
         */
        async execute(interaction, client) {
            let num1 = interaction.options.getInteger("num1")
            let num2 = interaction.options.getInteger("num2")

            const mathFunc = parseInt(num1 + num2)
            
            await interaction.reply({ content: `${num1} + ${num2} = ${mathFunc}`})

        }
}