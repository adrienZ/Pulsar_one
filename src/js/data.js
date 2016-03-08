var data = {
    act_1: {
        prologue: {
            citation: null,
            author: null,
            number: 1,
            title: 'Le début de la fin',
        },
        'a1_0': {
            "question": "Vous êtes au lit les yeux fermés dans votre chambre. Au loin, on entend une télévision. Qu’entendez-vous ?",
            "choix": [
                {
                    "text": "Les nouvelles du jour : le président Wilson est sur le point de déclencher une guerre mondiale.",
                    "data_event": "a1_1",
                    stats_change: {
                        intelligence: 1,
                    },
        },
                {
                    "text": "Une série TV : c’est l’épisode 03 de Sense : the prequel.",
                    "data_event": "a1_1",
                    stats_change: {
                        perception: 2,
                    },
        }
    ]
        },
        'a1_1': {
            "question": "Cette nuisance sonore vous a réveillé un peu. On dirait qu’il est temps de se lever. Vous vous levez avec une affreuse migraine.Vous vous souvenez de tout et de rien.C’est le néant. Les seuls mots qui se répètent dans votre tête sont: ‘histoire’, ‘sacrifice’, ‘destin’. Vous êtes en pyjama.Vous vous habillez, prenez votre sac de cours et décidez de descendre. Vous apercevez votre sœur Luna mangeant un bol de céréales dans la cuisine. LUNA: Salut ! Tu as vu ?",
            "choix": [
                {
                    "text": "Euh ouais, c'est ouf !",
                    "data_event": "a1_1_0",
                    stats_change: {
                        loyalty: -1,
                    },
        },
                {
                    "text": "Non désolé",
                    "data_event": "a1_1_1",
                    stats_change: {
                        loyalty: -1,
                    },
        }
    ]
        },
        'a1_1_0': {
            "question": "LUNA : Tu as vu comment Jean s’est battu ! Moment épique ! C’était dingue ! Je me demande comment on va finir à la fin haha. Toutes ses guerres, je ne comprends pas.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_2",
                    "naration": true
        }
    ]
        },
        'a1_1_1': {
            "question": "LUNA : Oh, dommage ! À la fin de l’épisode, tu aurais dû voir ! Cette bataille de malade ! // Oh ce n’est pas grave, tu n’as rien raté.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_2",
                    "naration": true
        }
    ]
        },

        'a1_2': {
            "question": "Vous vous asseyez à côté de Luna et vous lisez le journal “35 minutes” (on voit la page 35 minutes en image). À la fin du journal, vous tombez sur un questionnaire amusant : “Timide ? Susceptible ? Dynamique ? Enthousiaste ? Nos tests vous aident à mettre en valeur tous les aspects de votre personnalité ! Complétez ce test immédiatement et vous saurez qui vous êtes réellement.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_3",
                    "naration": true
        }
    ]
        },

        'a1_3': {
            "question": "Jour 01, 09h02, année 2016.09h02, il est temps d’aller en cours. Vous mettez vos chaussures, votre manteau et vous prenez vos clés dans le bol de clés sur la table basse à côté de la porte de sortie.",
            "choix": [
                {
                    "text": "Luna ? Tu veux qu’on aille en cours ensemble ?",
                    "data_event": "a1_3_0 ",
                    stats_change: {
                        loyalty: 3,
                    },
                    "get_success": 1,
        },
                {
                    "text": "Bon Luna, je m’en vais. On se voit au dîner.",
                    "data_event": "a1_3_1",
                    stats_change: {
                        loyalty: 1,
                    },
        }
    ],

        },

        'a1_3_0': {
            "question": "LUNA : Oh ne t’inquiète pas. J’attends Rosaline. On a cours à 09h45. Par contre, je dois te passer mon nouveau numéro de téléphone, j’ai perdu l’ancien. Papa m’en a acheté un nouveau : 06-72-91-04-93.\nElle termine son bol de céréales et se dirige vers vous pour vous donner un petit câlin.\nLUNA : À ce soir ! \n",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_4",
                    "naration": true
        }
    ]
        },

        'a1_3_1': {
            "question": "LUNA : Ça marche ! À ce soir ! Par contre, je dois te passer mon nouveau numéro de téléphone, j’ai perdu l’ancien. Papa m’en a acheté un nouveau : 06-72-91-04-93.\n",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_4",
                    "naration": true
        }
    ]
        },

        'a1_4': {
            "question": "JEU CHOIX DU CHIFFRE",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_5",
                    "naration": true
                }
            ]
        },
        'a1_5': {
            "question": "Jour 01, 09h45, année 2016.Vous prenez place dans votre salle et aujourd’hui, c’est cours d’espagnol. Parallèlement à la situation, vous êtes sur votre PC.Qu’ il y a - t - il sur votre écran ?",
            "choix": [
                {
                    "text": "Vos prises de notes",
                    "data_event": "a1_6",
                    stats_change: {
                        agility: 3,
                    },
                },
                {
                    "text": "Facemash",
                    "data_event": "a1_6",
                    stats_change: {
                        perception: -3,
                    },
                },
                {
                    "text": "Fancy Crush",
                    "data_event": "a1_6",
                    get_success: 3,
                    stats_change: {
                        intelligence: -user.stats.intelligence,
                    },

                }
            ]
        },
        'a1_6': {
            "question": "Quand tout à coup, vous recevez un message inconnu sur votre écran. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_7",
                    "naration": true
        }
    ]
        },


        'a1_7': {
            "question": "JEU ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_8",
                    "naration": true
                }
            ]
        },

        'a1_8': {
            "question": "Votre PC se met à émettre du bruit de manière pestilentielle, vous vous faites remarquer et le professeur se tourne vers vous…\n Hey" + user.name + ", on ne vous dérange pas ? Sortez du cours maintenant s’il vous plaît.\n",
            "choix": [
                {
                    "text": "Vous proteste et vous êtes envoyé chez le directeur.",
                    "data_event": "a1_9",
                    stats_change: {
                        luck: -5,
                    },
        },
                {
                    "text": "Vous ignorez le professeur.",
                    "data_event": "a1_9",
                    stats_change: {
                        luck: 2,
                    },
        },
                {
                    "text": "Vous ne mouftez pas et sortez de la salle.",
                    "data_event": "a1_9",
                    stats_change: {
                        strenght: -2,
                    },
        }
    ]
        },

        'a1_9': {
            "question": "Jour 01, 17h15, année 2016.\nVous êtes sur le chemin de retour. Vous décidez de marcher tout seul avec vos écouteurs devant ce beau coucher de soleil. Vous avez lancé votre playlist préférée et une petite musique chill se lance dans vos écouteurs.\nVous êtes à une intersection, quel chemin prenez-vous ?\n",
            "choix": [
                {
                    "text": "Celui de droite, votre chemin habituel.",
                    "data_event": "a1_10"
        },
                {
                    "text": "Celui de gauche, pour changer de la routine. ",
                    "data_event": "a1_11"
        }
    ]
        },

        'a1_10': {
            "question": "Le chemin de la routine. Vous décidez de marcher vers le chemin de la maison. Un bon dîner vous attend chez vous...\n",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_13",
                    "naration": true
        }
    ]
        },

        'a1_11': {
            "question": "Spontanément, vous vous sentez aventureux aujourd’hui. Vous décidez alors de prendre le chemin de gauche et de voir de nouvelles maisons que vous ne connaissez pas.\nVous apercevez au loin une personne devant un homme assez menaçant. Cette pauvre personne a sûrement dû ne rien demander. Qu’est-ce que vous faites ?\n",
            "choix": [
                {
                    "text": "Vous ne faites rien. Vous continuez votre chemin sans croiser des yeux ce « potentiel » racket.",
                    "data_event": "a1_12",
                    stats_change: {
                        strenght: -3,
                    },
        },
                {
                    "text": "Vous intervenez et vous haussez un peu la voix pour prendre la défense de cette personne. ",
                    "data_event": "a1_11_0",
                    stats_change: {
                        strenght: 3,
                    },
        }
    ]
        },

        'a1_11_0': {
            "question": "C’est à moi que tu parles comme ça ? Haha, voilà quelqu’un qui essaye d’être un héros et qui veut se la jouer. Eh bien, héros, montre moi de quoi tu es capable.\n",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_12",
                    "naration": true
        }
    ]
        },

        'a1_12': {
            "question": "MINI JEU LANCÉ DE DÉS",
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_13",
                    "naration": true
        }
    ]
        },

        'a1_13': {
            "question": "En rentrant chez vous, vous êtes toujours choqué(e) par cette journée. Tant d’émotions en si peu de temps. Mais attention, ce n’est pas encore terminé. \nEn voulant déverrouiller la porte de votre maison, une étrange sensation se ressent à l’intérieur de votre corps. Comme si votre esprit divaguait et essayait de sortir de votre corps. Vous tremblez. Vous entendez des voix à l’intérieur de votre tête d’une langue étrange. Vous ne pouvez plus tenir sur vos jambes. \nEt d’un coup, une force mystérieuse stoppe le temps. Les feuilles des arbres soufflées par un vent violent se retrouvent figées. Les oiseaux en vol sont immobiles dans les airs. \nVous regardez à côté de vous, pétrifié(e) par la situation et D’UN COUP UNE SORTE DE BALLE INVISIBLE TRAVERSE VOTRE CORPS COMME UNE GROSSE ONDE DE CHOC D’UNE TELLE ENVERGURE QUE VOUS VOUS ÉVANOUISSEZ. BLACKOUT. KO.\n",
            "choix": [
                {
                    "text": "",
                    "data_event": "end1",
                    "naration": true
        }
    ]
        },

        end1: {
            stop_act: true,
        },
    },


    act_2: {
        prologue: {
            citation: 'Si vous n\'aimez pas quelque chose, changez-le. Si vous ne pouvez pas le changer, changez votre attitude.',
            "author": "Maya Angelou",
            "number": 2,
            "title": "Un réveil trouble",
            data_event: 'a2_0',
        },
        'a2_0': {
            "question": "Vous êtes à terre, les yeux fermés avec une très grosse migraine. Tout autour de vous semble être que du vide. Vous ne pouvez que sentir un sol très lisse avec vos mains. Il est temps de se lever. Vous essayez d’ouvrir vos yeux...",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_1",
                    "naration": true
        }
    ]
        },
        'a2_1': {
            question: user.name + ' est à terre, le joueur doit appuyer sur espace au bon moment pour se réveiller.',
            choix: [
                {
                    text: "",
                    data_event: "a2_2",
                    naration: true,
                    pop_up: 'destiny_will_remember.svg',
                },
            ],
        },
        'a2_2': {
            question: 'Vous ouvrez le yeux. Au dessus de vous, une entité divine vous guette. C’est Chronos.',
            change_img: 'chan',
            choix: [
                {
                    text: "",
                    data_event: "a2_3",
                    naration: true,
                    get_success: 1,
                },
            ],
        },

        'a2_3': {
            question: 'Chronos : ' + user.name + ' ! Destinée m’a annoncée ta fin prochaine. J’ai besoin de ton aide. Je veux te laisser une seconde chance.',
            change_img: 'illu',

            //timer: 5,
            choix: [
                {
                    text: "Je suis déjà mort ?",
                    data_event: "a2_4_0",

                    stats_change: {
                        strenght: 1,
                        luck: -2,
                    },
                },
                {
                    text: "Quoi ? Qui êtes-vous ?",
                    data_event: "a2_4_1",

                },
                {
                    text: "Mais attendez où je suis ?",
                    data_event: "a2_4_2",
                },
            ],
        },

        'a2_4_0': {
            question: 'Chronos : Non. Mais bientôt.',
            choix: [
                {
                    text: "",
                    data_event: "a2_4_1",
                    naration: true,
                },
            ],
        },
        'a2_4_1': {
            question: 'Chronos : Je suis Chronos, le dieu du temps. Je règne dans un monde où le temps et l’espace sont réunis dans des milliers de mondes parallèles. Ce que tu vois en ce moment est mon royaume : les Limbes. Un espace blanc, vide de sens et de physique. C’est l’origine du cosmos, la signification de toutes les vies.',
            choix: [
                {
                    text: "Quel est le problème alors ?",
                    data_event: "a2_5_0",

                },
                {
                    text: "Non je dois rêver, ce n’est pas possible.",
                    data_event: "a2_4_2",

                },
            ],
        },
        'a2_4_2': {
            question: 'Chronos : Tu es dans les limbes. Un lieu où le temps et l’espace ne sont plus.',
            choix: [
                {
                    text: "",
                    data_event: "a2_3",
                    naration: true,
                },
            ],
        },
        'a2_5_0': {
            question: 'Chronos : Bonne question. Depuis la régence des disciples, un de mes disciples a volontairement disparu des Limbes pour disparaître sur Terre, menaçant ma place à la direction des Limbes. Le problème est qu’il maîtrise le pouvoir que mes soeurs Ethée et Asenys qui ont crée en cas de ma démence au pouvoir.',
            choix: [
                {
                    text: "Et pourquoi moi ?",
                    data_event: "a2_6",

                },
            ],
        },
        'a2_6': {
            question: 'Chronos : Toi, tu es particulier. J’ai vu ton potentiel au-delà. J’ai vu ta puissance. J’aurai besoin de ton aide pour l’abattre. Il est imprévisible et je ne peux pas le battre toutseul.Dans les limbes, je t’enseignerai le pouvoir que tu possèdes au sein de ton esprit. Aide-moi, ton destin est en jeu.',
            choix: [
                {
                    text: "Bah le problème c’est que je n’ai pas que ça à faire et vous savez...",
                    data_event: "a2_7_0",

                },
                {
                    text: "Et pourquoi D’accord. Je vous aiderai. J’essayerai.",
                    data_event: "a2_7_1",

                },
            ],
        },
        'a2_7_0': {
            question: 'Chronos : Ah, donc tu ne veux pas m’aider ? Tu est sûr ?',
            choix: [
                {
                    text: "Oui",
                    data_event: "a2_7_0",

                },
                {
                    text: "Bon en fait, je veux bien vous aider. J’ai eu peur sur le coup.",
                    data_event: "a2_4_1",

                },
            ],
        },
        'a2_7_1': {
            question: 'Chronos : Haha. J’invoque Rose ma disciple. Elle va t’enseigner toutes les bases de ton pouvoir.',
            choix: [
                {
                    text: "",
                    data_event: "a2_8",
                    naration: true,
                },

            ],
        },
        'a2_8': {
            question: 'Chronos disparaît devant vous. Vous êtes devant un paysage très blanc, très lumineux. Il n\'y a a pas de murs, que de la vapeur blanche au fond. Le sens de l\'orientation est perdu dans les limbes.Vous sentez une présence derrière vous, on dirait que quelqu\'un vous attend.',
            choix: [
                {
                    text: "",
                    data_event: "a2_9",
                    naration: true,
                },

            ],
        },
        'a2_9': {
            question: 'Rose : ... alors c’est toi le nouveau « disciple » ?',
            choix: [
                {
                    text: "Euh ouais à priori.",
                    data_event: "a2_10_0",

                },
                {
                    text: "Vous êtes Rose ?",
                    data_event: "a2_10_1",

                },
            ],
        },
        'a2_10_0': {
            question: 'Rose : Haha, t’es encore dans les vapes ? C’est normal.',
            choix: [
                {
                    text: "",
                    data_event: "a2_11",
                    naration: true,
                },
            ],
        },

        'a2_10_1': {
            question: 'Rose : Ouais, l’unique, la vraie. Rose.',
            choix: [
                {
                    text: "",
                    data_event: "a2_11",
                    naration: true,
                },
            ],
        },
        'a2_11': {
            question: 'C\'est une jeune femme blonde aux cheveux courts avec des pansements sur le visage. Elle a une tenue venant d\'un monde perdu. Tout est en lanières de cuir. Elle possède un casque d\'avion sur sa tête avec une vitre cassée. Elle semble avoir 20 ans.',
            choix: [
                {
                    text: "",
                    data_event: "a2_12",
                    naration: true,
                },
            ],
        },
        'a2_12': {
            question: 'Rose : Je t\'aurais vu plus vieux.. et plus grand. Bon enfin c\'est pas grave ! Chronos a dû sûrement te parler du pourquoi tu es là. Je sais que c\'est encore flou et que tu as plein de questions, mais on a pas vraiment le "temps". Le comble.Tiens je vais te donner quelque chose qui s\'appelle "Appareil d\'Eclaircissement Biologique". C\'est un petit cube auquel tu dois te concentrer dessus pour libérer ton potentiel.Attention le choc est fatal, il connecte tous tes points vitaux pour libérer ce qu\'on appelle la "deuxième forme".Tu es prêt ?',
            choix: [
                {
                    text: "",
                    data_event: "a2_13",
                    naration: true,
                },
            ],
        },

        'a2_13': {
            "question": "Le joueur doit connecter les points vitaux en appuyant au bon moment sur les touches.",
            "choix": [
                {
                    "text": "D'un coup les limbes se transforment. Rose et le Player se font téléporter dans le cosmos. L'interface utilisateur passe du blanc au noir.",
                    "data_event": "a2_14"
        },
                {
                    "text": "Rose : Réessaye, ce n'est pas grave :)",
                    "data_event": "a2_13"
        }
    ]
        },
        'a2_14': {
            "question": "Vous ouvrez les yeux et remarquez que Rose vous regarde avec des yeux émerveillés.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_15",
                    "naration": true
        }
    ]
        },
        'a2_15': {
            "question": "Rose : Ça se voit que tu es quelqu'un de spécial, époustouflé par la situation. Ton pouvoir est incroyable, et crois-moi je suis très difficile à être époustouflée comme ça.",
            "choix": [
                {
                    "text": "Quoi c'est mon pouvoir ?!",
                    "data_event": "a2_17"
        },
                {
                    "text": "Oh tu sais... Le talent, ma chère.",
                    "data_event": "a2_16",
                    stats_change: {
                        loyalty: -1,
                    },
        }
    ]
        },
        'a2_16': {
            "question": "Rose : Ne prends pas trop le gros melon cabrón.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_17",
                    "naration": true
        }
    ]
        },
        'a2_17': {
            "question": "Rose : Tu as ce qu’on appelle la manipulation de l’entropie temporelle. Tu es capable de contrôler ton énergie afin de tordre instantanément l’espace-temps. Tu crées une bulle autour de toi et pouf ! Tu transportes ta matière dans une autre dimension ! J’imaginais que ça pouvait exister. Ce type de pouvoir est unique en son genre.",
            "choix": [
                {
                    "text": "",
                    "data_event": "end2",
                    "naration": true
        }
    ]
        },
        end2: {
            stop_act: true,
        },

    },

    backstory: {
        success: [{
            name: "Une fraternité au grand coeur",
            id: 1,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_1.svg',
        }, {
            name: "La combinaison parfaite",
            id: 2,
            rewards_pulsar: 3,
            img: '/src/img/success/success_badge_2.svg',
        }, {
            name: "Gros G33k",
            id: 3,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_3.svg',
        }, {
            name: "Une journée si calme",
            id: 4,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_4.svg',
        }, {
            name: "Chronos a une dents contre vous",
            id: 5,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_5.svg',
        }, {
            name: "Pseudo Héros",
            id: 6,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_6.svg',
        }, {
            name: "Tenace",
            id: 7,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_7.svg',
        }, {
            name: "Les dieux grecs vous protegeront",
            id: 8,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_8.svg',
        }, {
            name: "Les pyramides vous remercient",
            id: 9,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_9.svg',
        }, {
            name: 'L\'espionage n\'a plus de secrets pour vous',
            id: 10,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_10.svg',
        }, {
            name: "Vous prenez soins de votre soeur",
            id: 11,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_11.svg',
        }, {
            name: "Petit cerveau de poisson rouge",
            id: 12,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_12.svg',
        }, {
            name: "Agir et réfléchir après",
            id: 13,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_13.svg',
        }, {
            name: "On vous appelle aussi Enigma",
            id: 14,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_14.svg',
        }, {
            name: "Dans le mille",
            id: 15,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_15.svg',
        }, {
            name: "La famille avant tout",
            id: 16,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_16.svg',
        }, {
            name: "Une fraternité au grand coeur",
            id: 1,
            rewards_pulsar: 1,
            img: '/src/img/success/success_badge_1.svg',
        }, ],
    }
};

function set_parents() {
    var acts = Object.keys(data);
    for (var i = 0; i < acts.length; i++) {
        for (var event in data[acts[i]]) {
            data[acts[i]][event].parent = event;
            data[acts[i]].index = i + 1;
        }
    }
}

set_parents();