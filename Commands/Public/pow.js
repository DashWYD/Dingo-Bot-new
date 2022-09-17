const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pow")
        .setDescription("Put your second number to the power of your first number")
        .addIntegerOption(option => option.setName("num1").setDescription("Number1"))
        .addIntegerOption(option => option.setName("num2").setDescription("Number2")),
        /**
         * 
         * @param {ChatInputCommandInteraction} interaction
         */
        async execute(interaction, client){
            let num1 = interaction.options.getInteger("num1")
            let num2 = interaction.options.getInteger("num1")

            let sum = parseInt(num1 ** num2)

            await interaction.reply({content: `${num1} + ${num2} = ${sum}`})

        }
}