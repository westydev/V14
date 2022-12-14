const { EmbedBuilder, SlashCommandBuilder, Permissions, Guild } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('testcommand')
    .setDescription(`Shows User's Banner`),
  async execute (interaction) {
   await interaction.reply({ content: 'ddsasd' })
 }
}
