const Discord = require('discord.js');


module.exports = {
    
    name: 'mute',
    description: "use this command to mute members without time limit",
    execute(message, args){

        const target = message.mentions.users.first();
        if (msg.member.hasPermission("MANAGE_ROLES")){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'gamers who vibe');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
                let memberTarget = message.guild.members.cache.get(target.id)
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id)
                let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
                const muteembed = new Discord.MessageEmbed();

                muteembed.setColor('#98ff98');
                muteembed.setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL());
                muteembed.setTitle('User has been muted!');
                muteembed.setThumbnail(userinfoget.user.displayAvatarURL());
                muteembed.setFooter('Now you cant talk lmao');
                message.channel.send(muteembed);

            } else {
                message.channel.send('User does not exist');
            }
        } else{
           message.channel.send('Are you a mod? I dont think so.'); 
        }


    }



}