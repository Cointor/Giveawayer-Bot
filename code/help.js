const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
module.exports = {
  config: {
    name: "help",
    description: "Obtenga una lista de comandos de bot.",
    usage: "help",
    category: "Main",
    accessableby: "Everyone",
    aliases: [], 
  },
  run: async (client, message, args) => {

    if (message.guild) {
      message.channel.send('\<:IDK:872049168271704094> Bot Open Source, Aun en fase BETA ');
      message.delete();
      let embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTitle('Help | Beta V 0.1.0')
        .setColor('18704b')
        .setDescription("Un bot Giveawayer en Español, Creado por [**`Cointor#1761`**](https://discord.gg/j3PVuJHXfS) \<:Developer:872635889933770792>")
        .addField(`🎉 ${config["Bot_Info"].prefix}start [canal ] [duración] [ganador/es] [precio ]`, '**El canal tiene que ser visible para el bot del sorteo.**\nLa duración se indica en un número y una variable de tiempo.\nLos ganadores se indican en número positivo.\nEl premio puede ser cualquier cosa excepto texto en blanco.')
        
        .addField('👥 Ejemplo:', `\<:Mamado:872049158784172103>  \`${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro\` \n➡️ Crea un sorteo de \`10 minutos\` con \`1\` ganador y\n\`$9.99 Nitro\` como premio en \`#general\`.`)
        .addField(`\<:Serio:872049167768379412>  ${config["Bot_Info"].prefix}end [message-id]`, 'El ID del mensaje debe ser el ** ID ** del mensaje del sorteo.\n**¡No es el enlace!**')
        .addField('👥 Ejemplo:', `<:Mamado:872049158784172103> \`${config["Bot_Info"].prefix}end 892678258946659587\` \n➡️ Finaliza el sorteo con el ID del mensaje \`892678258946659587\`.`)
        .addField("\<:Enlace:872772812337713163> Invite:", "[**Enlace de invitación**](https://discord.com/oauth2/authorize?client_id=876561936085581854&scope=bot&permissions=2148002881)")
        
      message.channel.send(embed);
    }
    
