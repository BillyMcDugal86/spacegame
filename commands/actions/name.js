const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 6,
	data: new SlashCommandBuilder()
		.setName('name')
		.setDescription('Which is better Hotdog or Kewlcat?'),
	async execute(interaction) {
		await interaction.reply('Its definitely Kewlcat!');
	},
};