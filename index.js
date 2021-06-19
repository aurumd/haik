const Discord=require('discord.js'),
Client= new Discord.Client({
    fetchAllMembers: true
}),
config=require('./config.json'),
fs=require('fs')

Client.login(process.env.TOKEN)
Client.commands=new Discord.Collection()

fs.readdir('./commands',(err, files)=>{
    if(err) throw err
    files.forEach(file=>{
        if (!file.endsWith('.js')) return
        const command=require(`./commands/${file}`)
        Client.commands.set(command.name, command)
    })
})


Client.on('message',message=>{
    if (message.type!=='DEFAULT' || message.author.bot)return
    const args=message.content.split(' ')
    const commandName=args.shift().trim().toLowerCase()
    if(!commandName.startsWith(config.prefix))return
    const command=Client.commands.get(commandName.slice(config.prefix.length))
    if (!command)return
    command.run(message,args, Client)
})
