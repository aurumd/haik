const Discord = require('discord.js')
const MongoClient= require("mongodb").MongoClient;
const uri ="mongodb+srv://aurumdb:Fire7777@cluster0.ydrmi.mongodb.net/aurumdata?retryWrites=true&w=majority"

module.exports={
    run:async (message,args)=>{
        let name=message.author.username
        let id=message.author.id
        date=Date.now()
        const clientaner = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            clientaner.setMaxListeners(10000)
        try{
        await clientaner.connect()
        let database=clientaner.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:message.author.id})
        if(!user)return message.channel.send('<@'+message.author.id+'>'+' ,veuillez vous inscrire avec la commande '+'**'+'!start' +'**')
        let m=user.money
        message.channel.send('**'+name +'**'+', vous possédez actuellement '+'**'+m+'**'+' yens.')

        }finally{await clientaner.close()}},
        name:'money'
    }
