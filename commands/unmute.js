const Discord = require('discord.js');


module.exports = {
    
    name: 'mute',
    description: "use this command to mute members without time limit",
    execute(message, args){

        const target = message.mentions.users.first();
        if (msg.member.hasPermission("MANAGE_ROLES")){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'enter member role here');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'enter muted role here');
                let memberTarget = message.guild.members.cache.get(target.id)
                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id)
                let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
                const unmuteembed = new Discord.MessageEmbed();

                unmuteembed.setColor('#98ff98');
                unmuteembed.setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL());
                unmuteembed.setTitle('User has been unmuted!');
                unmuteembed.setThumbnail(userinfoget.user.displayAvatarURL());
                unmuteembed.setFooter('You better not make us shut you the fuck up again');
                message.channel.send(unmuteembed);

            } else {
                message.channel.send('User does not exist');
            }
        } else{
           message.channel.send('Are you a mod? I dont think so.'); 
        }


    }



}