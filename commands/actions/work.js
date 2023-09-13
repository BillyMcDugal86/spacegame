const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 60,
	data: new SlashCommandBuilder()
		.setName('work')
		.setDescription('Perform work'),
	async execute(interaction) {
		await interaction.reply('You have earned 1 credit');
	},
};