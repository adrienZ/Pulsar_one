var token = "SDFGHJKLKJHGFGHJKDKJSGJKQFJGNFJSKGHGNKGHFGNSKFBNVJKJKGHSVJKBHLJBLSH";


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
            "question": "Cette nuisance sonore vous a réveillé un peu. On dirait qu’il est temps de se lever. Vous vous levez avec une affreuse migraine.Vous vous souvenez de tout et de rien. C’est le néant. Les seuls mots qui se répètent dans votre tête sont: ‘histoire’, ‘sacrifice’, ‘destin’. Vous êtes en pyjama.Vous vous habillez, prenez votre sac de cours et décidez de descendre. Vous apercevez votre sœur Luna mangeant un bol de céréales dans la cuisine. LUNA : Salut ! Tu as vu l'épisode de Sense : the prequel ?",
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
            "question": "LUNA : Oh, dommage ! À la fin de l’épisode, tu aurais dû voir ! Cette bataille de malade !",
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
                    "data_event": "a1_3_0",
                    "get_success": 1,
                    stats_change: {
                        loyalty: 3,
                    },

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
            "question": "LUNA : Oh ne t’inquiète pas. J’attend Rosaline. On a cours à 09h45. Par contre, je dois te passer mon nouveau numéro de téléphone, j’ai perdu l’ancien. Papa m’en a acheté un nouveau : 06-72-91-04-93.\nElle termine son bol de céréales et se dirige vers vous pour vous donner un petit câlin.\nLUNA : À ce soir ! \n",
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
            mini_game: 'personality_test',
            "choix": [
                {
                    "text": "",
                    "data_event": "a1_5",
                    "naration": true
                }
            ]
        },
        'a1_5': {
            "question": "Jour 01, 09h45, année 2016.Vous prenez place dans votre salle et aujourd’hui, c’est cours d’espagnol. Parallèlement à la situation, vous êtes sur votre PC. Qu’il y a-t-il sur votre écran ?",
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
            "question": "Votre PC se met à émettre du bruit de manière pestilentielle, vous vous faites remarquer et le professeur se tourne vers vous…\n Hey " + user.name + token + ", on ne vous dérange pas ? Sortez du cours maintenant s’il vous plaît.\n",
            "choix": [
                {
                    "text": "Vous protestez et vous êtes envoyé chez le directeur.",
                    "data_event": "a1_9",
                    game_over: true,
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
            "question": "HOMME : C’est à moi que tu parles comme ça ? Haha, voilà quelqu’un qui essaye d’être un héros et qui veut se la jouer. Eh bien, héros, montre moi de quoi tu es capable.\n",
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
            citation: '"Si vous n\'aimez pas quelque chose, changez-le. Si vous ne pouvez pas le changer, changez votre attitude."',
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
            question: user.name + token + ' est à terre, le joueur doit appuyer sur espace au bon moment pour se réveiller.',
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
                },
            ],
        },

        'a2_3': {
            question: 'CHRONOS : ' + user.name + token + ' ! Destinée m’a annoncée ta fin prochaine. J’ai besoin de ton aide. Je veux te laisser une seconde chance.',
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
            question: 'CHRONOS : Non. Mais bientôt.',
            choix: [
                {
                    text: "",
                    data_event: "a2_4_1",
                    naration: true,
                },
            ],
        },
        'a2_4_1': {
            question: 'CHRONOS : Je suis Chronos, le dieu du temps. Je règne dans un monde où le temps et l’espace sont réunis dans des milliers de mondes parallèles. Ce que tu vois en ce moment est mon royaume : les Limbes. Un espace blanc, vide de sens et de physique. C’est l’origine du cosmos, la signification de toutes les vies.',
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
            question: 'CHRONOS : Tu es dans les Limbes. Un lieu où le temps et l’espace ne sont plus.',
            choix: [
                {
                    text: "",
                    data_event: "a2_3",
                    naration: true,
                },
            ],
        },
        'a2_5_0': {
            question: 'CHRONOS : Bonne question. Depuis la régence des disciples, un de mes disciples a volontairement disparu des Limbes pour disparaître sur Terre, menaçant ma place à la direction des Limbes. Le problème est qu’il maîtrise le pouvoir que mes soeurs Ethée et Asenys qui ont crée en cas de ma démence au pouvoir.',
            choix: [
                {
                    text: "Et pourquoi moi ?",
                    data_event: "a2_6",

                },
            ],
        },
        'a2_6': {
            question: 'CHRONOS : Toi, tu es particulier. J’ai vu ton potentiel au-delà. J’ai vu ta puissance. J’aurai besoin de ton aide pour l’abattre. Il est imprévisible et je ne peux pas le battre tout seul. Dans les Limbes, je t’enseignerai le pouvoir que tu possèdes au sein de ton esprit. Aide-moi, ton destin est en jeu.',
            choix: [
                {
                    text: "Bah le problème c’est que je n’ai pas que ça à faire et vous savez...",
                    data_event: "a2_7_0",

                },
                {
                    text: "D’accord, je vous aiderai. Enfin j’essayerai.",
                    data_event: "a2_7_1",

                },
            ],
        },
        'a2_7_0': {
            question: 'CHRONOS : Ah, donc tu ne veux pas m’aider ? Tu es sûr ?',
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
            question: 'CHRONOS : Haha. J’invoque Rose ma disciple. Elle va t’enseigner toutes les bases de ton pouvoir.',
            choix: [
                {
                    text: "",
                    data_event: "a2_8",
                    naration: true,
                },

            ],
        },
        'a2_8': {
            question: 'Chronos disparaît devant vous. Vous êtes devant un paysage très blanc, très lumineux. Il n\'y a a pas de murs, que de la vapeur blanche au fond. Le sens de l\'orientation est inexistant dans les Limbes. Vous sentez une présence derrière vous, on dirait que quelqu\'un vous attend.',
            choix: [
                {
                    text: "",
                    data_event: "a2_9",
                    naration: true,
                },

            ],
        },
        'a2_9': {
            question: 'ROSE : Alors c’est toi le nouveau « disciple » ?',
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
            question: 'ROSE : Haha, t’es encore dans les vapes ? C’est normal.',
            choix: [
                {
                    text: "",
                    data_event: "a2_11",
                    naration: true,
                },
            ],
        },

        'a2_10_1': {
            question: 'ROSE : Eh ouais, l’unique, la vraie. Rose.',
            choix: [
                {
                    text: "",
                    data_event: "a2_11",
                    naration: true,
                },
            ],
        },
        'a2_11': {
            question: 'C\'est une jeune femme blonde aux cheveux long avec des pansements sur le visage. Elle a une tenue venant d\'un monde perdu. Tout est en lanières de cuir. Elle semble avoir 20 ans.',
            choix: [
                {
                    text: "",
                    data_event: "a2_12",
                    naration: true,
                },
            ],
        },
        'a2_12': {
            question: 'ROSE : Je t\'aurais vu plus vieux... Et plus grand. Bon enfin c\'est pas grave ! Chronos a dû sûrement te parler du pourquoi tu es là. Je sais que c\'est encore flou et que tu as plein de questions, mais on a pas vraiment le "temps". Le comble. Tiens je vais te donner quelque chose qui s\'appelle "Appareil d\'Eclaircissement Biologique". C\'est un petit cube auquel tu dois te concentrer dessus pour libérer ton potentiel. Attention le choc est fatal, il connecte tous tes points vitaux pour libérer ce qu\'on appelle la "deuxième forme". Tu es prêt ?',
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
                    "text": "D'un coup les Limbes se transforment. Rose et le Player se font téléporter dans le cosmos. L'interface utilisateur passe du blanc au noir.",
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
            "question": "ROSE : Ça se voit que tu es quelqu'un de spécial, époustouflé par la situation. Ton pouvoir est incroyable, et crois-moi je suis très difficile à être époustouflée comme ça.",
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
            "question": "ROSE : Ne prends pas trop le gros melon cabrón.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_17",
                    "naration": true
        }
    ]
        },
        'a2_17': {
            "question": "ROSE : Que je t’explique un peu. Tu vas pas le croire mais tu as une capacité spéciale qui s’appelle “Le Saut d’Inter-Réalité”. C’est un pouvoir extrêmement rare du fait de sa dangerosité. Plus tu crées des sauts et plus ton destin est alterné. Tu écrases en gros le travail que Destinée fait en bref.\n",
            "choix": [
                {
                    "text": "Du coup je peux voyager dans le temps c’est ça ?",
                    "data_event": "a2_18"
        }
    ]
        },
        'a2_18': {
            "question": "ROSE : Ouais à peu près. Comme ton pouvoir n’est pas assez développé, tu ne peux pas voyager en toute liberté. Chronos a du créer des barrières trans-dimensionnel pour éviter que tu fasses des bêtises.",
            "choix": [
                {
                    "text": "Whoa, on est capable de faire ça ?",
                    "data_event": "a2_19"
        },
                {
                    "text": "Du coup je peux voyager dans le temps c’est ça ?",
                    "data_event": "a2_20"
        }
    ]
        },

        'a2_19': {
            "question": "ROSE : A priori ouais. Moi je n’ai pas ce don haha. Je suis douée sur tout ce qui touche la connaissance et la mécanique.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_21",
                    "naration": true
        }
    ]
        },

        'a2_20': {
            "question": "ROSE : Ouais à peu près. Comme ton pouvoir n’est pas assez développé, tu ne peux pas voyager en toute liberté. Chronos a du créer des barrières trans-dimensionnel pour éviter que tu fasses des bêtises.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_21",
                    "naration": true
        }
    ]
        },

        'a2_21': {
            "question": "ROSE : Bon maintenant, il faut que je t’explique comment tu peux traverser les dimensions. Ce que tu crées ce sont des réalités alternatives qui ont pour but d’organiser tout le chaos du temps. Dès lors où tu initialiseras un saut, tu dois utiliser des pulsars, ce sont des particules d’énergies qui synchronise tes sauts et garde tes propriétés métaphysiques. La règle de Chronos est : 3 pulsars pour ne pas rester dans le blizzard. C’est 1 pulsar d’entrée, 1 pulsar de parcours et 1 pulsar de sortie. Et attention ! Ce ne sont pas des jouets ! Tu dois jamais les laisser tomber, ce sont des éléments très toxique. Donc ne mange pas les pulsars. Je ne l’ai jamais fait, mais on m’a dit que ça ferait un effet plutôt sympathique.\n(3 pulsars = 1 retour temporel conscient. 1 pulsar pour initialiser, 1 pulsar pour modifier les événements et garder son esprit, 1 pulsar pour retourner dans notre lignée temporelle)\n\nTu dois à tout prix sortir de tes bulles temporelles ou sinon tu devras rester dans ce temps où tu n’existerais même pas. Comme un fantôme. Mais ça je t’expliquerai plus tard. Garde l’Appareil d'Eclaircissement Biologique, ce sera ton appareil pour faire les sauts temporels. Je l’ai modifié pour toi. Souviens-toi, tu fais des sauts temporels, aux yeux de Destinée tu remappes le temps. Est-ce que tu as tout compris ?\n",
            "choix": [
                {
                    "text": "Ouais ! Allons sauver le monde ! ",
                    "data_event": "a2_22"
        },
                {
                    "text": "Euh, j’ai pas très bien compris..",
                    "data_event": "a2_23"
        }
    ]
        },

        'a2_22': {
            "question": "ROSE : Haha j’aime cette détermination. Ne bouge pas, je vais appeler Chronos.\n",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_26",
                    "naration": true
        }
    ]
        },

        'a2_23': {
            "question": "ROSE : Pour te faire court, tu as le pouvoir de voyager dans le temps. C’est 3 pulsars sont pour le voyage. Tâche de sortir du temps que tu as modifié au risque de te faire effacer. Compris ?\n",
            "choix": [
                {
                    "text": "Ouais, maintenant c’est plus clair !",
                    "data_event": "a2_24"
        },
                {
                    "text": "Euh attends, tu peux recommencer ?",
                    "data_event": "a2_25"
        }
    ]
        },

        'a2_24': {
            "question": "ROSE : Ok. Ne bouge pas, je vais appeler Chronos.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_26",
                    "naration": true
        }
    ]
        },
        'a2_25': {
            "question": "ROSE : Pour te faire court, tu as le pouvoir de voyager dans le temps. C’est 3 pulsars sont pour le voyage. Tâche de sortir du temps que tu as modifié au risque de te faire effacer. Compris ?",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_26",
                    "naration": true
        }
    ]
        },

        'a2_26': {
            "question": "Chronos arrive d’un coup. Une onde de choc d’air vous blaste avec Rose aussi.\nCHRONOS : … *cough* Bon alors tu as découvert ton pouvoir ?\n",
            "choix": [
                {
                    "text": "Ouais, je suis capable de manipuler le temps, c’est bien ça ?",
                    "data_event": "a2_27"
        },
                {
                    "text": "Ouais, je suis capable de voir le temps, c’est bien ça ?",
                    "data_event": "a2_28"
        },
                {
                    "text": "Ouais, je suis capable d’écrire le temps, c’est bien ça ?",
                    "data_event": "a2_28"
        }
    ]
        },

        'a2_27': {
            "question": "CHRONOS : Oui à peu près. Tu as la possibilité de faire des sauts temporels. Manipuler le temps c’est moi ça.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_29",
                    "naration": true
        }
    ]
        },
        'a2_28': {
            "question": "CHRONOS : Euh non. Tu possèdes la possibilité de faire des sauts temporels et d’influer ses les événements.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_29",
                    "naration": true
        }
    ]
        },

        'a2_29': {
            "question": "CHRONOS : Maintenant je dois t’expliquer la partie la plus importante du topo. Il y a cinq siècles, après la création de la régence des disciples, j’ai accueilli un disciple au potentiel similaire au tien, il s'appelait Rainmaker. Il était très doué et pouvait assimiler tout en un rien de temps. C’était un vrai prodige. Mais petit à petit, sa soif de pouvoir a pris le dessus et voilà maintenant qu’il veut siéger sur le trône des Limbes. Je ne peux pas tolérer ça. Il est en train de tout faire pour me détruire, quitte à sacrifier des personnes innocentes.\nTu es mon seul espoir, tu possèdes le même potentiel que Rainmaker et tu est le seul à posséder un pouvoir capable de détruire Rainmaker. Il faut que tu m’aides. En échange, je modifierai ton destin tragique.\n",
            "choix": [
                {
                    "text": "D’accord, je vous aiderai.",
                    "data_event": "a2_30"
        }
    ]
        },

        'a2_30': {
            "question": "CHRONOS : Merci. Maintenant, je dois te laisser. Ah oui dernière chose, tu dois sortir par toi-même des Limbes. Ce sera ton épreuve finale. Sers toi de ton instinct pour trouver ton chemin. On se retrouve à la sortie.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_31",
                    "naration": true
        }
    ]
        },

        'a2_31': {
            "question": "Jeu S'échapper des Limbes",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_32",
                    "naration": true
        }
    ]
        },

        'a2_32': {
            "question": "CHRONOS : Tu as réussi l’épreuve finale. L’initiation est dorénavant terminé. Fais attention, tout de même. Dans cette aventure chaque choix que tu prendras aura des conséquences sur ton avenir. Utilise ce pulsar quantum pour réaliser ton premier remappage temporel.\nROSE : Hey" + user.name + token + "profite ! On dit toujours que le premier voyage temporel est celui que l’on se souvient le plus !\nCHONOS :  Remappage temporel Rose. Utilise les bons termes.\nROSE : Roh si tu veux.\n",
            "choix": [
                {
                    "text": "Remappage temporel vers La Grèce Antique ",
                    "data_event": "a2_33_0",
                    time_travel: 'greece',

        },
                {
                    "text": "Remappage temporel vers L’Egypte Ancienne",
                    "data_event": "a2_33_1",
                    time_travel: 'egypt',

        },
                {
                    "text": "Remappage temporel vers La France Révolutionnaire",
                    "data_event": "a2_33_2",
                    time_travel: 'france',

        }
    ]
        },

        'a2_33_0': {
            "question": "Vous avez choisi de partir en Grèce Antique. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_36",
                    "naration": true,
        }
    ]
        },

        'a2_33_1': {
            "question": "Vous avez choisi de partir en Egypte Ancienne. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_36",
                    "naration": true,

        }
    ]
        },

        'a2_33_2': {
            "question": "Vous avez choisi de partir en France Révolutionnaire.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a2_36",
                    "naration": true,

        }
    ]
        },


        'a2_36': {
            "question": "Bon courage pour ce premier voyage, accroche toi bien !",
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

    act_3: {
        prologue: {
            citation: '"Lorsque vous faites un choix dans votre vie, cela affecte votre vie dans toutes les manières, que ça soit dans le bon ou dans le mauvais sens."',
            "author": "John Mayer",
            "number": 3,
            "title": "Un passé incertain",
            data_event: 'a3_0',
        },
        'a3_0': {
            "question": "Ton voyage commence maintenant !",
            "choix": [
                {
                    "text": "",
                    "data_event": "end3",
                    "naration": true
        }
    ]
        },
        'a3_1': {
            "question": "Bienvenue en Grèce",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_1",
                    "naration": true
        }
    ]
        },

        'a3_1_1': {
            "question": "CHRONOS : Dans le passé Rainmaker tue Pythonisse pour être le seul à pouvoir connaître le futur et affaiblir les hommes, c’est à ce moment la qu’il prit le pouvoir, tu dois l’empêcher de réaliser son funeste dessein et sauver Pythonisse. Sois vigilant durant ton voyage, le moindre changement que tu feras dans le passé aura une conséquence sur le présent à ton retour, ne l'oubli pas !",
            "choix": [
                {
                    "text": "Je me fiche de cette Pythonisse, je veux juste battre Rainmaker !",
                    "data_event": "a3_1_5"
        },
                {
                    "text": "Je suis prêt maintenant.",
                    "data_event": "a3_1_5"
        },
                {
                    "text": "Très bien y a-t-il autre chose que je dois savoir ? ",
                    "data_event": "a3_1_2"
        }
    ]
        },

        'a3_1_2': {
            "question": "CHRONOS : Tu devras peut être affronter Rainmaker alors sois prudent. Il est encore jeune, mais il est déjà démoniaque, il a toujours été un disciple doué tu as peu de chance de le vaincre… Ce qui risque de le retenir indéfiniment dans les Limbes.\n",
            "choix": [
                {
                    "text": "Wooooow ! C’est bien beau tout ça, mais comment je reviens dans le présent ? ",
                    "data_event": "a3_1_3"
        }
    ]
        },

        'a3_1_3': {
            "question": "CHRONOS : Ne t’en fais pas, tu reviendras de la même manière que tu y arriveras : grâce a ton flux quantique, veille à économiser tes pulsars ! Et à ne pas rester coincer dans les Limbes…\n",
            "choix": [
                {
                    "text": "Rester dans les Limbes ? C’est une blague ?",
                    "data_event": "a3_1_4"
        }
    ]
        },

        'a3_1_4': {
            "question": "CHRONOS : Eh bien… Si par malheur tu es vaincu pendant le voyage temporel, tu perdras tes pulsars et tu resteras coincé dans l’époque à laquelle tu as été vaincu, fais donc attention.\n",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_5",
                    "naration": true
        }
    ]
        },

        'a3_1_5': {
            "question": "Le joueur arrive à Delphes, la cité est en effervescence. Les passants ne parlent que de l’évènement qui va avoir lieu aujourd’hui (nous sommes le 7 du mois de Bysios, jour de l’anniversaire de la naissance d'Apollon) : la Pytie va consulter l’oracle et prédire le dénouement de la bataille de Salamine contre les Perses, d’autres crient à l’arnaque et les esprits s’échauffent. Certains citoyens décident de monter au temple s’expliquer avec la protégée d’Apollon.\nLe joueur se rend alors compte qu’il est un esclave car un homme en toge tire sur son collier...\n CITOYEN : Dépêche toi Menesthes ! Allons régler son compte à cette vierge !",
            "choix": [
                {
                    "text": "Nom d’un pégase je suis un esclave !",
                    "data_event": "a3_1_6"
        }
    ]
        },
        'a3_1_6': {
            "question": "CITOYEN : Évidemment idiot ! Allez, ne traîne pas.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_7",
                    "naration": true,
        }
    ]
        },

        'a3_1_7': {
            "question": "Peu de temps après, vous vous retrouvez dans une petite ruelle seul avec votre maître, il doit reprendre son souffle, que faites vous ? \n",
            "choix": [
                {
                    "text": "Vous le tuez avec la chaîne à laquelle vous êtes attaché.",
                    "data_event": "a3_1_8"
        },
                {
                    "text": "Hé citoyen  ! Tu dois m’aider à battre Rainmaker !",
                    "data_event": "a3_1_9"
        },
                {
                    "text": "Je dois le vaincre, laissez moi partir !",
                    "data_event": "a3_1_10"
        }
    ]
        },

        'a3_1_8': {
            "question": "C’est ici que tu meurs Citoyen. (Vos chaînes se brisent durant l'affrontement). Oh mon dieu qu’ai-je fais… Bon pas le temps de réfléchir, je dois retrouver la Pytie avant Rainmaker. (Vous suivez la foule en colère).",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_12",
                    "naration": true
        }
    ]
        },

        'a3_1_9': {
            "question": "CITOYEN : Qu’est ce que tu me chantes esclave ? ",
            "choix": [
                {
                    "text": "Je viens du futur, il ne faut pas que la Pytie meurt !",
                    "data_event": "a3_1_11"
        }
    ]
        },

        'a3_1_11': {
            "question": "CITOYEN : Du futur ? Par Zeus, cet esclave est devenu fou, tu vas rester ici je n’ai plus besoin de toi.",
            "choix": [
                {
                    "text": "Non attendez !",
                    "data_event": "a3_1_13"
        },
                {
                    "text": "Tuer le citoyen.",
                    "data_event": "a3_1_12"
        }
    ]
        },

        'a3_1_13': {
            "question": "Vous avez sans doute fait un mauvais choix.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_12",
                    game_over: true,
                    "naration": true
        }
    ]
        },

        'a3_1_10': {
            "question": "CITOYEN : Voyons Menesthes, ton seul droit est de me suivre… Hahaha ! Allons dépêchons !\n",
            "choix": [
                {
                    "text": "Tuer le citoyen.",
                    "data_event": "a3_1_12"
        },
                {
                    "text": "Le suivre.",
                    game_over: true,
                    "data_event": "a3_1_12"
        }
    ]
        },

        'a3_1_12': {
            "question": "Vous arrivez finalement au temple de Delphes, le temple est déjà pris d’assaut par la foule. Vous tentez de la traverser. \n Vous arrivez enfin dans le temple, au centre se trouve Pytie, des vapeurs s'échappent d'une faille qui s'ouvrait dans le sol, elle trône assise sur un haut trépied placé au-dessus de la fissure, elle respire les vapeurs et prophétise.\n\nUn homme armé sort de la foule, il se présente sous le nom de Rainmaker et annonce vouloir tuer la Pythie et cesser cette duperie.\n",
            "choix": [
                {
                    "text": "Laissez faire…",
                    "data_event": "a3_1_12_1"
        },
                {
                    "text": "Hey Rainmaker, viens te battre !",
                    "data_event": "a3_1_12_2"
        }
    ]
        },

        'a3_1_12_1': {
            "question": "Rainmaker sort une arme et se dirige vers la Pythie pour l'attaquer. ",
            "choix": [
                {
                    "text": "Ne rien faire... ",
                    "data_event": "a3_1_12_1_0"
        },
                {
                    "text": "Aller attaquer Rainmaker !",
                    "data_event": "a3_1_12_1_1"
        },
                {
                    "text": "Il faut couvrir la Pythie !",
                    "data_event": "a3_1_12_1_2"
        }
    ]
        },

        'a3_1_12_1_0': {
            "question": "Vous ne faites rien, la Pythie meurt... Vous avez échouez à votre mission. ",
            "choix": [
                {
                    "text": "",
                    game_over: true,
                    "data_event": "a3_1_12_1_1",
                    "naration": true
        }
    ]
        },

        'a3_1_12_1_1': {
            "question": "JEUX FORCE RAINMAKER ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_12_1_1_0",
                    "naration": true
        }
    ]
        },

        'a3_1_12_1_1_0': {
            "question": "Rainmaker est blessé, la Pythie s'enfuit. Vous avez réalisé votre objectif dans ce monde. ",
            "choix": [
                {
                    "text": "",
                    get_success: 8,
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },


        'a3_1_12_1_2': {
            "question": "JEUX AGILITÉ CONTRE RAINMAKER ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_12_1_2_0",
                    "naration": true
        }
    ]
        },

        'a3_1_12_1_2_0': {
            "question": "Pythie s'enfuit, si vous avez assez de force vous contrez Rainmaker. ",
            "choix": [
                {
                    "text": "",
                    get_success: 8,
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },

        'a3_1_12_2': {
            "question": "RAINMAKER : Qui es-tu étranger ? ",
            "choix": [
                {
                    "text": "Je suis " + user.name + token + " et je viens du futur pour te détruire. ",
                    "data_event": "a3_1_12_2_0"
        },
                {
                    "text": "Laisse la Pythie tranquille. ",
                    "data_event": "a3_1_12_2_1"
        }
    ]
        },

        'a3_1_12_2_0': {
            "question": "Vous attaquez Rainmaker. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_1_12_1_1",
                    "naration": true
        }
    ]
        },

        'a3_1_12_2_1': {
            "question": "RAINMAKER : Haha c'est ce qu'on va voir. Tu veux vraiment te battre contre un dieu ? ",
            "choix": [
                {
                    "text": "Euh... Après mûre réflexion. ",
                    "data_event": "a3_1_12_2_2"
        },
                {
                    "text": "En garde !",
                    "data_event": "a3_1_12_2_3"
        }
    ]
        },

        'a3_1_12_2_2': {
            "question": "RAINMAKER : Je me disais bien. Dans ce cas reste à l'écart",
            "choix": [
                {
                    "text": "Ne rien faire... ",
                    "data_event": "a3_1_12_1_0"
        },
                {
                    "text": "Attaquer Rainmaker ! ",
                    "data_event": "a3_1_12_1_1"
        },
                {
                    "text": "Couvrir la Pythie ! ",
                    "data_event": "a3_1_12_1_2"
        }
    ]
        },

        'a3_1_12_2_3': {
            "question": "RAINMAKER : Tu as l'air de quelqu'un qui à déjà voyagé dans les Limbes dis donc, je vais prendre du plaisir à mettre fin à ta petite vie ! ",
            "choix": [
                {
                    "text": "Attaquez Rainmaker !",
                    "data_event": "a3_1_12_2_4"
        }
    ]
        },
        'a3_1_12_2_4': {
            "question": "Il est temps de partir... Destination. (Choisissez une date)",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },






        'a3_2': {
            "question": "Bienvenue en Egypte",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_1",
                    "naration": true
        }
    ]
        },

        'a3_2_1': {
            "question": "PARAGYNOM : Hey petit, ça va aller ? C'est dangereux de dormir ici, tu vas vite cramer pour sûr.",
            "choix": [
                {
                    "text": "Mais, je suis où la ?",
                    "data_event": "a3_2_1_1"
        },
                {
                    "text": "Oui, oui. Bien sur désolé. ",
                    "data_event": "a3_2_1_2"
        }
    ]
        },

        'a3_2_1_1': {
            "question": "Nous sommes en Égypte, le lieu absolu du dieu Hélios. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_3",
                    "naration": true
        }
    ]
        },

        'a3_2_1_2': {
            "question": "PARAGYNOM : Vous êtes d'ici ? Je n'ai jamais vu des vêtements comme les vôtres ici... ",
            "choix": [
                {
                    "text": "Hum... Oui je viens d'une contrée lointaine, j'ai fais un long voyage pour venir ici. ",
                    "data_event": "a3_2_1_3"
        },
                {
                    "text": "Oui ! Vous connaissez Partoutatix ? Je suis son cousin et je suis venu chercher de l'eau. ",
                    "data_event": "a3_2_1_4"
        }
    ]
        },
        'a3_2_1_3': {
            "question": "Ah d'accord.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_3",
                    "naration": true
        }
    ]
        },

        'a3_2_1_4': {
            "question": "PARAGYNOM :  Mais oui ! D'ailleurs, il me doit 4 cuivres ce sot. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_3",
                    "naration": true
        }
    ]
        },
        'a3_2_3': {
            "question": "PARAGYNOM : Bon venez dans ma tanière, ce n'est pas très bon d'errer seul en ce moment.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_4",
                    "naration": true
        }
    ]
        },

        'a3_2_4': {
            "question": "Vous marchez avec lui dans une ville assez chaotique. Vous entendez des bruits qui parlent de révolution, de massacre. Rien ne vous dit que tout va aller bien. PARAGYNOM vous amène chez lui. C'est une tanière relativement modeste. Vous prenez un petit tabouret et vous vous asseyez. Il fait très très chaud. Vous suez à grosses gouttes.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_5",
                    "naration": true
        }
    ]
        },

        'a3_2_5': {
            "question": "PARAGYNOM : Bon ce n'est pas du luxe, mais c'est tout ce que j'ai. Je vous sers de l'eau ?",
            "choix": [
                {
                    "text": "Oui, je veux bien. ",
                    "data_event": "a3_2_6"
        },
                {
                    "text": "Non ça ira, merci. ",
                    "data_event": "a3_2_7"
        }
    ]
        },

        'a3_2_6': {
            "question": "PARAGYNOM : Tenez. Ce vieil homme vous sert un verre avec une eau très trouble, elle est jaunâtre. Vous ne pouvez pas refuser ce geste. Vous buvez l'eau dégueulasse. Elle a un goût sableuse. Vous avalez en même temps du sable et une possibilité de maladie par la même occasion.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_8",
                    "naration": true
        }
    ]
        },
        'a3_2_7': {
            "question": "PARAGYNOM : Bon d'accord.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_8",
                    "naration": true
        }
    ]
        },

        'a3_2_8': {
            "question": "PARAGYNOM s'assoit à côté du joueur.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9",
                    "naration": true
        }
    ]
        },

        'a3_2_9': {
            "question": "PARAGYNOM : Ah le temps est catastrophique. Notre monde s'effondre. Tout ça à cause de Rhea Magnus. Cette personne est venue d’on ne sait où et là il est à l'origine de cette catastrophe.",
            "choix": [
                {
                    "text": "Rhea Magnus ? C'est qui lui ? ",
                    "data_event": "a3_2_9_1"
        },
                {
                    "text": "Pourquoi ? Qu'est-ce qu'il a fait ?",
                    "data_event": "a3_2_9_2"
        }
    ]
        },

        'a3_2_9_1': {
            "question": "On ne le connaît pas tellement. Mais il a les pouvoirs d'un dieu. On ne sait pas comment il fait, mais il est invincible. C'est une personne très puissante, certains l'appellent le destructeur de royaume.",
            "choix": [
                {
                    "text": "Peut-on se battre contre lui ?",
                    "data_event": "a3_9_3"
        },
                {
                    "text": "À quoi il ressemble ?",
                    "data_event": "a3_9_4"
        },
                {
                    "text": "Ce n'est pas possible, on doit réagir. Votre peuple ne doit pas se soumettre.",
                    "data_event": "a3_9_5"
        }
    ]
        },

        'a3_2_9_2': {
            "question": "Des échos me disent que Rhea Magnus veut régner sur notre royaume et contrôler l'Egypte. Il est prêt à sacrifier beaucoup de monde pour parvenir à ses fins. On dit qu'il est en train de créer une armée très très volumineuse : l'armée divine.",
            "choix": [
                {
                    "text": "Peut-on se battre contre lui ?",
                    "data_event": "a3_2_9_3"
        },
                {
                    "text": "À quoi il ressemble ?",
                    "data_event": "a3_2_9_4"
        },
                {
                    "text": "Ce n'est pas possible, on doit réagir. Votre peuple ne doit pas se soumettre.",
                    "data_event": "a3_2_9_5"
        }
    ]
        },

        'a3_2_9_3': {
            "question": " Malheureusement seul les plus forts mentalement et physiquement peuvent défier Rhea Magnus. Et encore, si tu perds contre lui il prend le contrôle de ton esprit et tu rejoins directement l'armée divine... Donc tout le monde doit se soumettre",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_6",
                    "naration": true
        }
    ]
        },
        'a3_2_9_4': {
            "question": "Je ne l'ai jamais rencontré. Mais il est très imposant. On dit qu'il a les yeux bruns, les cheveux courts et possède une cicatrice au niveau de la paupière gauche.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_6",
                    "naration": true
        }
    ]
        },
        'a3_2_9_5': {
            "question": "PARAGYNOM : Je veux bien, mais le problème c'est que c'est un dieu. Personne ne peut le vaincre.",
            "choix": [
                {
                    "text": "Laissez-moi vous aider. Je suis capable de le vaincre, amenez- moi vers lui. Je serai en mesure de le détruire",
                    "data_event": "a3_2_9_7",
                    "naration": true
        }
    ]
        },

        'a3_2_9_7': {
            "question": "PARAGYNOM : Pour sûr. Je ne vous connais pas vraiment, mais je vous aime déjà. Dès demain, nous irons sur la place où Rhea Magnus fera son speech.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_8",
                    "naration": true
        }
    ]
        },
        'a3_2_9_9': {
            "question": "PARAGYNOM : C'est ici qu'il va lancer son armée divine et tuer les infidèles. Tenez, prenez cette tenue, elle sera moins flashy que vos vêtements venant d'un autre monde.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_10",
                    "naration": true
        }
    ]
        },

        'a3_2_9_10': {
            "question": "\nJour 04, année -3000 avant J-C, Egypte ancienne.\nIl est 07h00, ou presque. Le discours de Rhea Magnus est tenu dans une heure. Vous vous habillez comme un citoyen égyptien et partez avec PARAGYNOM à la place de la ville.\nTout le monde est là, il y a une foule incroyable. Devant se trouve une place plus haute, ce sera là que Rhea Magnus va donner son discours. Tout le monde chahute sur ce qui va se passer. Quand tout à coup.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_11",
                    "naration": true
        }
    ]
        },

        'a3_2_9_11': {
            "question": "RHEA MAGNUS : Bonjour tout le monde",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_12",
                    "naration": true
        }
    ]
        },

        'a3_2_9_12': {
            "question": "Tout le monde continue de parler, n'entendant pas Rhea Magnus.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_13",
                    "naration": true
        }
    ]
        },

        'a3_2_9_13': {
            "question": "RHEA MAGNUS : J'ai dis BONJOUR TOUT LE MONDE.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_14",
                    "naration": true
        }
    ]
        },
        'a3_2_9_14': {
            "question": "La voix de Rhea Magnus est tellement perçante que tout le monde s'est tu directement. C'est une voix très très imposante. Vous sentez que Rhea Magnus est en effet, très fort. Vous avez le pressentiment que c'est lui Rainmaker.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_15",
                    "naration": true
        }
    ]
        },
        'a3_2_9_15': {
            "question": "RHEA MAGNUS : Je vous ai donné un sursis d'une semaine sur ce que j'ai proposé. Mais on dirait que la majorité d'entre vous ne veulent pas se soumettre à moi. C'est dommage. Comme vous savez, je dois maintenant passer à la manière forte. J'ai crée une armée à moi qui s'appelle l'armée divine. Elle réunit les meilleurs d'entre vous et ceux qui ont décidé de... Me vaincre.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_16",
                    "naration": true
        }
    ]
        },
        'a3_2_9_16': {
            "question": "Le monde craint de ce moment. Un chuchotement se fait entendre.\nRHEA MAGNUS : SILENCE.\nTout le monde se tait. Toujours à cause de cette voix extrêmement puissante.\nRHEA MAGNUS : Bon comme vous êtes assez dissipé, il est temps de vous montrer un peu mes soldats. Rhea Magnus se retire et laisse son armée divine rentrer dans la scène.\nRHEA MAGNUS : Comme vous pouvez le voir, voilà mon armée. Pas mal non ? Il est temps de vous montrer de quel bois je me CHAUFFE. Si quelqu'un s'oppose à cette action qu'il vienne ou se sacrifie à jamais.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_9_17",
                    "naration": true
        }
    ]
        },
        'a3_2_9_17': {
            "question": "QTE",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_10",
                    "naration": true
        }
    ]
        },
        'a3_2_10': {
            "question": "RHEA MAGNUS : Oh ! Mais qu'est ce que nous avons la ?",
            "choix": [
                {
                    "text": "Je suis... Ghost ! Je viens t'arrêter pour éviter une grande catastrophe ! ",
                    "data_event": "a3_2_11"
        },
                {
                    "text": "Je vais te buter la gueule ! Tu vas casser la ligne temporel abruti !",
                    "data_event": "a3_2_12"
        }
    ]
        },
        'a3_2_11': {
            "question": "RHEA MAGNUS : Eh bien vas-y jeune citoyen, je vous attend. Mais avant, venez défier mon armée !",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_13",
                    "naration": true
        }
    ]
        },
        'a3_2_12': {
            "question": "RHEA MAGNUS : Oh. Mais quel grossier personnage. Armée divine, donnez moi son corps. Je le veux mort. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_13",
                    "naration": true
        }
    ]
        },
        'a3_2_13': {
            "question": "Vous devez vous battre, QTE de rythme, une musique sera joué en background, le but du joueur est de taper au bon moment les touches du clavier au rythme de la musique. Plus il réussi à taper au bon moment les touches, il affaiblira l'armée.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_14",
                    "naration": true
        }
    ]
        },
        'a3_2_14': {
            "question": "Incroyable ! Vous venez de casser la mâchoire d'un sbire ! (Restant : 65%)",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_15",
                    "naration": true
        }
    ]
        },

        'a3_2_15': {
            "question": "Wow ! Vous évitez deux sbires, vous continuez votre chemin ! (Restant : 35%)",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_16",
                    "naration": true
        }
    ]
        },
        'a3_2_16': {
            "question": "Quel talent ! Vous donnez un uppercut au capitaine de l'armée ! (Restant : 10%)",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_17",
                    "naration": true
        }
    ]
        },
        'a3_2_17': {
            "question": "Vous êtes devant Rhea Magnus, un peu choqué par la situation. Vous êtes essoufflé par la bataille. Vous regardez Rhea Magnus d'un regard rempli de haine. ",
            "choix": [
                {
                    "text": "C'est toi... Rainmaker... ",
                    "data_event": "a3_2_17_1"
        },
                {
                    "text": "C'est fini pour toi Rhea Magnus. ",
                    "data_event": "a3_2_17_2"
        }
    ]
        },
        'a3_2_17_1': {
            "question": "RHEA MAGNUS : Hahaha, c'est la première fois que j'entends ça. Bon fini de jouer, on dirait. Tu m'as suffisamment diverti. Allez salut. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_18",
                    "naration": true
        }
    ]
        },
        'a3_2_17_2': {
            "question": "Hahaha. C'est la première fois que je vois ça. Mais tu ne me connais pas. Tu m'as suffisamment diverti. Allez salut. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_2_18",
                    "naration": true
        }
    ]
        },
        'a3_2_18': {
            "question": "Choqué et déçu par la situation vous restez bouche bée. Comme si la fin de la bataille vous avez frustré. Un gros silence religieux se fait dans la cour. Quand tout à coup.\nVENTURANA : ...Il nous a sauvé.\nC'est une jeune femme blonde qui a percé le silence. VENTURANA : ...Ce héros...Merci... Pharaon...Pharaon...\nTout le monde commence à chuchoter \"Pharaon\" de plus en plus fort comme un chant du peuple. Vous sentez une énergie très forte qui vous est destiné. Vous tiltez maintenant que le premier pharaon qui a percé dans l'Histoire c’est... vous.\nVous avez rectifié l'histoire, mais il est temps de retrouver ce Rainmaker. Vous sortez de la scène et consommez le restant des pulsars que vous avez pour continuer à sauver le temps.\n        Incroyable, vous cassez la mâchoire d'un sbire ! (Restant : 65%)\n  Wow, vous évitez deux sbires, vous continuez le chemin ! (Restant : 35%)\nQuel talent ! Vous donnez un uppercut au plus fort de l'armée ! (Restant : 10%)\nC'est toi Rain..Maker.\n  Vous êtes devant Rhea Magnus, un peu choqué par la situation. Vous êtes essouflé par la bataille. Vous regarder Rhea Magnus d'un regard très haineux.\nHahaha, c'est la première fois que je vois ça. Mais tu ne me connais pas. Tu m'as suffisamment diverti. Allez salut.\n   C'est fini pour toi Rhea Magnus.\n  Rhea Magnus sort de la scène et d'un coup... Disparaît.\nIl est temps de partir. Destination.... (Choisissez une date)",
            "choix": [
                {
                    "text": "",
                    success: 9,
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },



        'a3_3': {
            "question": "Bienvenue en France",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_1",
                    "naration": true
        }
    ]
        },
        'a3_3_1': {
            "question": "Vous vous retrouvez abasourdi. Selon la couleur du ciel, le soleil vient seulement de se lever. D’après l’architecture des bâtiments et l’odeur nauséabonde qui règne, vous êtes à coup sûr arrivé à votre destination. Vous avancez dans l'impasse en direction d’une rue. La rue n’est pas très peuplée, mais déjà à cette heure matinale.",
            "choix": [
                {
                    "text": "Vous apercevez un groupe de courtisanes.",
                    "data_event": "a3_3_1_1"
        },
                {
                    "text": "Vous entendez un crieur au loin. ",
                    "data_event": "a_3_3_1_2"
        }
    ]
        },
        'a3_3_1_1': {
            "question": "Vous vous dirigez vers elles et vous les entendez parler :\n COURTISANE 1 : “Vous avez entendu parler de ce qu’il risque de se passer aujourd’hui ?\nCOURTISANES : “Non, raconte.”\nCOURTISANE 1 : “Eh bien à en croire les rumeurs qui circule. Il parait que des dignitaires vont se réunir sans l’accord du Roi pour décider de le renverser et signer je ne sais quoi. Mais le pire dans tout ça, c’est qu’un dignitaire serait en danger de mort.”\nCOURTISANE 2 : “Comment as-tu eu vent de ces rumeurs ?”\nCOURTISANE 1 : “C’est ce qu’on entend à la maison des plaisirs.”",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_2",
                    "naration": true
        }
    ]
        },
        'a_3_3_1_2': {
            "question": "Vous vous dirigez vers le crieur\n CRIEUR : “Oyez, oyez ! Les dernières nouvelles ne sont pas bonnes ! Des rumeurs circulent sur un supposé complot pour renverser notre Roi. Il est donc recommandé de ne pas s’aventurer trop loin de vos chaumières.”",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_2",
                    "naration": true
        }
    ]
        },
        'a3_3_2': {
            "question": "Vous en profitez pour vous renseigner ! ",
            "choix": [
                {
                    "text": "Excusez-moi ! Savez-vous où est signé le serment ?",
                    "data_event": "a3_3_2_1"
        },
                {
                    "text": "Quand aura lieu la signature ?",
                    "data_event": "a_3_3_2_2"
        }
    ]
        },
        'a3_3_2_1': {
            "question": "- Il parait que les dignitaires se rendront à Versailles. Je ne peux en dire plus sans risque de me faire tuer.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_3",
                    "naration": true
        }
    ]
        },

        'a_3_3_2_2': {
            "question": "- Je ne sais pas exactement. Mais ils sont censés le signer aujourd'hui. Ils sont certainement déjà en train de se réunir.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_3",
                    "naration": true
        }
    ]
        },
        'a3_3_3': {
            "question": "Vous ne savez pas comment parvenir au château. À vrai dire, vous ne savez même pas où vous avez atterri.",
            "choix": [
                {
                    "text": "Vous demandez au premier passant que vous croisez où vous êtes.",
                    "data_event": "a3_3_3_1"
        },
                {
                    "text": "Vous n’avez pas de temps à perdre. Vous commencez à marcher.",
                    "data_event": "a3_3_3_2"
        }
    ]
        },
        'a3_3_3_1': {
            "question": "- Vous : “Excusez-moi, pouvez-vous m’indiquer où sommes-nous ?”\n- Passant : “Eh bien, mon brave vous êtes à Vincennes. Auriez-vous bu quelques sortes de boissons alcoolisées ? C’est écrit devant vous.”",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_4",
                    "naration": true
        }
    ]
        },
        'a3_3_3_2': {
            "question": "Vous continuez à avancer jusqu'à ce que vous tombiez sur un panneau qui vous indique que vous êtes à Vincennes. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_4",
                    "naration": true
        }
    ]
        },
        'a3_3_4': {
            "question": "Vous n’êtes pas vraiment tombé au meilleur des endroits, mais cela aurait pu être pire.\nLe lieu de signature est à l'opposé de votre position. Pour vous y rendre, vous avez deux solutions :",
            "choix": [
                {
                    "text": "Vous demandez aux calèches que vous croisez si elles peuvent vous amenez à Versailles.",
                    "data_event": "a3_3_4_1"
        },
                {
                    "text": "Vous commencez à marchez vers Versailles à vos risques et périls...",
                    "data_event": "a3_3_4_2"
        }
    ]
        },
        'a3_3_4_1': {
            "question": "CALÈCHE 1 : - “Je n’ai pas de temps à perdre avec vous pleutre...”\nCALÈCHE 2 : - “Vous avez des Louis d’or ?”\nOui : - “Oui. Je vous donne X Louis d’or une fois à destination. (vous menez)",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_4_1_0",
                    "naration": true
        }
    ]
        },
        'a3_3_4_1_0': {
            "question": "> Choix du nombre (plus le nombre est grand plus il à de chance d’être accepté.)",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_4_1_1",
                    "naration": true
        }
    ]
        },
        'a3_3_4_1_1': {
            "question": "Non : (CALÈCHE 3)\n> CALÈCHE 3 : - “On dirait que c’est votre jour de chance, c’est justement ma destination. Montez ! Je vous y amène.”\n- “Merveilleux !”",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_5",
                    "naration": true
        }
    ]
        },
        'a3_3_4_2': {
            "question": "Pendant votre trajet, vous tombez sur des malfrats qui vous volent.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_3_5",
                    "naration": true
        }
    ]
        },
        'a3_3_5': {
            "question": "Le château de Versailles est devant vous. Le soleil commence à décliner sur l’horizon. Vous êtes dans le château, vous apercevez de nombreuses personnes qui convergent en un lieu commun. Vous décidez de les suivre.\nVous entrez dans la salle où le jeu de paume est joué. De nombreuses personnes sont présentes bien plus que vous ne l’avez imaginé.\nC’est une belle cour que vous voyez. Tout est en or comme vous avez vu dans les livres d’Histoire ou dans les documentaires. Au loin, vous apercevez un petit groupe d’une dizaine de personnes qui se distingue des autres. On dirait des nobles. Ils ne se mélangent pas et ne participent pas au débat houleux qui a lieu. Mais vous remarquez que le groupe se sépare. Quelques personnes se dirigent vers la sortie.",
            "choix": [
                {
                    "text": "Vous décidez de rester dans la salle. Si le meurtre aura lieu alors il sera ici.",
                    game_over: true,
                    "data_event": "a_3_3_6"
        },
                {
                    "text": "Cela vous semble beaucoup trop suspect. Vous suivez le groupe qui est sorti.",
                    "data_event": "a3_3_6"
        }
    ]
        },
        'a3_3_6': {
            "question": "Vous suivez le groupe. Ils montent les escaliers rapidement et cela vous semble vraiment suspect. Ils longent un grand couloir et rentrent dans une pièce. Vous courez rapidement et discrètement vers la salle. Vous ne pouvez pas entrer et si vous écoutez à travers la porte vous pouvez être découvert.",
            "choix": [
                {
                    "text": "Vous allez dans une des pièces adjacentes.",
                    "data_event": "a3_3_6_1"
        },
                {
                    "text": "  Vous restez derrière la porte de la pièce à vos risques et ",
                    "data_event": "a3_3_6_2"
        }
    ]
        },
        'a3_3_6_1': {
            "question": "Vous devez choisir entre deux pièces : ",
            "choix": [
                {
                    "text": "Celle de gauche : vous arrivez dans une pièce où par chance une porte donnant sur la pièce à côté vous permet d'écouter la conversation sans être découvert.",
                    "data_event": "a3_3_6_2"
        },
                {
                    "text": "Celle de droite : vous entrez dans la pièce où vous apercevez un balcon mitoyen avec la pièce où sont présent les comploteurs. Ce balcon vous permet d’entendre distinctement et discrètement la discussion. De plus il vous donne une vue partielle de la pièce. C’est alors que vous apercevez les comploteurs ainsi qu’une personne assise dans un fauteuil. Les mains croisées, proche de son visage, parlant d’une voix forte et distincte. Immédiatement, une sensation bizarre vous envahie. Et une sensation de déjà vu. C’est comme si vous le connaissiez sans le connaître.",
                    "data_event": "a3_3_6_2"
        }
    ]
        },
        'a3_3_6_2': {
            "question": "- Homme au fauteuil (Rainmaker) : “La personne que vous devrez tuer est le marquis de Brézé. Sans lui la signature du serment du Jeu de Paume ne se fera pas. Et ainsi nous pourrons prendre le pouvoir au Roi Louis XVI.”\n- Comploteur 1 : “Vous nous assurez de notre place dans votre futur règne ?”\n- Homme au fauteuil (Rainmaker) : “Bien sûr mes chers amis ! Bien sûr ! Tout travail mérite salaire. Vous serez en plus généreusement récompensé. Argents, courtisanes et alcools couleront à flots pour vous. Puis sans vous je n’en serai jamais arrivé là. Vous avez ma parole.”\n- Comploteur 2 : “Très bien alors, nous allons tuer ce Marquis.”\n- Homme au fauteuil (Rainmaker) : “Assurez-vous qu’il soit bel et bien mort ! C’est important. Sans cela vous pouvez dire adieu à vos futurs privilèges”\n- Comploteur 3 : “Nous avons engagé un des meilleurs assassins d’Europe pour cette occasion. Nous allons ordonner à l’assassin de tuer le marquis d’un des balcons vide de la salle comme vous l’avez demandé.”\n- Homme au fauteuil (Rainmaker) : “Très bien. Me voilà un peu plus réconforté. Vous pouvez partir, votre absence ne doit pas être remarquée plus longtemps.”\nLes comploteurs quittent la pièce.",
            "choix": [
                {
                    "text": "Vous quitter aussi les lieux.",
                    "data_event": "a3_3_6_2_1"
        },
                {
                    "text": "Vous décidez de rester un peu.",
                    "data_event": "a3_3_6_2_2"
        }
    ]
        },
        'a3_3_6_2_1': {
            "question": "Vous parcourez alors le couloir d'où vous êtes venu. Vous vous arrêtez devant les escaliers où vous remarquez cette fois deux couloirs à votre gauche et un à votre droite, c’est alors qu’il vous semble avoir aperçu le temps d’un instant une ombre tournée à l’angle du prochain couloir.",
            "choix": [
                {
                    "text": " Vous prenez le couloir de gauche. (10s)",
                    "data_event": "a3_3_6_2_1_1"
        },
                {
                    "text": "Vous prenez le couloir de droite. (10s)",
                    "data_event": "a3_3_6_2_1_2"
        }
    ]
        },
        'a3_3_6_2_1_1': {
            "question": "Vous longez ce couloir jusqu’à l’angle où vous jetez un regard discret sur le prochain couloir. Rien, ni personne.",
            "choix": [
                {
                    "text": "Vous faites demi-tour.",
                    "data_event": "a3_3_6_2_1"
        },
                {
                    "text": "Vous continuez. Dans un renforcement, à votre droite se trouve une porte. Vous l’ouvrez et vous vous trouvez face au balcon où se tient l’assassin qui se tient prêt à tirer avec un mousquet. Vous regardez autour de vous et apercevez que votre balcon possède aussi un mousquet.",
                    "data_event": "a3_3_6_2_1_1_1"
        }
    ]
        },
        'a3_3_6_2_1_1_1': {
            "question": "Que décidez-vous ? ",
            "choix": [
                {
                    "text": "Vous ne faites rien. Le coup de feu retentit. L’assassin se retourne et s’enfuit à travers le couloir d'où il est venu. Vous vous approchez de la balustrade. Vous voyez le marquis étendu sur le sol, sans vie. Tout le monde regarde dans la direction du coup de feu.",
                    game_over: true,
                    "data_event": "a3_3_6_3"
        },
                {
                    "text": " Vous prenez le mousquet déjà armé et tirez sur l’assassin. Vous le touchez il tombe raide mort. Les gens sont affolés par le coup de feu. Vous leur criez : “Soyez tranquille ! Cet homme a tenté de porter atteinte à la vie du marquis.",
                    game_over: true,
                    "data_event": "a3_3_6_3"
        }
    ]
        },
        'a3_3_6_2_1_2': {
            "question": "Vous longez ce couloir jusqu’à l’angle où vous jetez un regard discret sur le prochain couloir. Rien, ni personne.",
            "choix": [
                {
                    "text": "Vous faites demi-tour ",
                    "data_event": "a3_3_6_2_1"
        },
                {
                    "text": "Vous continuez. Dans un renforcement, à votre droite se trouve une porte. Vous l’ouvrez et vous vous retrouvez face à l'assassin se tenant prêt à tirer avec un mousquet. [Timer très rapide 3/5 seconde ? Si pas de choix alors choix par défaut : impassible]",
                    "data_event": "a3_3_6_3"
        }
    ]
        },
        'a3_3_6_3': {
            "question": "Que faites-vous ? ",
            "choix": [
                {
                    "text": "Vous sautez sur l’assassin pour lui faire manquer son tir. Le coup de feu retentit, mais par chance sa cible n’est que légèrement blessée. L’assassin vous repousse et s’enfuit.",
                    "data_event": "a3_3_7"
        },
                {
                    "text": "Vous restez impassible. Le coup de feu retentit. L’assassin ayant terminé son travail se retourne et vous aperçoit. Il vous bouscule et s’enfuit à travers le couloir. Vous vous approchez de la balustrade. Vous voyez un homme étendu sur le sol, sans vie. Tout le monde regarde dans votre direction. - “Il a tué le marquis ! Attrapez-le !” Vous ne vous faites pas attendre pour emboîter le pas de l’assassin. Pour vous cacher dans les pièces dont vous avez écouté la conversation.",
                    "data_event": "a3_3_8"
        }
    ]
        },
        'a3_3_7': {
            "question": "Vous avez quand même sauvez le marquis d’une mort certaine.\nVous avez participer un événement majeur de la France.\nIl est temps de partir pour vous. Destination... (Le joueur choisit son temps)",
            "choix": [
                {
                    "text": "",
                    get_success: 10,
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },
        'a3_3_8': {
            "question": "Par l’aide des médecins présent dans la pièce. Le marquis s’en est sorti vivant. Et le serment à pu être finalement",
            "choix": [
                {
                    "text": "",
                    get_success: 10,
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },

        'a3_4': {
            "question": "Vous décidez de voyagez dans le temps après ce long voyage. Quelle date choisissez vous ?",
            "choix": [
                {
                    "text": "2012",
                    "data_event": "a3_4_1"
        },
                {
                    "text": "3123",
                    "data_event": "a3_4_2"
        },
                {
                    "text": "9999",
                    "data_event": "a3_4_3"
        },
                {
                    "text": "2000 ",
                    "data_event": "a3_4_4"
        }
    ]
        },
        'a3_4_1': {
            "question": "Cette année est une année qui changera totalement le visage de l'histoire. Je suis à New-York, il me semble. Devant moi, il y a cette belle tour avec des tonnes de publicités. Je regarde ma montre, il est 9h51. J'ai des frissons, je sais ce qui va se passer. Je ne peux pas dire aux gens, ils me prendront pour un(e) fou/folle. Je sirote mon café au lait de chez Starbucks Coffee et je m'en vais de suite pour tenir ma promesse à Chronos. Allons trouver ce fichu Rainmaker.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },
        'a3_4_2': {
            "question": "Mais qu'est-ce que cette ville ? On dirait un Time Square en mode science-fiction ! Tout est sur-connecté ! J'aperçois à côté de moi un petit teckel qui se fait balader par... Un drone ?! Ce petit chien me sourit avec sa langue qui lèche l'air chaud de New-York. Incroyable. Finis les bêtises, j'ai fais une promesse à Chronos... ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },
        'a3_4_3': {
            "question": "Oh bordel, mais qu'est-ce qu'il fait froid ! Je n'ai jamais rien ressenti de tel. Où je suis ? On dirait un désert de neige. Je vois une civilisation au loin, je ne sais pas si je peux les approcher. Le soleil est couvert par un voile de nuage. L'air que je respire est étrange, elle est trop froide pour moi. Mes mouvements sont plus lourds qu'auparavant. Pourtant, je n'ai qu'un manteau sur moi. Je dois m'enfuir à tout prix de là !",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4",
                    "naration": true
        }
    ]
        },
        'a3_4_4': {
            "question": "Vous êtes à Time Square, vous rencontrez un prophète qui vous raconte une histoire... Il l'a vu de nombreuses fois dans ses visions. \nPROPHÈTE : La personne que vous voulez se trouve ici, c'est une personne hors du temps. Vous avez obtenu des indices lors de vos voyages, vous devez vous en souvenir pour retrouver celui que vous cherchez.",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4_5",
                    "naration": true
        }
    ]
        },
        'a3_4_5': {
            "question": "JEUX QUI EST CE ! ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4_6",
                    "naration": true
        }
    ]
        },
        'a3_4_6': {
            "question": "Vous avez trouvé Rainmaker ! Vite il s'enfuit ! ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4_7",
                    "naration": true
        }
    ]
        },
        'a3_4_7': {
            "question": "JEUX QTE RAPIDITÉ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4_8",
                    "naration": true
        }
    ]
        },
        'a3_4_8': {
            "question": "Vous avez réussi à rattraper Rainmaker ! Que voulez-vous faire maintenant ?",
            "choix": [
                {
                    "text": "Tuer Rainmaker ! ",
                    "data_event": "a3_4_8_1"
        },
                {
                    "text": "L'attraper pour le livrer à Chronos.",
                    "data_event": "a3_4_8_2"
        }
    ]
        },
        'a3_4_8_1': {
            "question": "Vous tentez de le tuez. Mais vous êtes encore trop faible. Il vous contre.\nRAINMAKER : Tu ne connais pas mes pouvoirs, espère de sot. ",
            "choix": [
                {
                    "text": "",
                    "data_event": "a3_4_8_1_1",
                    "naration": true
        }
    ]
        },
        'a3_4_8_1_1': {
            "question": "Rainmaker a shapeshifté sur une autre personne qui regarde la scène. Vous venez de vous rendre compte qu'il allait tuer une jeune femme apeurée par la situation et qu'elle n'avait rien demandé.\nRAINMAKER : Tu n'as pas vraiment de coeur toi. Tu as voulu mettre fin à ma vie. Tu ne connais pas le prix d'une vie. On va voir ce qui se passe quand on s'attaque aux gens qui te sont chères.",
            "choix": [
                {
                    "text": "",
                    "data_event": "end3",
                    "naration": true
        }
    ]
        },
        'a3_4_8_2': {
            "question": "Vous l'attrapez. Mais il se débarrasse de vous en un claquement de doigt. Vous êtes encore trop faible pour pouvoir le défier... Il utilise ses pouvoirs. Rainmaker a shapeshifté sur une autre personne qui regarde la scène. Vous venez de vous rendre compte qu'il allait capturer une jeune femme apeurée par la situation et qui n'avait rien demandé. Il disparaît.",
            "choix": [
                {
                    "text": "",
                    "data_event": "end3",
                    "naration": true
        }
    ]
        },

        end3: {
            stop_act: true,
        },
    },

    act_4: {
        prologue: {
            citation: '"Le meilleur succès est souvent né avec un grand sacrifice, et n\'est jamais le résultat d\'un égoïste."',
            "author": "John Mayer",
            "number": 4,
            "title": "Une rengaine fatale",
            data_event: 'a4_0',
        },
        end4: {
            stop_act: true,
        },
    },
    act_5: {
        prologue: {
            citation: '"Un héro est une persone qui a donné toute sa vie pour faire naître quelque chose de plus grand que sa propre vie."',
            "author": "Joseph Campbell",
            "number": 5,
            "title": "La fin justifie les moyens",
            data_event: 'a5_0',
        },
        end5: {
            stop_game: true,
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


function update_data(username) {
    var new_data = JSON.stringify(data);
    var target = user.name + token;
    var regex = new RegExp(target, "g");
    if (new_data.match(regex) !== null) {
        console.log('LETS GO : ' + new_data.match(regex).length + ' LEFT');
        console.log('CURRENT NAME -> ' + target + ' // NEW NAME ->' + username);
        new_data = new_data.replace(target, username);
        while (regex.exec(new_data) !== null) {

            new_data = new_data.replace(target, username);
        }


        new_data = JSON.parse(new_data);
        console.log(new_data);

        user.name = username;
        savegame.erase_save('user_save', user);
        return new_data;
    } else {
        console.error('TOKEN ALREADY USED');
    }

}


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