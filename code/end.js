module.exports = {
    config: {
        name: "end",
        description: "Ends a giveaway.",
        usage: "",
        category: "Giveaways",
        accessableby: "Admins",
        aliases: [], // To add custom aliases just type ["alias1", "alias2"].
    },
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send(':boom: Necesitas tener el permiso \`MANAGE_MESSAGES\` para poner fin a los sorteos.');
        }

        if (!args[0]) {
            return message.channel.send(':boom: ¡Oh, no pude encontrar ese mensaje! ¡Intentar otra vez!');
        }

        let giveaway =
            client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
            client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if (!giveaway) {
            return message.channel.send(':boom: Hmm... Parece que no puedo encontrar un regalo para `' + args.join(' ') + '`.');
        }
        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
            .then(() => {
                message.channel.send('El sorteo terminará en menos de ' + (client.giveawaysManager.options.updateCountdownEvery / 1000) + ' segundos...');
            })
            .catch((e) => {
                if (e.startsWith(`Sorteo con ID de mensaje ${giveaway.messageID} ya ha terminado.`)) {

                    message.channel.send('This giveaway has already ended!');

                } else {
                    console.error(e);
                    message.channel.send('Ocurrió un error...');
                }
            });
    },
}
