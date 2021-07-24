const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'profile',
    description: "The bot will return the info about the user",
    execute(message, args){
        let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)

        const proembed = new Discord.MessageEmbed()
        .setColor('#98ff98')
        .setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL())
        .addFields(
            {name: `User ping`,
            value: `<@${userinfoget.id}>`}
        )
        .addFields(
            {name: `User ID`,
            value: `${userinfoget.id}`}
        )
        .addFields(
            {name: 'Joined server',
            value: moment(userinfoget.joinedAt).format('LLLL')}
        )
        .addFields(
            {name: 'Joined Discord',
            value: moment(userinfoget.user.createdAt).format('LLLL')}

        )
        
        .setFooter('the bot is kinda in beta, so dm me if problems -NUV');
        
    message.channel.send(proembed);
        
    }
    
}
