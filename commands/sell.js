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
        const clientest = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            clientest.setMaxListeners(10000)
        const clientoi = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            clientoi.setMaxListeners(10000)
            const clientoir = new MongoClient(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                })
                clientoir.setMaxListeners(10000)    
        try{
        await clientoi.connect()
        let database=clientoi.db("sample_mflix");
        let noixrom=database.collection("noixrom");
        let user=await noixrom.findOne({ide:message.author.id})
        if(!user)return message.channel.send('<@'+message.author.id+'>'+' ,veuillez vous inscrire avec la commande '+'**'+'!start' +'**')
        let art=args[0]+' '+args[1]
        console.log(id)
        async function vente(a){
            await clientest.connect()
            let database=clientest.db("sample_mflix");
            let noixrom=database.collection("noixrom");
            let user=await noixrom.findOne({ide:message.author.id})
            let v=a.name
            let y=await noixrom.findOne({v}&&{ide:id})
            let ky=y.team[v]
            let zer='team.'+v
            console.log(zer+' '+ky)
            if(ky==0){
                await noixrom.updateOne({ide:id},{$unset:{[zer]:''}})
            }
            if(!ky||ky<=0)return message.channel.send(' Tu ne peux pas vendre un joueur que tu ne possèdes pas, dumbass.');
            await clientest.close()
            const sent = await message.channel.send('Souhaitez vous revendre '+'**'+a.name+'**'+' pour '+'**'+ a.price+'**' +' yens?')
            sent.react('✅')
            sent.react('❌')

            const filter = (reaction, user) => {
                                   
                return ['✅', '❌'].includes(reaction.emoji.name) && user.id === id;
            };
            let ya='team.'+a.name
            let yo=a.price
            sent.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '✅') {
                        async function doit(){
                        await clientoir.connect()
                        let database=clientoir.db("sample_mflix");
                        let noixrom=database.collection("noixrom");
                        await noixrom.updateOne({ide:message.author.id},{$inc:{[ya]:-1}})
                        await noixrom.updateOne({ide:id},{$inc:{money:yo}})
                        sent.edit('**'+a.name+'**'+' a été vendu pour '+'**'+a.price+'**'+' yens.')
                        sent.reactions.removeAll()
                        await clientoi.close()
                    }
                        doit().catch(console.dir)
                    }
                    else{
                        sent.edit('Vente annulée')
                        sent.reactions.removeAll()
                    }
                
                })
                .catch(collected => {
                   sent.edit(' Temps écoulé, vente annulée.')
                   sent.reactions.removeAll()
        })

        }
        switch (art){
            case 'Lev Haiba':
        vente(Lev)
        break;
        case 'Tadashi Yamaguchi':
        vente(Yamaguchi)
        break;
        case 'Shōyō Hinata':
            vente(Hinata)
            break;
        case 'Tamahiko Teshiro':
        vente(Teshiro)
        break;
        case 'Yūki Shibayama':
            vente(Shibayama)
        break;
        case 'Kōsuke Sakunami':
            vente(Sakunami)
            break;
        case 'Kanji Koganegawa':
            vente(Koganegawa)
            break;
        case 'Shigeru Yahaba':
            vente(Yahaba)
            break;
        case 'Hisashi Kinoshita':
            vente(Kinoshita)
            break;
        case 'Sō Inuoka':
            vente(Inuoka)
            break;
        case 'Jingo Fukiage':
            vente(Fukiage)
            break;
        case 'Yutaka Obara':
            vente(Obara)
            break;
        case 'Kazuhito Narita':
            vente(Narita)
            break;
        case 'Chikara Ennoshita':
            vente(Ennoshita)
            break;
        case 'Takehito Sasaya':
            vente(Sasaya)
            break;
        case 'Kaname Moniwa':
            vente(Moniwa)
            break;
        case 'Shinji Watari':
            vente(Watari)
            break;
        case 'Yūtarō Kindaichi': case 'Yutaro Kindaichi':
            vente(Kindaichi)
            break;
        case 'Takahiro Hanamaki':
            vente(Hanamaki)
            break;
        case 'Kōshi Sugawara':
            vente(Sugawara)
            break;
        case 'Hayato Yamagata':
            vente(Yamagata)
            break;
        case 'Nobuyuki Kai':
            vente(Kai)
            break;
        case 'Shouhei Fukunaga':
            vente(Fukunaga)
            break;
        case 'Kei Tsukkishima(début)':
            vente(Tsukki)   
            break;
        case 'Akira Kunimi':
            vente(Kunimi)
            break;
        case 'Taketora Yamamoto(début)':
            vente(Yamamoto) 
            break;
        case 'Yasushi Kamasaki':
            vente(Kamasaki)
            break;
        case 'Kenji Futakuchi':
            vente(Futakuchi)
            break; 
        case 'Kozume Kenma(début)':
        vente(Kenma) 
        break;
        case 'Ryosuke Tanaka':
            vente(Tanaka)
            break;
        case 'Daichi Sawamura':
            vente(Daichi)
            break;
        case 'Eita Semi':
            vente(Semi)
            break;
        case 'Tsutomu Goshiki':
            vente(Goshiki)
            break;
        case 'Reon Ôhira':
            vente(Reon)
            break;
        case 'Issei Matsukawa':
            vente(Matsukawa)
            break;
        case 'Hajime Iwaizumi':
            vente(Iwaizumi)
            break;
        case 'Takanobu aone':
            vente(Aone)
            break;
        case 'Tobio Kageyama':
            vente(Kageyama)
            break;
        case 'Kenjirô Shirabu':
            vente(Shirabu)
            break;
        case 'Satori Tendô':
            vente(Tendo)
            break;
        case 'Kentarō Kyōtani': case 'Kentaro Kyotani':
            vente(Kyoutani)
            break;
        case 'Wakatoshi Ushijima':
            vente(Ushijima)
            break;
        case 'Tetsurou Kuroo(début)':
            vente(Kuroo)
            break;
        case 'Tooru Oikawa(début d\'histoire)':
            vente(Oikawa)
            break;
        case 'Yû Nishinoya(To The Top)':
            vente(Nishi)
            break;
        case 'Azumane Asahi(To The Top)':
            vente(Asahi)
            break;
        case 'Taro Onagawa':
            vente(Onagawa)
            break;            


        default:
            message.channel.send(' Sélectionnez le joueur à vendre.')
        }
    }
        finally{await clientoi.close()}

    },
    name:'sell'
}