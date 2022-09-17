const {  SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()

   module.exports = {
    data: new SlashCommandBuilder()
        .setName("suggestion_setup")
        .setDescription("Setup our suggestion feature for your server")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => 
            option.setName("serverid").setDescription("Your server(guild) id").setRequired(true))
         .addStringOption(option => 
            option.setName("channelid").setDescription("Your future suggestion channel's id").setRequired(true)),
            /**
             * 
             * @param {ChatInputCommandInteraction} interaction 
             */
        async execute(interaction, client){
            let channelid = interaction.options.getString("channelid")
            let serverid = interaction.options.getString("serverid")

            await db.set(`${serverid}.suggestionChannel`, channelid);

                const setupEmbed = new EmbedBuilder()
                .setTitle("You are all setup to the db")
                .setColor("Green")
                .setTimestamp()
            interaction.reply({ embeds: [setupEmbed]})
        }
    
    
   }
