const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');


let bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    switch (command) {

      case '1':
        await message.channel.setName('q1 verified');
        break;
      
      case '2':
        await message.channel.setName('q2 verified');
        break;
      
      case '3':
        await message.channel.setName('q3 verified');
        break;
      
      case '4':
        await message.channel.setName('q4 verified');
        break;
      
      case '5':
        await message.channel.setName('q5 verified');
        break;
      
      case '6':
        await message.channel.setName('q6 verified');
        break;
      
      case '7':
        await message.channel.setName('q7 verified');
        break;
      
      case '8':
        await message.channel.setName('q8 verified');
        break;
      
      case '9':
        await message.channel.setName('q9 verified');
        break;
      
      case '10':
        await message.channel.setName('q10 verified');
        break;
      
      case '11':
        await message.channel.setName('q11 verified');
        break;
      
      case '12':
        await message.channel.setName('q12 verified');
        break;
      
      case '13':
        await message.channel.setName('q13 verified');
        break;
      
      case '14':
        await message.channel.setName('q14 verified');
        break;
      
      case '15':
        await message.channel.setName('q15 verified');
        break;
      
      case '16':
        await message.channel.setName('q16 verified');
        break;
      
      case '17':
        await message.channel.setName('q17 verified');
        break;
      
      case '18':
        await message.channel.setName('q18 verified');
        break;
      
      case '19':
        await message.channel.setName('q19 verified');
        break;
      
      case '20':
        await message.channel.setName('q20 verified');
        break;

        
    }
  }
});




require('./server')();
bot.login("OTEzMDEyOTUyNzk2MzY0ODIw.YZ4Tkg.v8MWvnlJ612Pzsphs0_HizkeNSM");