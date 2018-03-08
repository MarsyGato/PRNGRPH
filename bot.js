const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

bot.on('message', message => {
  if (message.content === '!lu$t') {
 
    
    pic = getRndInteger(1,100);
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 

      if (pic === '1') {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/353588490866262016/421272481077395456/porn.gif'});
        
      if (pic === '0') {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/374203224498110468/421295090237964297/wallhaven-598110.jpg'});
  
}}
  
})
