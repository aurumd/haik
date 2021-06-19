const Discord = require('discord.js')
module.exports={
    run:async (message,args)=>{
        let prefix='++'
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('HELP COMMANDS FOR BEGINNERS')
        .setColor('BLUE')
        .addField('START','**'+prefix+'start'+'**'+': pour vous inscrire.', true)
        .addField('RANDOM','**'+prefix+'random'+'**'+': pour obtenir un joueur toutes les heures',true)
        .addField('SPIKE','**'+prefix+'spike'+'**'+':pour tenter de marquer et gagner de l\'argent toutes les 30 minutes.', true)
        .addField('MONEY','**'+prefix+'money'+'**'+': pour voir votre argent(Aurum c le plus riche)',true)
        .addField('TEAM','**'+prefix+'team'+'**'+': pour voir vos joueurs.', true)
        .addField('SELL','**'+prefix+'sell'+'**'+': pour vendre un joueur.', true)
        )

    },
    name:'help'
}