const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

bot.on('message', message => {
  
  if(message.content === "!portal") {
  message.channel.send("CAKE IS A LIIIIIIE !!!");
  }
  
  if (message.content === '!lu$t' || message.content === '!lust') {
 
var pic = Math.floor(Math.random() * 16)
    
      if (pic === 0) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421373956981784576/image.gif'});
      }

      if (pic === 1) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421396937535913986/image.gif'});
      }
        
      if (pic === 2) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421396947757170688/image.gif'});
      }

      if (pic === 3) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421396961883717642/image.gif'});
      }

      if (pic === 4) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421396977398448138/image.gif'});
      }

      if (pic === 5) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421396998999244800/image.gif'});
      }

      if (pic === 6) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421397029516738560/image.gif'});
      }

      if (pic === 7) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421397048508678144/image.gif'});
      }

      if (pic === 8) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421397072311222282/image.gif'});
      }

      if (pic === 9) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421397104267886602/image.gif'});
      }

      if (pic === 10) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421397977941278742/image.jpg'});
      }

      if (pic === 11) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421397984992034817/image.jpg'});
      }

      if (pic === 12) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421398022035865601/image.jpg'});
      }

      if (pic === 13) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421398034912378881/image.jpg'});
      }

      if (pic === 14) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421398052469866496/image.jpg'});
      }

      if (pic === 15) {
      message.channel.send({
      file: 'https://cdn.discordapp.com/attachments/415489498852622357/421398069217591296/image.jpg'});
      }
    }   
})
