
const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
client.guilds.forEach(guild => {
guild.leave()
})
})

client.login('yourtoken')
