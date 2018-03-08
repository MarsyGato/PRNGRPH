const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

bot.on('message', message => {
  if (message.content === '!lu$t') {
 
    
var pic = Math.floor(Math.random() * 2)
    
      if (pic === 2) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/374203224498110468/421248886649257984/wallhaven-389981.jpg'});
      }

      if (pic === 1) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/353588490866262016/421272481077395456/porn.gif'});
      }
        
      if (pic === 0) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/374203224498110468/421295090237964297/wallhaven-598110.jpg'});
      }
    }
  
})
