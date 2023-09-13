const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 45,
	data: new SlashCommandBuilder()
		.setName('travel')
		.setDescription('Go to nearest City'),
	async execute(interaction) {
		await interaction.reply('You have travelled to CITY');
	},
};