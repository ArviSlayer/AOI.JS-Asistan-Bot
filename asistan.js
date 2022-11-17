const dev = require("aoi.js");
const bot = new.Bot({
  token: "BOT TOKENİ",
  prefix: ["PREFİX"],
  mobile: false,
  fetchInvites: false,
});
bot.onLeave();
bot.onJoined();
bot.onMessage();
bot.variables({
  p: "PREFİX",
  a: "ABONE ROL ID",
  yrol: "YETKİLİ ROL ID",
  alog: "ABONE ROL LOG ID",
  log: "LOG KANALI ID",
  hunter: "KURUCU ROL ID",
  vip: "VIP ROL ID",
  ytbr: "YOUTUBER ROL ID",
  staff: "MODERATOR ROL ID",
  admin: "ADMİN ROL ID",
  fullperm: "YÖNETİCİ ROL ID",
  gç: "GİRİŞ-ÇIKIŞ KANALI LOG ID",
  asistanlog: "BOT LOG ID",
  bs: "Sunucudan Çıkış Yaptığı İçin Banlandı",
  owo: "1. OWO ROL ID",
  owo2: "2. OWO ROL ID",
});

bot.status({
  text: "$allMembersCount Üyeyi",
  type: "WATCHING",
  status: "online"
});

//ArviS#0011
bot.command({
  name: "yardım",
  aliases: ["y"],
  code: `
  $title[YARDIM]
  $thumbnail[https://media.discordapp.net/attachments/1042129295587426354/1042465114630135878/Screenshot_4-removebg-preview.png]
  $description[**Abone Rol Araçları** \n \`abone\` - \`aboneal\` \n\n **Yetkili Araçları** \n \`eval\` - \`sil\` - \`ban\`- \`unban\` - \`forceban\` - \`patlat\` \n\n **Rol Verme Araçları** \n \`ytbr\` - \`vip\` - \`staff\` - \`admin\` - \`fullperm\` \n\n **OwO Destekçi Araçları** \n \`owo\` - \`owok\` - \`owop\` \n\n **Bot Araçları** \n \`say\` - \`i\` \n\n **Botun Prefixsi** \n \`. (nokta)\`]
  $color[#2f3136]
  $footer[Komutu Kullanan ($userTag)]
  `
});


botcommand({
  name: "abone",
  aliases: ["a"],
  code: `
  $addCmdReactions[<a:tabiefendim:991337603330740284>]
  $giveRole[$mentioned[1];$getServerVar[a]]
  $channelSendMessage[$channelID;<#1042487906968817795> Kanalından \`OwO Cash\` Atarak Bize Destek Olabilirsin \n\n Detaylı Bilgi İçin \`.owo\` Komutunu Kullanabilirsin \n ||<@!$mentioned[1]>||]
  $channelSendMessage[$channelID;{title:Rol Başarıyla Verildi} {description:Rolü Verilen - <@$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[a]>}{color:#03ff00} {footer: Komutu Kullanan ($userTag)}]
  $useChannel[$getServerVar[alog]]
  $title[Abone Rolü VERİLDİ]
  $description[Rolü Verilen **ÜYE** - <@$mentioned[1]> \n\n Rolü Veren **YETKİLİ** - <@!$authorID>]
  $color[#2f3136]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[a]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[yrol];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[yrol]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
`,
});


bot.command({
  "aboneal",
  aliases: ["aa"],
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $takeRole[$mentioned[1];$getServerVar[a]]
  $channelSendMessage[$channelID;{title:Rol Geri Alındı}{description:Rolü Alan - <@$mentioned[1]> \n\n Alınan Rol - <@&$getServerVar[a]>}{color:#03ff00}{footer: Komutu Kullanan ($userTag)}]

  $useChannel[$getServerVar[alog]]
  $title[Abone Rolü ALINDI]
  $description[Rolü Alınan **ÜYE** - <@$mentioned[1]> \n\n Rolü Alan **YETKİLİ** - <@!$authorID>]
  $color[#2f3136]

  $onlyIf[$mentioned[1]!=;{description:Kimden <@&$getServerVar[a]> Rolünü Almam Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username}]
  $onlyForRoles[$getServerVar[yrol];{description:**Bu komutu kullanmak için <@&$getServerVar[yrol]> rolüne sahip olmanız gerekmekte**}{color:00f9ff}]
`,
});


bot.command({
  name: "eval",
  code: `$eval[$message]
    $onlyForIDs[937050705594818631;Bu Komutu Sadece \`HunterK#6660\` Kullanabilir]
`,
});


bot.command({
  name: "sil",
  code: `$color[#2f3136]
  $deletecommand
  $clear[$message[1]]
  $argsCheck[1; Silinecek Mesaj Kadar Sayısal Değer Girmen Lazım]
  $onlyIf[$message[1]<101;Silinecek Mesaj Kadar Sayısal Değer Girmen Lazım]
  $description[ **$message[1] Adet Mesaj Başarıyla Silindi**]
  $suppressErrors[ **Asistan, 14 Günden Eski Mesajları Silemez**]
  $footer[Komutu Kullanan ($userTag)]
  $onlyForRoles[991359452320125028;Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor]
`,

});
//ArviS#0011

bot.command({
  name: "ban",//ArviS#0011
  code: `   
  $ban[$mentioned[1];$noMentionMessage]
  
  $username[$mentioned[1]]#$discriminator[Banlanan *ÜYE** - $mentioned[1]] \n\n Banlanma **SEBEP**i - \` $noMentionMessage \`
  $onlyIf[$mentioned[1]!=$authorID;{title:Kendini Banlayamazsın Salak}{color:#2f3136}]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{title:Kendini Ve Kendinden Üsttekileri Banlayamazsın}]
  $channelSendMessage[$getServerVar[log]; Banlanan **ÜYE** - $username[$mentioned[1]]#$discriminator[$mentioned[1]] \n\n Banlayan **YETKİLİ** - <@!$authorID> ($userTag[$authorID])]
  $onlyIf[$message[2]!=;{description:Doğru Kullanım : .ban @kişi Sebep}]
   $onlyForRoles[991359452320125028;Bu Komutu Kullanabilmek İçin \`Admin\` Rolüne Sahip Olmalısın]

  `,
});
//ArviS#0011
bot.command({
  name: "unban",
  code: `
  $unban[$message[1]]
  Banı Açılan **ÜYE** - \`$username[$message[1]]#$discriminator[$message[1]]\` \n\n Banı Açan **YETKİLİ** - \`$userTag[$authorID]\`
  $channelSendMessage[$getServerVar[log]; Banı Açılan **ÜYE** - $username[$message[1]]#$discriminator[$message[1]] \n\n Banı Açan **YETKİLİ** - <@!$authorID> ($userTag[$authorID])]
  $onlyIf[$isNumber[$message[1]]!=false; Bu Bir ID Değil]
  $onlyIf[$message!=;  Banı Açılacak Kişinin ID'sini Yazmalısın]

 $onlyForRoles[991359452320125028;Bu Komutu Kullanmak İçin \`Admin\` Rolüne Sahip Olmalısın]
`,
});
//ArviS#0011
bot.command({//ArviS#0011
  name: "forceban",
  code: `
  $ban[$message[1];$message[2]$message[3]$message[4]$message[5]$message[6]$message[7]$message[8]$message[9]$message[10]$message[11]$message[12]$message[13]$message[14]$message[15]$message[16]]
  ForceBan Atılan **ÜYE** - $username[$message[1]]#$discriminator[$message[1]] \n\n ForceBan Atılma **SEBEP**i - \` $message[2]$message[3]$message[4]$message[5]$message[6]$message[7]$message[8]$message[9]$message[10]$message[11]$message[12]$message[13]$message[14]$message[15]$message[16] \`
  $onlyIf[$isNumber[$message[1]]!=false; Bu Bir ID Değil]
  $onlyIf[$message!=; ForceBan Atılacak Kişinin ID'sini Yazmalısın]
  $channelSendMessage[$getServerVar[log]; ForceBan Atılan **ÜYE** - $username[$message[1]]#$discriminator[$message[1]] \n\n ForceBan Atan **YETKİLİ** - <@!$authorID> ($userTag[$authorID])]
  $onlyForRoles[991359452320125028;Bu Komutu Kullanmak İçin \`Admin\` Rolüne Sahip Olmalısın]
`,
});
//ArviS#0011
//ArviS#0011
bot.command({
  name: "patlat",
  code: `$description[AYNEN KANKİ BAK PATLATTIN ŞU AN AMK SALAĞI]
    $image[https://media.discordapp.net/attachments/997105193256747028/1042482642265849876/nah-ceken.gif]
    $color[#2f3136]
`,
});
//ArviS#0011
//ArviS#0011
bot.command({
  name: "ytbr",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[ytbr]>]
  $giveRole[$mentioned[1];$getServerVar[ytbr]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[ytbr]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});


bot.command({
  name: "vip",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[vip]>]
  $giveRole[$mentioned[1];$getServerVar[vip]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[vip]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});


bot.command({
  name: "staff",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[staff]>]
  $giveRole[$mentioned[1];$getServerVar[staff]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[staff]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});


bot.command({
  name: "admin",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[admin]>]
  $giveRole[$mentioned[1];$getServerVar[admin]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[admin]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});

//ArviS#0011
bot.command({
  name: "fullperm",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[fullperm]>]
  $giveRole[$mentioned[1];$getServerVar[fullperm]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[fullperm]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});


bot.command({
  name: "owo",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $description[<@&$getVar[owo2]> **ROLÜNÜ** \n <#1042487906968817795> Kanalından <@!937050705594818631>'ya \`250.000 Cowoncy\` Atarak Alabilirsiniz \n\n
  <@&$getVar[owo]> **ROLÜNÜ** \n <#1042487906968817795> Kanalından <@!937050705594818631>'ya \`100.000 Cowoncy\` Atarak Alabilirsiniz]
  $color[#2f3136]
  `,
});


bot.command({
  name: "owok",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]
  $channelSendMessage[$getServerVar[asistanlog];Rolü Verilen **ÜYE** <@$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[owo]>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[owo]>]
  $giveRole[$mentioned[1];$getServerVar[owo]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[owo]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});


bot.command({//ArviS#0011
  name: "owop",
  code: `$addCmdReactions[<a:tabiefendim:991337603330740284>]//ArviS#0011
  $channelSendMessage[$getServerVar[asistanlog];Rolü Verilen **ÜYE** <@$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[owo2]>]
  $description[Rolü Verilen **ÜYE** - <@!$mentioned[1]> \n\n Verilen Rol - <@&$getServerVar[owo2]>]
  $giveRole[$mentioned[1];$getServerVar[owo2]]
  $onlyIf[$mentioned[1]!=;{description:Kime <@&$getServerVar[owo2]> Rolü Vermem Gerektiğini Söylemedin, Lütfen Bir Kullanıcıyı Etiketleyip Tekrar Dene} {color:#ff0000} {title:HEY! $username} ]
  $onlyForRoles[$getServerVar[hunter];{title: HATA!} {description:Bu Komutu Kullanabilmek İçin **<@&$getServerVar[hunter]>** Rolüne Sahip Olmalısın} {color:#ff0000} {footer: Komutu Kullanan ($userTag)}]
  `,
});


bot.joinCommand({
  channel: "$getServerVar[gç]",
  code: `
  $channelSendMessage[$getServerVar[gç];<a:giris:991337536997834872> <@!$authorID> - (**$userTag[$authorID]** | **$authorID**) Aramıza Katıldı \n **$membersCount** Kişi Olduk]
        `,
});

bot.leaveCommand({
  channel: "$getServerVar[gç]",
  code: `
 $channelSendMessage[$getServerVar[gç];<a:cikis:991337376712495164> <@!$authorID> - (**$userTag[$authorID]** | **$authorID**) Aramızdan Ayrıldı \n **$membersCount** Kişiyiz]
`,
});

//ArviS#0011//ArviS#0011
bot.readyCommand({//ArviS#0011
  channel: "$getServerVar[asistanlog]",//ArviS#0011
  code: `$title[<:tik:1035231831815106611>・**Asistan'ınınız Aktif Edildi**]
  $description[
  <a:asagiok:997610182836228157>・*__Kullanılan RAM__* 
  > **%$ram** MB
  
  <a:asagiok:997610182836228157>・*__CPU Durumu__* 
  > **%$cpu**
  
  <a:asagiok:997610182836228157>・*__Botun Gecikme Süresi__* 
  > **$ping** MS
  ]
  $color[#2f3136]
  `,
});


bot.command({
  name: "say",
  code: `$title[Rollere Sahip Üye Sayıları]
 $description[
  <@&$getVar[admin]> : \`$roleMembersCount[$getVar[admin]]\` 
  <@&$getVar[staff]> : \`$roleMembersCount[$getVar[staff]]\`
  <@&$getVar[owo2]> : \`$roleMembersCount[$getVar[owo2]]\`
  <@&$getVar[owo]> : \`$roleMembersCount[$getVar[owo]]\`
  <@&$getVar[ytbr]> : \`$roleMembersCount[$getVar[ytbr]]\` 
  <@&$getVar[vip]> : \`$roleMembersCount[$getVar[vip]]\` 
  <@&991702373128998933> : \`$roleMembersCount[991702373128998933]\` 
  <@&991359353149993031> : \`$roleMembersCount[991359353149993031]\` 
  <@&991329259157200976> : \`$roleMembersCount[991329259157200976]\`]
  $color[#2f3136]
  $footer[Komutu Kullanan ($userTag)]
  `
});

//ArviS#0011
bot.command({
  name: "i",
  code: `$title[Asistan | İstatistikler]
  $description[
  <a:asagiok:997610182836228157>・*__Kullanılan RAM__* 
  > **%$ram** MB
  
  <a:asagiok:997610182836228157>・*__CPU Durumu__* 
  > **%$cpu**
  
  <a:asagiok:997610182836228157>・*__Botun Gecikme Süresi__* 
  > **$ping** MS
  ]
  $color[#2f3136]
  $footer[Komutu Kullanan ($userTag)]
  `,
});

//ArviS#0011
bot.command({
  name: "trv",
  code: `$description[<@$mentioned[1]>,<@$mentioned[2]>,<@$mentioned[3]>,<@$mentioned[4]>,<@$mentioned[5]>,<@$mentioned[6]>,<@$mentioned[7]>,<@$mentioned[8]>,<@$mentioned[9]>,<@$mentioned[10]>]
  $giveRole[$mentioned[10];991329259157200976]
  $giveRole[$mentioned[9];991329259157200976]
  $giveRole[$mentioned[8];991329259157200976]
  $giveRole[$mentioned[7];991329259157200976]
  $giveRole[$mentioned[6];991329259157200976]
  $giveRole[$mentioned[5];991329259157200976]
  $giveRole[$mentioned[4];991329259157200976]
  $giveRole[$mentioned[3];991329259157200976]
  $giveRole[$mentioned[2];991329259157200976]
  $giveRole[$mentioned[1];991329259157200976]
  $onlyForIDs[379179073382907908;Bu Botun Sahbi Değilsin]//ArviS#0011
  `,
});
























//ArviS#0011