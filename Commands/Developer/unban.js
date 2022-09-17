const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChatInputCommandInteraction } = require('discord.js')
    module.exports = {
     data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("unbans a user via id")
        .addStringOption(option => option.setName("id").setDescription(`Id of a user you'd like to unban`).setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription("The reason for banning a user"))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
        /**
         * @param {ChatInputCommandInteraction} interaction
         */
        async execute(interaction, client){
            const userID = interaction.options.getString('id');
            let reason = interaction.options.getString('reason')
            if (!reason) reason = "No reason was provided.";

            await interaction.guild.bans.fetch()
                .then(async bans => {
                    if (bans.size == 0) return await interaction.reply({ content: `There is nobody banned from ${interaction.guild.name}`, ephemeral: true})
                    let bannedID = await  bans.find(ban => ban.user.id == userID)
                    if (!bannedID) return await interaction.reply({ content: `The id stated is not banned from this server, check if you grabbed the correct id`, ephemeral: true})
                    await interaction.guild.bans.remove(userID, reason).catch(err => console.error(err));

                    const unbanEmbed = new EmbedBuilder()
                    .setTitle("Successfully Unbanned the user")
                    .setTimestamp()
            

                    await interaction.reply({ embeds: [unbanEmbed] })
                })
                .catch(err => console.log(err))
        },
}
