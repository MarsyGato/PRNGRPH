const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

bot.on('message', message => {
  if (message.content === '!lu$t') {
    message.channel.send({
    file: 'https://media.discordapp.net/attachments/374203224498110468/421272414622711819/wallhaven-598110.jpg?width=546&height=402'});
  }
})
