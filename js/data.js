var data = {
    acte_test: {
        t_0: {
            question: "Vous êtes déprimé par la situation mais gardant espoir vous traversez le portail et les Limbes que vous avez connu a totalement changé. C’est devenu un vrai champ de bataille. Un ciel orageux se trouve sur votre tête, c’est très nuageux et orageux. Vous voyez une grosse bataille devant vous. Les disciples des Limbes se battent contre des monstres venant d’un autre monde.",
            choix: [
                {
                    text: "",
                    data_event: "t_1",
                    naration: true,
                },
            ],

        },
        t_1: {
            question: "ROSE : Hey le nouveau ! Et bien c’est pas trop tôt que tu viens en aide !",
            choix: [
                {
                    text: "Quoi ? Comment ça pas trop tôt ?",
                    data_event: "t_2_0",
                    naration: false,
                },
                {
                    text: "Euh oui mais qu’est-ce qui se passe ?!",
                    data_event: "t_2_1",
                    naration: false,
                },
            ],

        },
        t_2_0: {
            question: "Rainmer a trouvé chronos.....",
            choix: [
                {
                    text: "",
                    data_event: "t_4",
                    naration: true,
                },
            ],

        },
        t_2_1: {
            question: "snkjdlfqsdofjlgsdkldgnfkdsmljl a trouvé chronos.....",
            choix: [
                {
                    text: "",
                    data_event: "t_4",
                    naration: true,
                },
            ],

        },
        t_4: {

        },
    }
}