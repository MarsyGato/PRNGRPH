const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

bot.on('message', message => {
  if (message.content === '!lu$t') {
    message.channel.send({
    file: 'https://cdn.discordapp.com/attachments/353588490866262016/421272481077395456/porn.gif'});
  }
})

