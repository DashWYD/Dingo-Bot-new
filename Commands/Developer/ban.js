const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
    module.exports = {
     data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Bans a user")
        .addUserOption(option => option.setName("user").setDescription(`User you'd like to ban`).setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription('The reason for banning a user'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
        /**
         * 
         * @param {ChatInputCommandInteraction} interaction 
         */
        async execute(interaction, client) {
            const banUser = interaction.options.getUser('user')
            const banMember = await interaction.guild.members.fetch(banUser.id);
            if (!banMember) return await interaction.reply({ content: `The user mentioned is no longer within the server.`, ephemeral: true });

            let reason = interaction.options.getString("reason")
            if (!reason) reason = "No reason was provided";

            await banMember.send({ content: `You have been banned from the server\nServer: ${interaction.guild.name}\nReason: ${reason}`})
                .catch(err => console.log(`The user that was being banned did not receive the message, are their dms off?`))


                    await banMember.ban({ days: 7, reason: reason })
                        .catch(err => console.error(err))


                    const banEmbed = new EmbedBuilder()
                        .setTitle(`Successfully banned ${banUser.tag}`)
                        .setColor("Green")
                        .setTimestamp()

            await interaction.reply({ embeds: [banEmbed] })
        },   
};