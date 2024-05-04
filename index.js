const heroes = [
    {
        nome: "Alastor",
        victories: 11,
        losses: 4
    },
    {
        nome: "Bryanna",
        victories: 60,
        losses: 50
    },
    {
        nome: "Charlie",
        victories: 60,
        losses: 3
    },
    {
        nome: "Daymon",
        victories: 95,
        losses: 13
    },
    {
        nome: "Elba",
        victories: 130,
        losses: 36
    },
    {
        nome: "Fenryr",
        victories: 78,
        losses: 23
    },
    {
        nome: "Gonzaga",
        victories: 180,
        losses: 18
    },
    {
        nome: "Hylda",
        victories: 74,
        losses: 36
    }
]

function getBalance(hero) {
    return hero.victories - hero.losses;
}

function getRank(victoryBalance) {
    let level = ''
    switch(true) {
        case (victoryBalance < 10):
            level = 'Ferro';
            break;
        case (victoryBalance < 20):
            level = 'Bronze';
            break;
        case (victoryBalance < 50):
            level = 'Prata';
            break;
        case (victoryBalance < 80):
            level = 'Ouro';
            break;
        case (victoryBalance < 90):
            level = 'Diamante';
            break;        
        case (victoryBalance < 100):
            level = 'Lendário';
            break;
        case (victoryBalance > 100):
            level = 'Imortal';
            break;
        default:
            level = 'invalid input'
            break;
    }

    return level;
}

for (const [index, hero] of Object.entries(heroes)) {
    const balance = getBalance(hero);
    const rank = getRank(balance)
    console.log(`O herói tem saldo de **{${balance}}** vitórias e está no nível de **{${rank}}**`)
}

