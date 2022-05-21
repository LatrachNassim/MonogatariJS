/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'alley': 'alley.png',
    'arcade': 'arcade.png',
	'city': 'city.png',
	'moon': 'moon.png',
	'road': 'road.png',
	'temple': 'temple.png',
	'festival':'festival.png',
	'building': 'buildings.png',
	'Kartyss': 'Kartyss.png'
});


// Define the Characters
monogatari.characters ({
	
	'me': {
		name: 'Memento',
		color: '#EE82EE',
		directory: 'memento', 
        sprites: {
            s01: '01.png',
            s02: '02.png',
            s03: '03.png',
            s04: '04.png',
            s05: '05.png',
			s06: '06.png',
			s07: '07.png',
			s08: '08.png',
			s09: '09.png',
			s10: '10.png',
			s11: '11.png',
			s12: '12.png'
        }
	},
	'a': {
		name: 'Aquakwa',
		color: '#ff6f7d',
		directory: 'aquakwa', 
        sprites: {
			s01: '01.png',
            s02: '02.png',
            s03: '03.png',
            s04: '04.png',
            s05: '05.png',
			s06: '06.png',
			s07: '07.png',
			s08: '08.png',
			s09: '09.png'
        }
	},
	'l': {
		name: 'Loki',
		color: '#2588ff',
		directory: 'loki', 
        sprites: {
            s02: '02.png',
            s03: '03.png',
            s04: '04.png',
            s05: '05.png',
			s06: '06.png',
			s07: '07.png',
			s08: '08.png',
			s09: '09.png',
			s10: '10.png',
			s11: '11.png',
			s12: '12.png'
        }
	},
	'm': {
		name: 'Miko',
		color: '#ff0921',
		directory: 'miko', 
        sprites: {
            s01: '01.png',
            s02: '02.png',
            s03: '03.png',
            s04: '04.png',
            s05: '05.png',
			s06: '06.png',
			s07: '07.png'
        }
	},
	'f': {
		name: 'Fafelue',
		color: '#ff8166',
		directory: 'fafelue', 
        sprites: {
            s01: '01.png',
            s02: '02.png',
            s03: '03.png',
            s04: '04.png',
            s05: '05.png',
			s06: '06.png',
			s07: '07.png',
			s08: '08.png',
			s09: '09.png'
        }
	},
	'k': {
		name: 'Kartyss',
		color: '#9400D3'
	}

	
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show background road with fadeIn',
		"<i>Baroudeur dans l’âme, vous aimez voyager de ville en ville et faire la connaissance de nouvelles personnes. C’est tout naturellement que vos pas vous ont conduit jusqu’à Arcade City.</i>",
		"<i><b>Bip Bip !</b> Oh ! Vous venez de recevoir un message. Étrange, nan ?</i>",
		"<i> Vous regardez votre téléphone.</i>", 
		"<b>Kartyss souhaite devenir votre amie.</b>",
		{'Choice': {
			'Accept': {
				'Text': 'Accepter.',
				'Do': 'jump Suite'
			},
			'Refuse': {
				'Text': 'Refuser.',
				'Do': 'jump Suite'
			}
		}}
	],
	'Suite':[	
		"<i>Vous regardez le message en haussant un sourcil...<br> Qui avait bien pu envoyer ce message ? Et surtout qui était cette Kartyss qui souhaite devenir votre amie ? </i>",
		"<i>Intrigué, vous décidez de profiter de votre soirée pour chercher cette fameuse Kartyss. Malheureusement, vous ne savez pas où chercher.</i>", 
		'show background building with fadeIn',
		"<i>Vous décidez d’aller demander des informations aux natifs.</i>",
		'show character f s01 at center with fadeIn',
		"<i>Vous vous rapprochez d’une personne qui est en train de peindre sur un mur et vous lui demandez qui est Kartyss.</i>",


		// Fafelue
		'show character f s07',
		"f Oh ! Elle vous a envoyé un message ?! Vous en avez de la chance ! Kartyss est du genre très discret. Un peu comme une voleuse préparent son crime. Hahaha.",
		"Si vous avez reçu ce message, c’est parce que vous êtes nouveau en ville ?",
		'show character f s04',
		"<i>Vous acquiescez d’un hochement de tête. Fafelue vous regarde et affiche un grand sourire.</i>" ,
		'show character f s06',
		"f Vous allez voir, vous allez beaucoup vous amuser avec elle !",
		'hide character f with fadeOut',
		"<i>Fafelue vous laisse et retourne vandaliser un autre mur avec ses magnifiques fresques.</i>",
		"Vous reprenez votre chemin avec l'objectif de trouver d'autres informations. Un son de guitare se fait entendre, non loin de vous.</i>",

		'show background city with fadeIn',
		"<i>Vous vous approchez et voyez... un dragon ?</i>",
		"<i>Il semblait jouer de la guitare. Vous vous dites que cette ville est bien étrange. Cependant cela ne vous empêche pas de poser des questions à ce dragon guitariste.</i>",

		//Loki
		'show character l s02 with fadeIn',
		"l Hum,  pourquoi tu me regardes comme ça?",
		'show character l s03',
		"l Ah! Ce sont mes cornes qui t'impressionnent?",
		'show character l s04',
		"l Ahah, tu as raison d’être intimidé. Tu as devant toi un véritable dragon!",
		'show character l s05',
		"l …",
		'show character l s06',
		"l Comment ça un dragon ça n’existe pas? Tu n’es pas du coin à ce que je vois.",
		'show character l s07', 
		"l Cette ville est remplie de personnes venant de mondes différents. Des gens avec des attributs d’animaux, tu en verras pas mal ici!",
		'show character l s09',
		"l Je ne sais pas comment tout le monde s’est retrouvé ici d’ailleurs, mais on s’occupe en jouant aux jeux vidéo.",
		'show character l s11',
		"l Moi mon truc, c’est la guitare. Et tirer sur des gens.", 
		'show character l s11',
		"l … Hum? Tu demandes si Kartyss est ici ?",
		'show character l s09',
		"l Ahah, bien sûr! Je crois bien que son truc c’est plutôt les RPG et les jeux rétro. Je l’ai déjà vu jouer à des roguelike ou des jeux narratifs aussi.",
		'show character l s10',
		"l Je te préviens par contre… J’ai entendu dire qu’elle aimait bien quand ça explose dans tous les sens.",
		'show character l s08',
		"l Si tu tiens tant à la retrouver, ça sera à tes risques et périls.",
		'hide character l with fadeOut', 

		"<i>Après votre conversation avec Loki, vous êtes encore dans le flou.</i>",
		"<i>Vous savez que cette Kartyss est assez discrète. Qu’elle aime différents types de jeux, mais quand ça part dans tous les sens ça l’amuse encore plus.</i>",
		"<i>La première chose qui vous vient en tête, c’est que cette personne est du genre Chaotique.</i>",
		"<i>Soudain, quelqu’un tire sur votre manche. Vous vous retournez et vous faites face à un petit garçon.</i>",

		'show background festival with fadeIn',

		// Memento
		'show character me s01 with fadeIn',
		"me Est-ce que tu es perdu toi aussi?",
		'show character me s02',
  		"<i>Vous expliquez que vous êtes à la recherche de la fameuse Kartyss. Le garçon semblait attendri en entendant son nom.</i>", 
		'show character me s04',
		"me C’est une amie à moi. Elle a toujours beaucoup de choses à raconter, alors il m’arrive de lui rendre visite pour écouter ses histoires.",
		'show character me s07',
		"me Elle peut paraître maladroite et timide quand tu la rencontres pour la première fois mais elle a beaucoup de cœur et de passion.",
		'show character me s09',
		"me J’espère que tu arriveras à la voir comme moi je la vois, et que tu sauras apprécier tout ce qu’elle a à raconter.", 
		'show character me s11',
		"me Elle m’a dit qu’elle envisageait de se lancer dans une nouvelle aventure où elle allait pouvoir partager ses histoires avec pleins de nouvelles personnes. Je suppose que tu es l’une d’entre elles.", 
		'show character me s10',
		"me Dans ce cas-là, c’est aussi ton aventure.", 
		'show character me s12',
		"me Je te souhaite de créer plein de bons souvenirs ensemble.", 
		'hide character me with fadeOut',

		"<i>Le jeune homme repart aussi soudainement qu’il est apparu en vous laissant avec encore plus d’interrogation. Vous continuez votre balade dans Arcade City. Vous êtes arrêté par une nouvelle personne à l’apparence bien singulière.</i>",


		'show background moon with fadeIn',
		// Aquakwa
		'show character a s02 with fadeIn',
		"a Hey! C’est toi l’inconnu qui cherche Kartyss partout ?",
		"<i>Vous acquiescez en vous disant que vous allez enfin avoir une piste. La fille-lapin semble cependant se méfier de vous</i>.",
		'show character a s03',
		"a C’est la première fois que je te vois ici! C’est très sus. Pourquoi un parfait inconnu s’intéresse soudainement à Kartyss ?", 
		"<i>Vous lui montrez l’invitation que vous avez reçue de la part de Kartyss.</i>",
		'show character a s04',
		"a J’étais à deux doigts de te goumer, mais on dirait que c’est ton jour de chance!",
		'show character a s06',
		"a En fait, je savais que tu étais l’invité de Kartyss, mais je voulais t’embêter un peu !",
		'show character a s08',
		"a Son entourage est un peu chaotique mais c’est ça qui est marrant! Si tu deviens l’un de ses amis, je suis sûre que tu es une bonne personne.", 
		'show character a s07',
		"a Je te conseille de faire un tour au temple en haut de la ville! Tu pourras peut-être la trouver là-bas !", 
		'show character a s09',
		'a Bon courage !',
		'hide character a',

		'show background temple with fadeIn',
		// Miko
		"<i>Grâce aux informations d’Aquakwa, vous vous dirigez vers ce fameux temple.</i>",
		"<i> Vous affichez un air surpris en voyant que ce dernier dénote beaucoup avec la ville entière. Cette dernière était plongée dans un crépuscule perpétuel, lui donnant des airs très mystérieux.</i>",
		'show character m s01 with fadeIn',
		"m EH ! Vous ! Qu’est-ce que vous faites ici ? On ne reçoit plus de visiteurs à cette heure-ci !", 
		"<i>Visiblement contrariée de votre présence, la Miko s’approche dans l’unique but de vous faire déguerpir. Cependant, vous lui demandez, si elle sait des choses sur Kartyss.</i>", 
		'show character m s02',
		"m … Sérieux … Vous venez me déranger pour me parler de ce renard sauvage ? Vous n'avez pas honte ?", 
		"<i>Vous ne comprenez pas pourquoi elle parle d’un renard sauvage. Vous lui dites simplement que vous avez reçu un message de sa part. La miko soupire légèrement et prend le temps de vous expliquer.</i>", 
		'show character m s03',
		"m Rhaaa ! vous êtes un peu long à la détente.", 
		'show character m s04',
		"m Kartyss n’est pas une renarde comme celle du temple.",
		'show character m s07',
		"m Nous sommes unis à Inari O-kami, la déesse des renards, contrairement à cette fauteuse de troubles.", 
		'show character m s05',
		"m N’étant pas liée à la déesse, Kartyss se permet plein de choses sans se soucier des retombées karmiques. Et nous, on se retrouve à réparer ses bêtises.", 
		'show character m s06',
		"<i>La miko pousse un long soupir.</i>", 
		"<i>Vous haussez un sourcil.</i>", 
		"<i>Vous avez l’impression que vous risquez d’avoir des problèmes si vous commencez à traîner avec cette étrange Kartyss.</i>",
		'show character m s02',
		"m Vous voulez vraiment la rencontrer ? Essayez de jeter un coup d'œil à la rue adjacente au temple. Vous trouverez l’entrée d’une salle d’arcade. Elle se cache très souvent là-bas.",
		'hide character m',

		// Kartyss
		"<i>Vous remerciez la jeune femme pour toutes ces informations.</i>",
		'show background alley with fadeIn',
		"<i>Vous vous dirigez vers le lieu indiqué.</i>", 	
		"<i>Il s’agit d’une salle d’arcade. Les néons vous pètent les yeux et du bruit se fait entendre à l’intérieur.</i>", 
		
		'show background arcade with fadeIn',
		"<i>Vous décidez d’entrer à l'intérieur. Vous voyez qu’il y a beaucoup de monde. Au centre, se trouvent 2 bornes.</i>", 
		"<i>Un combat de “titans” est en cours. Quelqu’un se bat contre une jeune femme renard. Cette dernière s’énerve bien comme il faut sur cette pauvre borne.</i>", 
		"<i>Le combat vous tient en haleine et l'euphorie de la salle vous transporte. Soudainement victoire !</i>", 
		"<i>La jeune femme renard gagne contre son adversaire. Elle sautille de joie et en se retournant, elle vous aperçoit.</i>", 
		"<i>Vous voyez qu’un sourire illumine son visage.</i>",

		"k Vous êtes enfin arrivé ! J’avais peur que mon invitation vous fasse un peu peur.",

		"<i>Vous lui demandez la raison de son invitation. Kartyss bombe le torse et vous regarde avec beaucoup de détermination.</i>",

		"k C’est très simple ! Mon but … C’est d’atteindre la tête du classement d’Arcade City !", 
		'show background Kartyss with fadeIn',
		"k Et pour cela … huhu … J’ai besoin de vous tous pour y arriver !",
		"end"

	]
});