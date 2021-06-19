const Discord = require('discord.js')
const MongoClient= require("mongodb").MongoClient;
const uri ="mongodb+srv://aurumdb:Fire7777@cluster0.ydrmi.mongodb.net/aurumdata?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
client.setMaxListeners(10000)
const players=require('./players.json')
module.exports={
    run:async (message,args)=>{
        message.channel.send(players["Lev"].price)
        let name=message.author.username
        let id=message.author.id
        date=Date.now()
        await client.connect()
        let database=client.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:message.author.id})
        if(!user)return message.channel.send('<@'+message.author.id+'>'+' ,veuillez vous inscrire avec la commande '+'**'+'!start' +'**')
        let mes=message.content.split(' ')
        let art=mes[2]
        switch (art){
            case 'Lev':
        message.channel.send('Son prix est: '+players["Lev"].price)
        break;
        default:
            message.channel.send(' Sélectionnez le jouer à vendre.')
        }

    },
    name:'sell'
}