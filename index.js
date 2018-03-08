const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

bot.on('message', message => {
  if (message.content === '!lu$t') {
    message.reply('https://cdn.discordapp.com/attachments/374203224498110468/421097072905682955/wallhaven-389981.jpg')
    message.channel.send({
    file: 'https://cdn.discordapp.com/attachments/374203224498110468/421255464542666764/wallhaven-598110.jpg'});
  }
})
