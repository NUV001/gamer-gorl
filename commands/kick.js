const Discord = require('discord.js');

module.exports = {

    name: 'kick',
    description: 'Use this command to kick a user.',
    execute(message, args){
        if (msg.member.hasPermission("KICK_MEMBERS")) {
            if(msg.members.mentions.first()){
                try{
                    msg.members.mentions.first().kick();
                    let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
                    const kickembed = new Discord.MessageEmbed();
                    embed.setColor('#98ff98');
                    embed.setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL());
                    embed.setTitle('User has been kicked!');
                    embed.setThumbnail(userinfoget.user.displayAvatarURL());
                    embed.setFooter('Not as bad as the ban hammer, but still pretty bad');
                    message.channel.send(kickembed);
                    
                } catch{
                    msg.reply("I do not have permissions to kick" + msg.members.mentions.first());
                }
            } else{
                msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
            }
        }
    }

    
}