const Discord = require('discord.js')
const MongoClient= require("mongodb").MongoClient;
const uri ="mongodb+srv://aurumdb:Fire7777@cluster0.ydrmi.mongodb.net/aurumdata?retryWrites=true&w=majority"

module.exports={
    run:async (message,args)=>{
        let name=message.author.username
        let id=message.author.id
        date=Date.now()
        const clientane = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            clientane.setMaxListeners(10000)
        try{
        await clientane.connect()
        let database=clientane.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:message.author.id})
        if(!user)return message.channel.send('<@'+message.author.id+'>'+' ,veuillez vous inscrire avec la commande '+'**'+'!start' +'**')
       
            let team=user.team
            let t=Object.entries(team).toString()
            let ji=t.split(',')
           console.log(ji[8])
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('YOUR TEAM')
            .setColor('BLUE')
            .setFooter(name,)
            .setDescription(Object.entries(team)))
        

            

        }finally{await clientane.close()}},
        name:'team'
    }

    