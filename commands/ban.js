const Discord = require('discord.js');


module.exports = {
    name: 'ban',
    description: 'Use this command to ban a user.',
    execute(message, args){
        if (msg.member.hasPermission("BAN_MEMBERS")) {
            if(msg.members.mentions.first()){
                try{
                    msg.members.mentions.first().ban();
                    let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
                    const banembed = new Discord.MessageEmbed();
                    embed.setColor('#98ff98');
                    embed.setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL());
                    embed.setTitle('User has been banned!');
                    embed.setThumbnail(userinfoget.user.displayAvatarURL());
                    embed.setFooter('You probably deserved it cunt');
                    message.channel.send(banembed);
                    
                } catch{
                    msg.reply("I do not have permissions to ban " + msg.members.mentions.first());
                }
            } else{
                msg.reply("You do not have permissions to ban " + msg.members.mentions.first());
            }
        }
    }

    
}

