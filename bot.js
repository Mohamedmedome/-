const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	console.log('Welcome Code By:King3rb#9631');
});
// Code Welcome To The Server || كود الترحيب \\
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash:| (رسالة الترحيب) :','- - - - - - - - - - - - - - - - - - - -')
        .addField(":sparkles:| إسمك :",`<@` + `${member.id}` + `>`, true)
        .addField(':loudspeaker:| الرسالة :','ٵ̍هــﻻ̍ۙ ﯟڛۜــﮪــﻻ̍ۙ بــگ بــﮪــذٰ̍ا̍ ا̍ڸــڛۜــېْۧــڔڣــڔ ا̍ڸــمۘــٿــۏٰا̍ڞــ؏ ، نۨــأ̍مۘــڷ ٵ̍نۨ ٺــڦــڕ̍أ̍ ڇۚــمۘــٻۧــ؏ ا̍ڵــڦــﯡٰا̍نۨــېْۧــڼۨــٰ̍ا̍')
        .addField(':1234:| أنت العضو رقم :',`${member.guild.memberCount}`)       
        .addField(':cyclone:| إسم السيرفر :', `${member.guild.name}`,true)
        .setFooter("【нαⲘαα∂α™】")
    
      channel.sendEmbed(embed);
    });


client.login("NDQwNjg0MDI1NjU3Njg4MDY3.DctTdw.vksK-ei6_U5ZPjJDHjDiCA1-hOw");
