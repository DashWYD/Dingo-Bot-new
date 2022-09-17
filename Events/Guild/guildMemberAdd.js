const { GuildMember, PermissionFlagsBits } = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "guildMemberAdd",
  /**
   * @param {GuildMember} member
   */
  async execute(member) {
    const serverid = member.guild.id
    const channelid = await db.get(`${serverid}.welcomeChannel`)
       
       const message = `Welcome to the server <@${member.id}>`
  
       try {
        const channel = await member.guild.channels.fetch(channelid)
        channel.send(message)
      } catch {
        //oh no channel does not exist anymore!!
      }
  }
}

