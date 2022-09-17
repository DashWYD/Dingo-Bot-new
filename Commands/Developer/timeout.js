const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js')

    module.exports = {
        data: new SlashCommandBuilder()
            .setName("timeout")
            .setDescription("Puts a user in timeout")
            .addUserOption(option => option.setName("user").setRequired(true).setDescription("Select a user you'd like to timeout"))
            .addStringOption(option => option.setName("duration").setRequired(true).setDescription("The Duration of the timeout. (IN MINUTES)"))
            .addStringOption(option => option.setName('reason').setDescription("The reason for putting the user in timeout."))
            .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
        async execute(interaction, client) {
            const user = interaction.options.getUser("user");
            const duration = Number(interaction.options.getString("duration"));
            let reason = interaction.options.getUser("reason");
            const member = await interaction.guild.members.fetch(user.id)

            if (!member) return await interaction.reply({ content: `The user mentioned is not within the server.`});
            if (!duration) return await interaction.reply({ content: `The duration provided is not a valid number.`})
            if (!reason) reason = 'No reason provided';

            // Member.send Embed
            const embed = new EmbedBuilder()
                .setTitle('You have been put in timeout.')
                .addFields(
                    { name: "Duration", value: `${duration} minutes`}
                )
                .setColor("Blue")
                .setTimestamp()

                // confirmation embed
                const sendEmbed = new EmbedBuilder()
                    .setTitle(`Successfully Timed out ${user.tag} `)
                    .setColor("Blue")
                    .setTimestamp()
                        await interaction.reply({ embeds: [sendEmbed] })
                try {
                    await member.send({ embeds: [embed] });
                } catch (error) {
                    console.error(`The users Dm's are off.`);
                }

                try {
                    await member.timeout(duration, reason)
                    interaction.channel.send({ content: `${user.tag} has been set in timeout` })
                } catch (error) {
                    console.error(error);
                }
        },
    };