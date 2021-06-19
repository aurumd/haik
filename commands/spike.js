const Discord = require('discord.js')
const MongoClient= require("mongodb").MongoClient;
const uri ="mongodb+srv://aurumdb:Fire7777@cluster0.ydrmi.mongodb.net/aurumdata?retryWrites=true&w=majority"

module.exports={
    run:async (message,args)=>{
        let name=message.author.username
        let id=message.author.id
        date=Date.now()
        const clientan = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            clientan.setMaxListeners(10000)
        try{
        await clientan.connect()
        let database=clientan.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:message.author.id})
        if(!user)return message.channel.send('<@'+message.author.id+'>'+' ,veuillez vous inscrire avec la commande '+'**'+'!start' +'**')
        let l= user.timersp +1800000
        let c=l-date
        if(id=="622016189320658945")c=0;
        let d=date-l+1800000
        let hour=Math.ceil((c/3600000)-1)
        let min=Math.ceil((c/60000)-(hour*60)-1)
        let sec=Math.ceil((c/1000)-(hour*3600)-(min*60)-1)
        
            let sp=Math.random()*100
        if(c!=0)return message.channel.send('Vous avez déja spike. Veuillez revenir dans '+min+' minutes et '+sec+' secondes.')
        if(sp<50){
            await noixrom.updateOne(
                { ide:id },
                
                {$inc: {money: 300}}
            );
            let kp='https://cdn.discordapp.com/attachments/846820215706222612/850803355504214046/d5156657b9a72fa791a83264a1bbd670.png'
            let oz='https://cdn.discordapp.com/attachments/846820215706222612/850803900512469042/unknown.png'
            let ut='https://cdn.discordapp.com/attachments/846820215706222612/850805717980282890/lmao2.png'
            let ze=Math.random()*100
            if(ze<33.3){let image=kp;message.channel.send(new Discord.MessageEmbed()
                .setTitle('             🔥🔥🔥           ')
                .setDescription('**'+ name + '**'+' ,beau point tu remportes 300 yens🙂')
                .setColor('BLUE')
                .setImage(image))}
            else if (ze>66.6){let image=oz; message.channel.send(new Discord.MessageEmbed()
                .setTitle('             🔥🔥🔥           ')
                .setDescription('**'+ name + '**'+' ,beau point tu remportes 300 yens🙂')
                .setColor('BLUE')
                .setImage(image))}
            else {let image=ut;message.channel.send(new Discord.MessageEmbed()
                .setTitle('             🔥🔥🔥           ')
                .setDescription('**'+ name + '**'+' ,beau point tu remportes 300 yens🙂')
                .setColor('BLUE')
                .setImage(image))}
           
            
            
        }
        else if(sp>=50)if(sp<55){
            await noixrom.updateOne(
                { ide: id },
                
                {$inc: {money: 1000}}
            );
            let k='https://cdn.discordapp.com/attachments/846820215706222612/850803636108132372/tumblr_pdlvt0Wd2n1rol9b8_540.png'
            let o='https://cdn.discordapp.com/attachments/846820215706222612/850802260522303568/tumblr_inline_oo08uuWkyj1s2rtdp_1280.png'
            let u='https://cdn.discordapp.com/attachments/846820215706222612/850802927630024744/74b4f025673d07128e53d44c8c0f4706307ae179_hq.png'
            let za=Math.random()*100
            if(za<33.3){let image=k; message.channel.send(new Discord.MessageEmbed()
                .setTitle('             💯💯💯          ')
                .setDescription('**'+ name + '**'+' WOW, quel spike incroyable, tu gagnes 1000 yens bg😎')
                .setColor('YELLOW')
                .setImage(image))}
            else if (za>66.6){let image=o; message.channel.send(new Discord.MessageEmbed()
                .setTitle('             💯💯💯          ')
                .setDescription('**'+ name + '**'+' WOW, quel spike incroyable, tu gagnes 1000 yens bg😎')
                .setColor('YELLOW')
                .setImage(image))}
            else {let image=u; message.channel.send(new Discord.MessageEmbed()
                .setTitle('             💯💯💯          ')
                .setDescription('**'+ name + '**'+' WOW, quel spike incroyable, tu gagnes 1000 yens bg😎')
                .setColor('YELLOW')
                .setImage(image))}
          
           
            
        
        
            await noixrom.updateOne(
                { ide: id },
                
                {$inc: {money: -200}}
            );
            let ki='https://cdn.discordapp.com/attachments/846820215706222612/850802313215344670/latest.png'
            let ou='https://cdn.discordapp.com/attachments/846820215706222612/851095751189594122/hqdefault.png'
            let up='https://cdn.discordapp.com/attachments/846820215706222612/850804649619357716/tumblr_inline_oo08v4lE111s2rtdp_1280.png'
            let z=Math.random()*100
            if(z<33.3){let image=ki;message.channel.send(new Discord.MessageEmbed()
                .setTitle('             🤡🤡🤡          ')
                .setDescription('**'+ name + '**'+', t\'as raté ton spike loser, tu perds 200 yens🙁')
                .setColor('RED')
                .setImage(image))}
            else if (z>66.6){let image=ou;message.channel.send(new Discord.MessageEmbed()
                .setTitle('             🤡🤡🤡          ')
                .setDescription('**'+ name + '**'+', t\'as raté ton spike loser, tu perds 200 yens🙁')
                .setColor('RED')
                .setImage(image))}
            else {let image=up; message.channel.send(new Discord.MessageEmbed()
                .setTitle('             🤡🤡🤡          ')
                .setDescription('**'+ name + '**'+', t\'as raté ton spike loser, tu perds 200 yens🙁')
                .setColor('RED')
                .setImage(image)
        )}
            
            
            
        
            await noixrom.updateOne(
                { ide: id },
                
                {$inc: {timersp: d}}
            );
        }}finally{await clientan.close()}
   

    },
    name:'spike'
}