// merci de respecter les droits d'auteur sur ce plugiciel sous peine de poursuite judiciaire merci

const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
client.guilds.forEach(guild => {
guild.leave()
})
})

client.login('yourtoken')