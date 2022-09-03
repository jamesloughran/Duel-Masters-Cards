const express = require('express')
const app = express()
const PORT = 8000

const cards = {
    '1':{
        'name': 'Chilias, the Oracle', 
        'race': 'Light Bringer', 
        'card cost': 4, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "When this creature would be destroyed, put it into your hand instead.", 
        'power': 2500,
        'mana number': 1,
    },
    '2':{
        'name': 'Dia Nork, Moonlight Guardian', 
        'race': 'Guardian', 
        'card cost': 4, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players.",
        'power': 5000,
        'mana number': 1,
    },
    '3':{
        'name': 'Emerald Grass', 
        'race': 'Starlight Tree', 
        'card cost': 2, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players.", 
        'power': 3000,
        'mana number': 1,
    },
    '4':{
        'name': 'Frei, Vizier of Air', 
        'race': 'Initate', 
        'card cost': 4, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': " At the end of each of your turns, you may untap this creature.", 
        'power': 3000,
        'mana number': 1,
    },
    '5':{
        'name': 'Gran Gure, Space Guardian', 
        'race': 'Guardian', 
        'card cost': 6, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players.", 
        'power': 9000,
        'mana number': 1,
    },
    '6':{
        'name': 'Holy Awe', 
        'card cost': 6, 
        'civilization': 'Light', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Tap all your opponent's creatures in the battle zone.",
        'mana number': 1,
    },
    '7':{
        'name': 'Iere, Vizier of bullets', 
        'race': 'Initate', 
        'card cost': 3, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text':"", 
        'power': 3000,
        'mana number': 1,
    },
    '8':{
        'name': 'Iocant, the Oracle', 
        'race': 'Light Bringer', 
        'card cost': 2, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ While you have at least 1 Angel Command in the battle zone, this creature gets +2000 power. ■ This creature can't attack players.", 
        'power': '2000+',
        'mana number': 1,
    },
    '9':{
        'name': 'La Ura Giga, Sky Guardian', 
        'race': 'Guardian', 
        'card cost': 1, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players.", 
        'power': 2000,
        'mana number': 1,
    },
    '10':{
        'name': 'Lah, Purifaction Enforcer', 
        'race': 'Berserker', 
        'card cost': 4, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': '', 
        'power': 5500,
        'mana number': 1,
    },
    '11':{
        'name': 'Laser Wing',  
        'card cost': 5, 
        'civilization': 'Light', 
        'card type': 'Spell', 
        'card text': "■ Choose up to 2 of your creatures in the battle zone. They can't be blocked this turn.", 
        'mana number': 1,
    },
    '12':{
        'name': 'Lok, Vizier of Hunting', 
        'race': 'Initiate', 
        'card cost': 4, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': '', 
        'power': 4000,
        'mana number': 1,
    },
    '13':{
        'name': 'Miele, Vizier of Lightning', 
        'race': 'Initiate', 
        'card cost': 3, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, you may choose one of your opponent's creatures in the battle zone and tap it.", 
        'power': 1000,
        'mana number': 1,
    },
    '14':{
        'name': 'Moonlight Flash',  
        'card cost': 4, 
        'civilization': 'Light', 
        'card type': 'Spell', 
        'card text': "■ Choose up to 2 of your opponent's creatures in the battle zone and tap them.",
        'mana number': 1,
    },
    '15':{
        'name': 'Rayla, Truth Engforcer', 
        'race': 'Berserker', 
        'card cost': 6, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, search your deck. You may take a spell from your deck, show that spell to your opponent, and put it into your hand. Then shuffle your deck.",
        'power': 3000,
        'mana number': 1,
    },
    '16':{
        'name': 'Reusol, the Oracle', 
        'race': 'Light Bringer', 
        'card cost': 2, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': '', 
        'power': 2000,
        'mana number': 1,
    },
    '17':{
        'name': 'Ruby Grass', 
        'race': 'Starlight Tree', 
        'card cost': 3, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players. ■ At the end of each of your turns, you may untap this creature.", 
        'power': 3000,
        'mana number': 1,
    },
    '18':{
        'name': 'Senatine Jade Tree', 
        'race': 'Starlight Tree', 
        'card cost': 3, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "(When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players.", 
        'power': 4000,
        'mana number': 1,
    },
    '19':{
        'name': 'Solar Ray',  
        'card cost': 2, 
        'civilization': 'Light', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Choose one of your opponent's creatures in the battle zone and tap it.", 
        'mana number': 1,
    },
    '20':{
        'name': 'Sonic Wing', 
        'card cost': 3, 
        'civilization': 'Light', 
        'card type': 'Spell', 
        'card text': "■ Choose one of your creatures in the battle zone. It can't be blocked this turn.", 
        'mana number': 1,
    },
    '21':{
        'name': 'Szubs Kin, Twilight Guardian', 
        'race': 'Guardian', 
        'card cost': 5, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "(When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack players.", 
        'power': 6000,
        'mana number': 1,
    },
    '22':{
        'name': 'Toel, Vizier of Hope', 
        'race': 'Initiate', 
        'card cost': 5, 
        'civilization': 'Light', 
        'card type': 'Creature', 
        'card text': "■ At the end of each of your turns, you may untap all your creatures in the battle zone.", 
        'power': 2000,
        'mana number': 1,
    },
    
    
    '111':{
        'name': '?', 
        'race': '?', 
        'card cost': '?', 
        'civilization': '?', 
        'card type': '?', 
        'card text': '?', 
        'power': '?',
        'mana number': '?',
    },
    
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:cardNumber', (request, response)=>{
    const cardNumber = request.params.cardNumber
    if(cards[cardNumber]){
        response.json(cards[cardNumber])
    }
    else{
        response.json(cards['111'])
    }
    // response.json(cards)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})