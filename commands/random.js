const Discord = require('discord.js')
const MongoClient= require("mongodb").MongoClient;
const uri ="mongodb+srv://aurumdb:Fire7777@cluster0.ydrmi.mongodb.net/aurumdata?retryWrites=true&w=majority"

const Lev={
    name:'Lev Haiba',
    rank: ' [C]',
    price: 1000,
    image:'https://cdn.discordapp.com/attachments/851438978833317898/852649919025381426/222817.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png'
}
const Yamaguchi={
    name: 'Tadashi Yamaguchi',
    rank: ' [C]',
    price: 1000,
    image:'https://cdn.discordapp.com/attachments/850116642801188914/852652660884766750/d2b8ad52ee7b151593fbd6b99fc68444.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'

}
const Hinata={
    name: 'Shōyō Hinata',
    rank: ' [C]',
    price: 1000,
    image:'https://cdn.discordapp.com/attachments/850116231411531809/852651004171780136/latest.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'
}
const Teshiro={
    name:'Tamahiko Teshiro',
    rank: ' [B+]',
    price: 2500,
    image:'https://cdn.discordapp.com/attachments/852648620083118100/852650069521334372/254.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png'
}
const Shibayama={
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png',
    image:'https://cdn.discordapp.com/attachments/852648638437130271/852650152237465640/308.png',
    name:'Yūki Shibayama',
    rank: ' [B+]',
    price: 2500
}
const Onagawa={
        name: 'Taro Onagawa',
        rank: ' [B+]',
        price: 2500,
        description:'Center, 1m, [A]',
        color:'BLUE',
        image: 'https://cdn.discordapp.com/attachments/851438566000820255/852647105315340328/129.png',
    Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Sakunami={
    name: 'Kōsuke Sakunami',
    description:'Libéro, 1m, [B+]',
    color:'BLUE',
    rank: ' [B+]',
    price: 2500,
image:'https://cdn.discordapp.com/attachments/851438664952446986/852647432559001640/latest.png',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Koganegawa={
    name: 'Kanji Koganegawa',
    description:'Setter, 1m, [B+]',
    color:'BLUE',
    rank: ' [B+]',
    price: 2500,
image:'https://cdn.discordapp.com/attachments/851438487517659157/852646979984556114/250.png',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Yahaba={
    name: 'Shigeru Yahaba',
    rank:' [B]',
    price: 2500,
    description:'Setter, 1m81, [B]',
    color:'BLUE',
    field:'Yahaba est une personne plutôt calme et insouciante, mais qui peut être violente quand la situation l\'impose, comme par exemple quand il a engueulé Kyōtani pour avoir séché l\'entrainement et ne pas avoir respecté les terminales. S\'affirmer en temps que passeur n\'est pas sa priorité, il préfère encourager ses aînés.',
image:'https://media.discordapp.net/attachments/850441966433206394/850664978574868480/256.png',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Kinoshita={
    name:'Hisashi Kinoshita',
    price: 2000,
    rank: ' [B-]',
    image:'https://cdn.discordapp.com/attachments/850116560034463774/852652995468460042/tumblr_okpw8efI631vban4co5_500.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'
}
const Inuoka={
    name: 'Sō Inuoka',
    price: 2000,
    rank: ' [B-]',
    image: 'https://cdn.discordapp.com/attachments/851438932495302658/852649618919653456/latest.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png'
}
const Fukiage={
    name: 'Jingo Fukiage',
    rank: ' [B-]',
    price: 2000,
    image:'https://cdn.discordapp.com/attachments/851438723715039232/852648043530682418/unknown.png',
    Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473'
}
const Obara={
    name:'Yutaka Obara',
    rank: ' [B-]',
    price: 2000,
    image: 'https://cdn.discordapp.com/attachments/851438754345910284/852648352130793522/unknown.png',
    Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Narita={
    name: 'Kazuhito Narita',
    rank: ' [B-]',
    price: 2000,
    image: 'https://cdn.discordapp.com/attachments/852652553966452786/852653269892857876/df88eff1db65310fd32086281b9e9bf5.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'
}
const Ennoshita  ={
    name:'Chikara Ennoshita',
    rank: ' [B]',
    price: 2500,
    image:'https://cdn.discordapp.com/attachments/852652510904057856/852653065319350302/latest.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png',
}
const Sasaya={
    name: 'Takehito Sasaya',
    description:'Center, 1m, [B+]',
    color:'BLUE',
    rank: ' [B+]',
    price: 3000,
image:'https://cdn.discordapp.com/attachments/851438643205767178/852647536166043698/158.png',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Moniwa={
    name: 'Kaname Moniwa',
    description:'Setter, 1m, [B+]',
    color:'BLUE',
   rank: ' [B+]',
   price: 3000,
image:'https://cdn.discordapp.com/attachments/851438584241586176/852647198637162596/latest.png',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Watari={
    name: 'Shinji Watari',
    rank: ' [B+]',
    price: 3000,
    description:'Libero, 1m71, [B+]',
    color:'BLUE',
    field:'Watari parait aimer le challenge, souriant quand il voit Nishinoya refaire la même technique que lui. Avant de devenir libéro, il était passeur, expliquant certaines de ses techniques comme faire une passe depuis le fond du terrain.',
image:'https://media.discordapp.net/attachments/850441927181467680/850666244276879390/latest.png',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Kindaichi={
    name: 'Yūtarō Kindaichi',
    rank: ' [B]',
    price: 3000,
    description:'Center, 1m89, [B+]',
    color:'BLUE',
    field:'Kindaichi est une personne de nature généralement bonne et agréable et qui s\'entend bien avec ses coéquipiers. Bien qu\'il s\'adapte aux passes du passeur, il n\'hésitera pas à donner son opinion si quelque chose ne lui plait pas. Sa taille est son atout, lui permettant de franchir des blocks qui ne l\'atteignent pas.',
image:'https://media.discordapp.net/attachments/850441711045181471/850663306846535700/Yuta.png',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Hanamaki={
    name: 'Takahiro Hanamaki',
    price: 3000,
    rank: ' [B+]',
    description:'Spiker, 1m84, [B+]',
    color:'BLUE',
    field:'Hanamaki est une personne calme et sereine, il est observateur et perspicace, capable de comprendre le rythme du jeu rapidement. Comme tout Seijoh, c\'est un joueur bon dans tout, on le voit notamment capable de faire des passes, mais il gagne surtout des points grâce à ses feintes.',
image:'https://media.discordapp.net/attachments/850441830767263745/850666736226533406/tumblr_inline_p8xej1Epez1tpaxiv_500.png',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Sugawara={
    name: 'Kōshi Sugawara',
    rank: ' [B+]',
    price: 3000,
    image:'https://cdn.discordapp.com/attachments/850116428110626886/852652810909646908/unknown.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'
}
const Yamagata={
    name: 'Hayato Yamagata',
    rank: ' [B+]',
    price: 3000,
    description:'Libéro, 1m74, [B+]',
    color:'PURPLE',
    field:'Yamagata est un libéro très sérieux mais avec une ardeur et une envie de vaincre assez voyantes. Il a un caractère proche de celui de Nishinoya, ce qui fait de lui un adversaire assez redoutable à passer.',
    image:'https://cdn.discordapp.com/attachments/847812256162775040/850107606445064263/Yamagata.jpg',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png',
}

const Kai={
    name:'Nobuyuki Kai',
    rank: ' [A-]',
    price: 5000,
    image:'https://cdn.discordapp.com/attachments/852648577133969418/852650002782486548/275.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png',
}
const Fukunaga={
    name:'Shouhei Fukunaga',
    rank: ' [A-]',
    price: 5000,
    image:'https://cdn.discordapp.com/attachments/851438881442234399/852649536823230538/unknown.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png',
}
const Tsukki={
    name: 'Kei Tsukkishima(début)',
    rank: '[ A-]',
    price: 5000,
    image:'https://cdn.discordapp.com/attachments/847252582422282261/852106696938487808/unknown.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'
}
const Kunimi={
    name: 'Akira Kunimi',
    description:'Spiker, 1m83, [A-]',
    rank: '[ A-]',
    price: 5000,
    color:'BLUE',
    field:'Kunimi est une personne silencieuse et indifférente, mais c\'est surtout parce qu\'il a la flemme. Bien qu\'il sèche beaucoup les entraînements et ne fasse pas d\'effort durant les matchs , sa conservation d\'énergie et sa nature calme forme un adversaire redoutable en fin de jeu.' ,
image:'https://media.discordapp.net/attachments/850441583673475092/850656900940562463/e3968155a6da5b107ad9b01e694e8a3a.png',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Yamamoto={
    name: 'Taketora Yamamoto(début)',
    description:'Center, 1m88, [A]',
    raank: ' [A]',
    price: 6500,
    color:'RED',
    field:'Yamamoto est l\'ace de l\'équipe des félins, comme son statut l\'indique c\'est offensivement le meilleur joueur de Nekoma. Mais venant de Karasuno, on peut s\'attendre à ce que Yamamoto soit un bon défenseur, et c\'est le cas.',
    fieldb:'Mentalement, il paraît aussi attardé que Tanaka et là aussi c\'est le cas. Mais malgré ça, son équipe lui fait entièrement lorsqu\'il est temps de marquer des points sur des spikes difficilles.',
image:'https://cdn.discordapp.com/attachments/850141284194320434/852103245043990548/AYO.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png',
}
const Kamasaki={
    name: 'Yasushi Kamasaki',
    description:'Center, 1m, [A]',
    color:'BLUE',
   price: 6500,
   rank: ' [A]',
image:'https://cdn.discordapp.com/attachments/851438613626355752/852647618374533130/260.png',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Futakuchi={
    name: 'Kenji Futakuchi',
    rank: ' [A]',
    price: 6500,
    description:'Spiker, 1m, [A]',
    color:'BLUE',
image:'https://cdn.discordapp.com/attachments/851438412685901834/852646577355882536/193135.png',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Kenma={
    name: 'Kozume Kenma(début)',
    description:'Setter, 1m69, [A+]',
    color:'RED',
    rank: ' [A]',
    price: 6500,
    field:'Son hyper sensibilité et son intelligence plus qu\'accrue sont la clé de Nekoma. Il est le cerveau et le coeur de son équipe, qui lui fait entièrement confiance',
    fieldb:'Son style de jeu est basé sur sa technique mais aussi sa force et son endurance qui font de lui un excellent blocker. Il accorde beaucoup d\'importance à la "Guerre des Poubelles". ',
image:'https://cdn.discordapp.com/attachments/850141172986937374/852649130592829520/182065.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png',
}
const Tanaka={
    name: 'Ryosuke Tanaka',
    rank: ' [A]',
    price: 6500,
    image: 'https://cdn.discordapp.com/attachments/850116123390246993/852651207831060500/124c62f0d70e2696d420fd42c1bece8d.png',
    Thumbnail: 'https://cdn.discordapp.com/attachments/847812372336082954/852652070041288734/tumblr_pe56pl3r3O1sx8ybdo7_r1_400.png'
}
const Daichi={
    image: 'https://cdn.discordapp.com/attachments/850116363434983444/852650876370681947/latest.png',
    name: 'Daichi Sawamura',
    rank: ' [A]',
    price: 6500,
    Thumbnail: 'https://cdn.discordapp.com/attachments/847812372336082954/852652070041288734/tumblr_pe56pl3r3O1sx8ybdo7_r1_400.png'
}
const Semi={
    name: 'Eita Semi',
    rank: ' [A]',
    price: 6500,
    description:'Setter, 1m80, [A]',
    color:'PURPLE',
    field:'Semi est un joueur plutôt stoïque mais qui enfaîte est très compétitif surtout envers le 2e setter de l\'équipe',
    fieldb:'Etant donné qu\'il est très sérieux, son style de jeu reflète énormément sa personnalité, un jeu très mature, sans bavures qui permet le développement de tout le potentiel de son équipe.',
    image:'https://cdn.discordapp.com/attachments/847812277792669747/850104302881210388/Semi_Eita.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png',
}
const Goshiki={
    name: 'Tsutomu Goshiki',
    price: 6500,
    rank: ' [A]',
    description:'Spiker, 1m81, [A]',
    color:'PURPLE',
    field:'Goshiki est littéralement nommé "futur ace de Shiratori", un surnom qui se montre avec une pression énorme sur ses épaules, heureusement, il peut marcher sur les pas de son prédécesseur Ushijima et peut apprendre de lui serainement.',
    fieldb:'Bien qu\'il ait encore des lacunes dû à son manque d’expérience, Goshiki est néanmoins plus que talentueux, bénéficiant d\'une force qui sera dans le futur monstrueuse. ',
    image:'https://cdn.discordapp.com/attachments/847812313700237323/850109417789718548/Goshiki.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png',
}
const Reon={
    name: 'Reon Ôhira',
    rank : ' [A]',
    price: 6500,
    description:'Spiker, 1m82, [A]',
    color:'PURPLE',
    field:'Reon est le vice-capitaine de Shiratori. De ce fait, il est très sérieux et mature, il permet à son équipe de se calmer dans les moments de tension et est l\'épaule sur laquelle les plus faibles mentalement se reposent comme les 1ère années dont Goshiki.',
    image:'https://cdn.discordapp.com/attachments/850112359057063996/850113394627182614/unknown.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png',
}
const Matsukawa={
    name: 'Issei Matsukawa',
    rank: ' [A]',
    price: 6500,
    description:'Center, 1m87, [A]',
    color:'BLUE',
    field:' Bien que Matsukawa paraisse intimidant aux premiers abords à cause de sa taille et sa capacité à bloquer, il est, en réalité, le plus souvent entrain de rire avec ses camarades. Il a un sens du jeu incroyable lorsqu\'il bloque, il met la pression à son opposant le forcant à tirer la balle là où il veut. C\'est le style de block qu\'Hinata déteste le plus.',
image:'https://media.discordapp.net/attachments/850441744512319539/850666874722582549/35872a646d7aac8255bfce84bd801a6d9326cad1_00.png',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Iwaizumi={
    name: 'Hajime Iwaizumi',
    rank: ' [A]',
    price: 6500,
    description:'Spiker, 1m79, [A]',
    color:'BLUE',
    field:'Iwaizumi est un spiker et l’ace d’Aoba Josai. Fidèle à son statut, c’est souvent lui qui marque le point décisif durant un match. Malgré son caractère têtu il reste un coéquipier très fiable sur lequel les membres de l’équipe peuvent compter.',
    fieldb:'Ami d’enfance d’Oikawa Tooru, on le voit souvent entrain de rebooster ce dernier mais également, plus généralement, toute l’équipe. Son attitude a conduit certains membres de l\'équipe d\'Aoba Josai à le respecter encore plus que leur capitaine.',
image:'https://media.discordapp.net/attachments/850440726889365535/850441026019655736/EdtIehzUEAEIZYq.png?width=727&height=473',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Aone={
    name: 'Takanobu Aone',
    price: 7500,
    rank : ' [A+]',
    description:'Center, 1m92, [A+]',
    color:'BLUE',
image:'https://media.discordapp.net/attachments/851438394139344906/851442162666176532/2f3501c6a552b9c3303e917955b51b675ae5ecb2.png?width=332&height=473',
Thumbnail:'https://media.discordapp.net/attachments/851438394139344906/851442098204704778/image0.jpg?width=354&height=473',
}
const Kageyama={
    name: 'Tobio Kageyama',
    price: 7500,
    rank: ' [ A+]',
    image: 'https://cdn.discordapp.com/attachments/847812372336082954/852652070041288734/tumblr_pe56pl3r3O1sx8ybdo7_r1_400.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812372336082954/852651429792972840/48Cs3HFbwR2ao4FyojYk2BP4QIXLoEMzv9OkaCHzmO9uWMginuLOmyh9jeBaI3zQL9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz.png'
    
}
const Shirabu={
    name: 'Kenjirô Shirabu',
    price: 7500,
    description:'Setter, 1m75, [A+]',
    color:'PURPLE',
    field:'Malgré son manque d\'expérience qui lui coûte sa place de titulaire dans son équipe, il est indéniable que Shirabu est un setter êxtremement talentueux qui prendra sa place dans le 6 majeur de Shiratori Zawa.',
    image:'https://cdn.discordapp.com/attachments/850110490343768125/850111599025192980/Kenjiro_Shirabu.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png',
}
const Tendo={
    name: 'Satori Tendô',
    price: 7500,
    rank: ' [A+]',
    description:'Center, 1m87,7, [A+]',
    color:'PURPLE',
    field:'Tendô n\'est pas forcément le joueur exemplaire par excellence, néanmoins il est très problématique pour ses adversaires grâce à son style plus qu\'original. En effet, Tendô base entièrement son jeu sur son intuition, ce qui lui a valu le surnom de "Guess Monster"',
    fieldb:'Ce style de jeu est un peu comme une roulette russe, étant donné que c\'est purement sur de l\'instinct, il lui arrive ~souvent de se tromper. Mais vu son comportement peu orthodoxe, les passeurs qui ont pour défi de le tromper sont au dépourvu.',
    image:'https://cdn.discordapp.com/attachments/847812190684839956/850092096223707156/scary_af.jpg',
    Thumbnail:'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png',
}
const Kyoutani={
    name: 'Kentarō Kyōtani',
    price: 7500,
    description:'Spiker, 1m78, [A+]',
    color:'BLUE',
    field:'Kyoutani est le meilleur de tous les premières d\'Aoba Josai, mais son attitude violente cause une difficulté à s\'entendre avec les autres joueurs. Il est incroyablement fort et ne peut que frapper la balle avec toute sa force, autrement il n\'est pas satisfait.',
    fieldb:'Il a les muscles du dos et des abdominaux exceptionnels, lui donnant une force de saut incroyable, il tire également des cut shots puissants, difficile à rattraper. Il joue dangereusement peu importe le moment, crucial ou non, on le voit souvent en train de pousser ses coéquipiers pour frapper la balle.',
image:'https://media.discordapp.net/attachments/850441898669768785/850666033719017502/aed4dcc389d5b97858e4f372c9476fa5.png?width=378&height=474',
Thumbnail:'https://media.discordapp.net/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Ushijima={
    name:'Wakatoshi Ushijima ',
    rank: ' [S++]',
    price: 10000,
    image: 'https://cdn.discordapp.com/attachments/847812105897508894/850089598113677343/USHIJI.jpg',
    Thumbnail: 'https://cdn.discordapp.com/attachments/847812105897508894/850089778086543400/unknown.png'
}
const Kuroo={
    name: 'Tetsurou Kuroo(début)',
    price: 8500,
    description:'Center, 1m87,7, [S]',
    color:'BLACK',
    field:'Surnommé,  le "capitaine intriguant", Kuroo est le capitaine de Nekoma. Il possède un grand sens de l\'observation. Malgré qu\'il soit sympathique, il est d\'un genre moqueur.',
    fieldb:'Son style de jeu est basé sur sa technique mais aussi sa force et son endurance qui font de lui un excellent bloqueur. Il accorde beaucoup d\'importance à la "Guerre des Poubelles". ',
    image:'https://cdn.discordapp.com/attachments/847267409492049920/850117336471699516/Kuroo.jpg',
    Thumbnail:'https://cdn.discordapp.com/attachments/847267409492049920/850118140883894283/unknown.png',
}
const Bokuto={
    name:'Kôtarô Bokuto(normal form)',
    rank:' [S+]',
    price: 5000,
    description:'Spiker, 1m86, [S+]',
    color:'YELLOW',
    field:'Sa force brute et sa maîtrise parfaite des lignes sont les raisons pour lesquels il fait partit des 5 meilleurs spiker du Japon',
    fieldb:'Son tempérament est malheureusement la raison pour laquelle il n\'est qu\'à la 4e place. Bipolaire comme pas 2, il fait vivre une torture à ses coéquipiers dans une mauvaise passe',
    image:'https://cdn.discordapp.com/attachments/847234060693536769/847238874278789140/BOKUTOOOOO.jpg',
    Thumbnail:'https://cdn.discordapp.com/attachments/847234060693536769/847239223425105933/fukurodanix.jpg',
}
const Oikawa={
    name:'Tooru Oikawa(début d\'histoire)',
    rank:' [S]',
    price: 8500,
    description:'Setter, 1m86, [S]',
    color:'CYAN',
    field:'Oikawa est un setter des plus complet, couplé d\'un service plus que terrifiant, il est un adversaire physiquement dur à jouer.',
    fieldb:'Et pourtant,c\'est bien son mental qui prime sur le reste. Doté d\'un leadership faisant ressortir le meilleur de tout ses coéquipiers et d\'une compréhension assidue des comportements, il a la capacité de contrôler n\'importe quelle situation',
    image:'https://cdn.discordapp.com/attachments/847260922112245761/847263741917790227/Oikawa.jpg',
    Thumbnail:'https://cdn.discordapp.com/attachments/847260922112245761/847263672967626813/Aoba_Josaix.png',
}
const Nishi={
    name: 'Yû Nishinoya(To The Top)',
    rank:' [S]',
    price: 5000,
    description:'Libéro, 1m59, [S]',
    color:'ORANGE',
    field:'Surnommé le "dieu de la défense" de son équipe, Noya utilise à perfection ses réflexes mêlés à son intuition proche d\'un 6e sens pour permettre à Karasuno d\'être la dernière debout.',
    fieldb:'Nishinoya est constamment à la recherche de plus fort que lui pour avoir le matchup le plus excitant possible.',
    image:'https://media.discordapp.net/attachments/847252609781727263/847254552335614022/Nishinoya_To_The_Top.jpg',
    Thumbnail:'https://cdn.discordapp.com/attachments/847219117929136158/847224735837454396/karasunox.jpg',
}
const Atsumu={
    name:'Atsumu Miya',
    rank:' [S++]',
    price: 5000,
    description:'Setter, 1m83, [S++]',
    color:'BLACK',
    field:'Son talent n\'a d\'égal que son sentiment de liberté lorsqu\'il joue. Grâce à son frère jumeau et à son équipe plus que complète, Atsumu a toute la place nécessaire pour faire briller son niveau digne des meilleurs setters du monde entier',
    fieldb:'Sa voracité accrue pour l\'adversité et la conquête de nouvelles hauteurs font parties des raisons pour lesquelles on le catégorise comme un "génie"',
    image:'https://media.discordapp.net/attachments/847252511278891078/847257415161872434/Miya_Atsumu.jpg?width=524&height=473',
    Thumbnail:'https://cdn.discordapp.com/attachments/847252511278891078/848648329973071902/inarizakix.jpg' ,
}
const Asahi={
    name: 'Azumane Asahi(To The Top)',
    price: 7500,
    rank:' [A+]',
    description:'Spiker, 1m85, [A+]',
    color:'ORANGE',
    field:'Asahi est la "power house" de Karasuno, ses spikes puissants et son allure d\'adulte intimident tout ses adversaires (et coéquipiers)',
    fieldb:'Il porte  bien son surnom d\'"Ace" car son équipe pourra toujours compter sur lui pour le dernier spike décisif',
    image:'https://cdn.discordapp.com/attachments/847267429071323176/847807571222200361/Asahi_s4.png',
    Thumbnail:'https://cdn.discordapp.com/attachments/847219117929136158/847224735837454396/karasunox.jpg',
}

const players=require('./players.json')
module.exports={
    run:async (message,args)=>{
        let name=message.author.username
        let id=message.author.id
        date=Date.now()
        const clientye = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            clientye.setMaxListeners(10000)
        
        try{
        await clientye.connect()
        let database=clientye.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:id})
        if(!user)return message.channel.send('<@'+message.author.id+'>'+' ,veuillez vous inscrire avec la commande '+'**'+'++start' +'**')
        let l=user.timerrand+3600000
        let c=l-date
        console.log(user.timerrand+'  '+c)
        if(id=='622016189320658945')c=0;
        let d=date-l+3600000
        let hour=Math.ceil((c/3600000)-1)
        let min=Math.ceil((c/60000)-(hour*60)-1)
        let sec=Math.ceil((c/1000)-(hour*3600)-(min*60)-1)
        if(c>0)return  message.channel.send('Vous avez déjà obtenu un joueur récemment, veuillez revenir dans : ' + min +' minutes et '+ sec + ' secondes.')
        const chou=Math.random()*100
        const sp=Math.random()*100
        const clientoti = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        clientoti.setMaxListeners(10000)
        if(chou<=5){
          recrut(Ushijima,"team.Wakatoshi Ushijima")
        }
        else if(5<chou&&chou<=13 &&sp<=50){
            recrut(Kuroo,"team.Tetsurou Kuroo (début)")
        }
        else if(5<chou&&chou<=13){
            recrut(Oikawa,'team.Tooru Oikawa')
        }
        else if(13<chou&& chou<=40 && sp<=5&&sp<10){
            recrut(Kyoutani,'team.Kentarō Kyōtani)')
        }
        else if(13<chou&& chou<=40 && sp<=10&&sp<14){
            recrut(Tendo,'team.Satori Tendô')
        }
        else if(13<chou&& chou<=40 && sp<=14&&sp<19){
            recrut(Shirabu,'team.Kenjirô Shirabu')
        }
        else if(13<chou&& chou<=40 && sp<=19 &&sp<24){
            recrut(Nishi,'team.Yû Nishinoya  (To The Top)')
        }
        else if(13<chou&& chou<=40 && sp<=24&&sp<28){
            recrut(Asahi,'team.Azumane Asahi  (To The Top)')
        }
        else if(13<chou&& chou<=40 && sp<=28&&sp<32){
            recrut(Kageyama,'team.Tobio Kageyama')
        }
        else if(13<chou&& chou<=40 && sp<=32&&sp<36){
            recrut(Aone,'team.Takanobu Aone')
        }
        else if(13<chou&& chou<=40 && sp<=36&&sp<40){
            recrut(Iwaizumi,'team.Hajime Iwaizumi')
        }
        else if(13<chou&& chou<=40 && sp<=40&&sp<44){
            recrut(Iwaizumi,'team.Hajime Iwaizumi')
        }
        else if(13<chou&& chou<=40 && sp<44&&sp<48){
            recrut(Matsukawa,'team.Issei Matsukawa')
        }
        else if(13<chou&& chou<=40 && sp<=48&&sp<52){
            recrut(Reon,'team.Reon Ôhira')
        }
        else if(13<chou&& chou<=40 && sp<=52&&sp<56){
            recrut(Goshiki,'team.Tsutomu Goshiki')
        }
        else if(13<chou&& chou<=40 && sp<=56&&sp<60){
            recrut(Semi,'team.Eita Semi')
        }
        else if(13<chou&& chou<=40 && sp<=60&&sp<64){
            recrut(Daichi,'team.Daichi Sawamura')
        }
        else if(13<chou&& chou<=40 && sp<=64&&sp<68){
            recrut(Tanaka,'team.Ryosuke Tanaka')
        }
        else if(13<chou&& chou<=40 && sp<=68&&sp<72){
            recrut(Kenma,'team.Kozume Kenma (début)')
        }
        else if(13<chou&& chou<=40 && sp<=72){
            recrut(Futakuchi,'team.Kenji Futakuchi')
        }
        else if(13<chou&& chou<=40 && sp<=76&&sp<80){
            recrut(Kamasaki,'team.Yasushi Kamasaki')
        }
        else if(13<chou&& chou<=40 && sp<=80&&sp<82){
            recrut(Yamamoto,'team.Taketora Yamamoto (début)')
        }
        else if(13<chou&& chou<=40 && sp<=82&&sp<86){
            recrut(Kunimi,'team.Akira Kunimi')
        }
        else if(13<chou&& chou<=40 && sp<=86&&sp<90){
            recrut(Tsukki,'team.Kei Tsukkishima(début)')
        }
        else if(13<chou&& chou<=40 && sp<=90&&sp<96){
            recrut(Kai,'team.Nobuyuki Kai')
        }
        else if(13<chou&& chou<=40 && sp<=96){
            
            recrut(Fukunaga,'team.Shouhei Fukunaga')
        }
        else if(40<chou && sp<=4&&sp<9){
            recrut(Yamagata,'team.Hayato Yamagata')
        }
        else if(40<chou&& sp<=9&&sp<13){
            recrut(Sugawara,'team.Kōshi Sugawara')
        }
        else if(40<chou && sp<=13&&sp<18){
            recrut(Kindaichi,'team.Yūtarō Kindaichi')
        }
        else if(40<chou && sp<=18&&sp<22){
            recrut(Watari,'team.Shinji Watari')
        }
        else if(40<chou && sp<=22&&sp<27){
            recrut(Moniwa,'team.Kaname Moniwa')
        }
        else if(40<chou && sp<=27&&sp<31){
            recrut(Sasaya,'team.Takehito Sasaya')
        }
        else if(40<chou && sp<=31&&sp<36){
            recrut(Ennoshita,'team.Chikara Ennoshita')
        }
        else if(40<chou && sp<=36&&sp<40){
            recrut(Hanamaki,'team.Takahiro Hanamaki')
        }
        else if(40<chou && sp<=40&&sp<45){
            recrut(Yahaba,'team.Shigeru Yahaba')
        }
        else if(40<chou && sp<=45&&sp<49){
            recrut(Koganegawa,'team.Kanji Koganegawa')
        }
        else if(40<chou && sp<=49&&sp<54){
            recrut(Sakunami,'team.Kōsuke Sakunami')
        }
        else if(40<chou && sp<=54&&sp<59){
            recrut(Onagawa,'team.Taro Onagawa')
        }
        else if(40<chou && sp<=59&&sp<64){
            recrut(Shibayama,'team.Yūki Shibayama')
        }
        else if(40<chou && sp<=64&&sp<68){
            recrut(Teshiro,'team.Tamahiko Teshiro')
        }
        else if(40<chou && sp<=68&&sp<73){
            recrut(Kinoshita,'team.Hisashi Kinoshita')
        }
        else if(40<chou && sp<=73&&sp<77){
            recrut(Narita,'team.Kazuhito Narita')
        }
        else if(40<chou && sp<=77&&sp<82){
            recrut(Obara,'team.Yutaka Obara')
        }
        else if(40<chou && sp<=82&&sp<86){
            recrut(Fukiage,'team.Jingo Fukiage')
        }
        else if(40<chou && sp<=86&&sp<91){
            recrut(Inuoka,'team.Sō Inuoka')
        }
        else if(40<chou && sp<=91&&sp<95){
            recrut(Hinata,'team.Shōyō Hinata')
        }
        else if(40<chou && sp<=95&&sp<97.5){
            recrut(Yamaguchi,'team.Tadashi Yamaguchi')
        }
        else if(40<chou && sp<=97.5){
            recrut(Lev,'team.Lev Haiba')
        }
        else {message.channel.send('ERROR: VEUILLEZ CONTACTER LE DIEU D\'HQ BOT ALIAS AURUMBG')}
        
        
        async function recrut(randy,a){
            let yay=await message.channel.send(new Discord.MessageEmbed()
            .setTitle('💴DIRECT OFFER💴')
            .setFooter(name,'https://cdn.discordapp.com/attachments/849686554628718643/851484084223082526/Sans_tie.png')
            .setDescription(' Le joueur '+ '**'+ randy.name+randy.rank+'**'+ ' souhaite rejoindre votre équipe. ')
            .setColor('GREEN')
            .addField('🕕TRANSACTION EN COURS🕕',' Pour que ' +'**'+randy.name+'**'+ ' rejoigne votre équipe, cochez ✅.'+'\n'+' Pour une revente rapide, cochez ⚡', true)
            .setAuthor('Kiyoko', )
            .setImage(randy.image)
            .setThumbnail(randy.Thumbnail)
            .setTimestamp()

        )
        const clientoi = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        clientoi.setMaxListeners(10000)
       
        yay.react('✅')
        yay.react('⚡')
        console.log(name)
        const filter = (reaction, user) => {
                                   
            return ['✅', '⚡'].includes(reaction.emoji.name) && user.id === id;
        };
        yay.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '✅') {
               
                async function saw(){
                    await clientoi.connect()
                let database=clientoi.db("sample_mflix");
                let noixrom=database.collection("noixrom");
                await noixrom.updateOne({ide:id},{$inc:{[a]:1}});
                message.channel.send(randy.name+ ' rejoint l\'effectif.');
                await noixrom.updateOne({ide:id},{$inc: {timerrand:d}})
                await clientoi.close();
            }
                saw().catch(console.dir)
            } else {     
                    async function sow(){
                        await clientoi.connect()
                    let database=clientoi.db("sample_mflix");
                    let noixrom=database.collection("noixrom");
                    await noixrom.updateOne({ide:id},{$inc:{money:randy.price}});
                    message.channel.send(randy.name+ ' a été vendu pour '+randy.price+ ' yens.');
                    await noixrom.updateOne({ide:id},{$inc: {timerrand:d}})
                    await clientoi.close();
                   
                }
                    sow().catch(console.dir)
            
            }
        })
        .catch(collected => {
            async function saw(){
                await clientoi.connect()
            let database=clientoi.db("sample_mflix");
            let noixrom=database.collection("noixrom");
            await noixrom.updateOne({ide:id},{$inc:{[a]:1}});
            message.channel.send('Temps écoulé. '+ randy.name+ ' rejoint la réserve.')
            await noixrom.updateOne({ide:id},{$inc: {timerrand:d}})
            await clientoi.close();
        }
            saw().catch(console.dir)
    });
      
       
        }      

        }finally{await clientye.close()}},
        name:'random'
    }