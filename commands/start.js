module.exports={
    run:async (message,args)=>{
        const MongoClient= require("mongodb").MongoClient;
        const uri ="mongodb+srv://aurumdb:Fire7777@cluster0.ydrmi.mongodb.net/aurumdata?retryWrites=true&w=majority"
        const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        client.setMaxListeners(10000)
        await client.connect()
        let database=client.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:message.author.id})
        if(user)return message.channel.send('<@'+message.author.id+'>'+' ,vous êtes déjà inscrit.')
        let prof={name: message.author.username,ide: message.author.id,money:0,same:'delta',
        timersp:0,timerrand:0,timersrv:0,
        team:{}
        }
        await noixrom.insertOne(prof)
        message.channel.send(' Vous avez été inscrit avec succès.')
    },
    name:'start'

 
}