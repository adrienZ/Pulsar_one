var user = {};
user.name = "Carl";
user.stats = {
    strenght: 0,
    perception: 0,
    stamania: 0,
    luck: 0,
    intelligence: 0,
    agility: 0,
    loyalty: 0,
};




var data = {
    act_2: {
        'a2_0': {
            question: 'Vous êtes à terre, les yeux fermés avec une très grosse migraine. Tout autour de vous semble être que du vide. Vous ne pouvez que sentir un sol très lisse avec vos mains. Il est temps de se lever. Vous essayez d’ouvrir vos yeux...',
            choix: [
                {
                    text: "",
                    data_event: "a2_1",
                    naration: true,
                },
            ],
        },
        'a2_1': {
            question: user.name + ' est à terre, le joueur doit appuyer sur espace au bon moment pour se réveiller.',
            choix: [
                {
                    text: "",
                    data_event: "a2_2",
                    naration: true,
                },
            ],
        },
        'a2_2': {
            question: 'Vous ouvrez le yeux. Au dessus de vous, une entité divine vous guette. C’est Chronos.',
            choix: [
                {
                    text: "",
                    data_event: "a2_3",
                    naration: true,
                },
            ],
        },

        'a2_3': {
            question: 'Chronos : ' + user.name + ' ! Destinée m’a annoncée ta fin prochaine. J’ai besoin de ton aide. Je veux te laisser une seconde chance.',
            timer: 5,
            choix: [
                {
                    text: "Je suis déjà mort ?",
                    data_event: "a2_4_0",
                    naration: false,
                },
                {
                    text: "Quoi ? Qui êtes-vous ?",
                    data_event: "a2_4_1",
                    naration: false,
                },
                {
                    text: "Mais attendez où je suis ?",
                    data_event: "a2_4_2",
                    naration: false,
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
                    naration: false,
                },
                {
                    text: "Non je dois rêver, ce n’est pas possible.",
                    data_event: "a2_4_2",
                    naration: false,
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
                    naration: false,
                },
            ],
        },
        'a2_6': {
            question: 'Chronos : Toi, tu es particulier. J’ai vu ton potentiel au-delà. J’ai vu ta puissance. J’aurai besoin de ton aide pour l’abattre. Il est imprévisible et je ne peux pas le battre toutseul.Dans les limbes, je t’enseignerai le pouvoir que tu possèdes au sein de ton esprit. Aide-moi, ton destin est en jeu.',
            choix: [
                {
                    text: "Bah le problème c’est que je n’ai pas que ça à faire et vous savez...",
                    data_event: "a2_7_0",
                    naration: false,
                },
                {
                    text: "Et pourquoi D’accord. Je vous aiderai. J’essayerai.",
                    data_event: "a2_7_1",
                    naration: false,
                },
            ],
        },
        'a2_7_0': {
            question: 'Chronos : Ah, donc tu ne veux pas m’aider ? Tu est sûr ?',
            choix: [
                {
                    text: "Oui",
                    data_event: "a2_7_0",
                    naration: false,
                },
                {
                    text: "Bon en fait, je veux bien vous aider. J’ai eu peur sur le coup.",
                    data_event: "a2_4_1",
                    naration: false,
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
                    naration: false,
                },
                {
                    text: "Vous êtes Rose ?",
                    data_event: "a2_10_1",
                    naration: false,
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
    },

}