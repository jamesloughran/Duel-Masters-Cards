const express = require('express')
const app = express()
const PORT = 8000

const cards = {

    // light civilization
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

    // water civilization
    '23':{
        'name': 'Aqua Hulcus', 
        'race': 'Liquid People', 
        'card cost': 3, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, you may draw a card.", 
        'power': 2000,
        'mana number': 1,
    },
    '24':{
        'name': 'Aqua Knight', 
        'race': 'Liquid People', 
        'card cost': 5, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When this creature would be destroyed, return it to your hand instead.", 
        'power': 4000,
        'mana number': 1,
    },
    '25':{
        'name': 'Aqua Soldier', 
        'race': 'Liquid People', 
        'card cost': 3, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When this creature would be destroyed, return it to your hand instead.", 
        'power': 1000,
        'mana number': 1,
    },
    '26':{
        'name': 'Aqua Vehicle', 
        'race': 'Liquid People', 
        'card cost': 2, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "", 
        'power': 1000,
        'mana number': 1,
    },
    '27':{
        'name': 'Brain Serum',  
        'card cost': 4, 
        'civilization': 'Water', 
        'card type': 'Spell', 
        'card text': " Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Draw up to 2 cards.", 
        'mana number': 1,
    },
    '28':{
        'name': 'Candy Drop', 
        'race': 'Cyber Virus', 
        'card cost': 3, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ This creature can't be blocked.", 
        'power': 1000,
        'mana number': 1,
    },
    '29':{
        'name': 'Crystal Memory', 
        'card cost': 4, 
        'civilization': 'Water', 
        'card type': 'Spell', 
        'card text': " Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Search your deck. You may take a card from your deck and put it into your hand. Then shuffle your deck.", 
        'mana number': 1,
    },
    '30':{
        'name': 'Faerie Child', 
        'race': 'Cyber Virus', 
        'card cost': 4, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ This creature can't be blocked.", 
        'power': 2000,
        'mana number': 1,
    },
    '31':{
        'name': 'Hunter Fish', 
        'race': 'Fish', 
        'card cost': 2, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack.", 
        'power': 3000,
        'mana number': 1,
    },
    '32':{
        'name': 'Illusionary Merfolk', 
        'race': 'Gel Fish', 
        'card cost': 5, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, if you have a Cyber Lord in the battle zone, draw up to 3 cards.", 
        'power': 4000,
        'mana number': 1,
    },
    '33':{
        'name': 'King Coral', 
        'race': 'Leviathan', 
        'card cost': 3, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.)", 
        'power': 1000,
        'mana number': 1,
    },
    '34':{
        'name': 'King Ripped-Hide', 
        'race': 'Leviathan', 
        'card cost': 7, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, draw up to 2 cards.", 
        'power': 5000,
        'mana number': 1,
    },
    '35':{
        'name': 'Marine Flower', 
        'race': 'Cyber Virus', 
        'card cost': 1, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack.", 
        'power': 2000,
        'mana number': 1,
    },
    '36':{
        'name': 'Phantom Fish', 
        'race': 'Gel Fish', 
        'card cost': 3, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack.", 
        'power': 4000,
        'mana number': 1,
    },
    '37':{
        'name': 'Revolver Fish', 
        'race': 'Gel Fish', 
        'card cost': 4, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack.", 
        'power': 5000,
        'mana number': 1,
    },
    '38':{
        'name': 'Saucer-Head Shark', 
        'race': 'Gel Fish', 
        'card cost': 5, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, return all creatures in the battle zone that have power 2000 or less to its owner's hand.", 
        'power': 3000,
        'mana number': 1,
    },
    '39':{
        'name': 'Seamine', 
        'race': 'Fish', 
        'card cost': 6, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.)", 
        'power': 4000,
        'mana number': 1,
    },
    '40':{
        'name': 'Spiral Gate',  
        'card cost': 2, 
        'civilization': 'Water', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Choose a creature in the battle zone and return it to its owner's hand.", 
        'mana number': 1,
    },
    '41':{
        'name': 'Teleportation',  
        'card cost': 5, 
        'civilization': 'Water', 
        'card type': 'Spell', 
        'card text': "■ Choose up to 2 creatures in the battle zone and return them to their owners' hands.",
        'mana number': 1,
    },
    '42':{
        'name': 'Tropico', 
        'race': 'Cyber Lord', 
        'card cost': 5, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ This creature can't be blocked while you have at least 2 other creatures in the battle zone.", 
        'power': 3000,
        'mana number': 1,
    },
    '43':{
        'name': 'Unicorn Fish', 
        'race': 'Fish', 
        'card cost': 4, 
        'civilization': 'Water', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, you may choose 1 creature in the battle zone and return it to its owner's hand.", 
        'power': 1000,
        'mana number': 1,
    },
    '44':{
        'name': 'Virtual Tripwire',
        'card cost': 3,
        'civilization': 'Water',
        'card type': 'Spell',
        'card text': "■ Choose one of your opponent's creatures in the battle zone and tap it.",
        'mana number': 1,
    },

    // darkness civilization
    '45':{
        'name': 'Black Feather, Shadow of Rage', 
        'race': 'Ghost', 
        'card cost': 1, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, destroy one of your creatures.", 
        'power': 3000,
        'mana number': 1,
    },
    '46':{
        'name': 'Blood Squito', 
        'race': 'Brain Jacker', 
        'card cost': 2, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack. ■ When this creature wins a battle, destroy it.", 
        'power': 4000,
        'mana number': 1,
    },
    '47':{
        'name': 'Bone Assassin, the Ripper', 
        'race': 'Living Dead', 
        'card cost': 4, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ Slayer (When this creature loses a battle, destroy the other creature.)", 
        'power': 2000,
        'mana number': 1,
    },
    '48':{
        'name': 'Bone Spider', 
        'race': 'Living Dead', 
        'card cost': 3, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When this creature wins a battle, destroy it.", 
        'power': 5000,
        'mana number': 1,
    },
    '49':{
        'name': 'Creeping Plague',  
        'card cost': 1, 
        'civilization': 'Darkness', 
        'card type': 'Spell', 
        'card text': '■ Whenever any of your creatures becomes blocked this turn, it gets "slayer" until the end of the turn. (When a creature that has "slayer" loses a battle, destroy the other creature.)',
        'mana number': 1,
    },
    '50':{
        'name': 'Dark Clown', 
        'race': 'Brain JAcker', 
        'card cost': 4, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack. ■ When this creature wins a battle, destroy it.", 
        'power': 6000,
        'mana number': 1,
    },
    '51':{
        'name': 'Dark Raven, Shadow of Grief', 
        'race': 'Ghost', 
        'card cost': 4, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.)", 
        'power': 1000,
        'mana number': 1,
    },
    '52':{
        'name': 'Dark Reversal',  
        'card cost': 2, 
        'civilization': 'Darkness', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Return a creature from your graveyard to your hand.",
        'mana number': 1,
    },
    '53':{
        'name': 'Death Smoke', 
        'card cost': 4, 
        'civilization': 'Darkness', 
        'card type': 'Spell', 
        'card text': "■ Destroy one of your opponent's untapped creatures.",
        'mana number': 1,
    },
    '54':{
        'name': 'Ghost Touch',
        'card cost': 2, 
        'civilization': 'Darkness', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Your opponent discards a card at random from his hand.",
        'mana number': 1,
    },
    '55':{
        'name': 'Gigaberos', 
        'race': 'Chimera', 
        'card cost': 5, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, destroy 2 of your creatures or destroy this creature. ■ Double breaker (This creature breaks 2 shields.)", 
        'power': 8000,
        'mana number': 1,
    },
    '56':{
        'name': 'Gigagiele', 
        'race': 'Chimera', 
        'card cost': 5, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ Slayer (When this creature loses a battle, destroy the other creature.)", 
        'power': 3000,
        'mana number': 1,
    },
    '57':{
        'name': 'Gigagon', 
        'race': 'Chimera', 
        'card cost': 8, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, return up to 2 creatures from your graveyard to your hand.", 
        'power': 3000,
        'mana number': 1,
    },
    '58':{
        'name': 'Masked Horror, Shadow of Scorn', 
        'race': 'Ghost', 
        'card cost': 5, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, your opponent discards a card at random from his hand.", 
        'power': 1000,
        'mana number': 1,
    },
    '59':{
        'name': 'Night Master, Shadow of Decay', 
        'race': 'Ghost', 
        'card cost': 6, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.)", 
        'power': 3000,
        'mana number': 1,
    },
    '60':{
        'name': 'Skeleton Soldier, the Defiled', 
        'race': 'Living Dead', 
        'card cost': 4, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "", 
        'power': 3000,
        'mana number': 1,
    },
    '61':{
        'name': 'Stinger Worm', 
        'race': 'Parasite Worm', 
        'card cost': 3, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, destroy one of your creatures.", 
        'power': 5000,
        'mana number': 1,
    },
    '62':{
        'name': 'Swamp Worm', 
        'race': 'Parasite Worm', 
        'card cost': 7, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, your opponent chooses one of his creatures and destroys it.", 
        'power': 2000,
        'mana number': 1,
    },
    '63':{
        'name': 'Terror Pit', 
        'card cost': 6, 
        'civilization': 'Darkness', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Destroy one of your opponent's creatures.",
        'mana number': 1,
    },
    '64':{
        'name': 'Vampire Silphy', 
        'race': 'Dark Lord', 
        'card cost': 8, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, destroy all creatures that have power 3000 or less.", 
        'power': 4000,
        'mana number': 1,
    },
    '65':{
        'name': 'Wondering Braineater', 
        'race': 'Living Dead', 
        'card cost': 2, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "Blocker (When an opponent's creature attacks, you may tap this creature to stop the attack. Then the two creatures battle.) ■ This creature can't attack", 
        'power': 2000,
        'mana number': 1,
    },
    '66':{
        'name': 'Writhing Bone Ghoul', 
        'race': 'Living Dead', 
        'card cost': 2, 
        'civilization': 'Darkness', 
        'card type': 'Creature', 
        'card text': "", 
        'power': 2000,
        'mana number': 1,
    },

    // fire civilization

    '67':{
        'name': 'Amrored Walker Urherion', 
        'race': 'Armorloid', 
        'card cost': 4, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ While you have at least 1 Human in the battle zone, this creature gets +2000 power during its attacks.", 
        'power': '3000+',
        'mana number': 1,
    },
    '68':{
        'name': 'Artisan Picora', 
        'race': 'Machine Eater', 
        'card cost': 1, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, put 1 card from your mana zone into your graveyard.", 
        'power': 2000,
        'mana number': 1,
    },
    '69':{
        'name': 'Bolshack Dragon', 
        'race': 'Armored Dragon', 
        'card cost': 6, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ While attacking, this creature gets +1000 power for each fire card in your graveyard. ■ Double breaker (This creature breaks 2 shields.)", 
        'power': '6000+',
        'mana number': 1,
    },
    '70':{
        'name': 'Brawler Zyler', 
        'race': 'Human', 
        'card cost': 2, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ Power attacker +2000 (While attacking, this creature gets +2000 power.)", 
        'power': '1000+',
        'mana number': 1,
    },
    '71':{
        'name': 'Burning Power',  
        'card cost': 1, 
        'civilization': 'Fire', 
        'card type': 'Spell', 
        'card text': '■ One of your creatures gets "power attacker +2000" until the end of the turn. (While attacking, a creature that has "power attacker +2000" gets +2000 power.)',
        'mana number': 1,
    },
    '72':{
        'name': 'Chaos Strike', 
        'card cost': 2, 
        'civilization': 'Fire', 
        'card type': 'Spell', 
        'card text': "■ Choose 1 of your opponent's untapped creatures in the battle zone. Your creatures can attack it this turn as though it were tapped.",
        'mana number': 1,
    },
    '73':{
        'name': 'Crimson Hammer',  
        'card cost': 2, 
        'civilization': 'Fire', 
        'card type': 'Spell', 
        'card text': "■ Destroy 1 of your opponent's creatures that has power 2000 or less.",
        'mana number': 1,
    },
    '74':{
        'name': 'Deadly Fighter Braid Claw', 
        'race': 'Dragonoid', 
        'card cost': 1, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ This creature attacks each turn if able.", 
        'power': 1000,
        'mana number': 1,
    },
    '75':{
        'name': 'Draglide', 
        'race': 'Armored Wyvern', 
        'card cost': 5, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ This creature attacks each turn if able.", 
        'power': 5000,
        'mana number': 1,
    },
    '76':{
        'name': 'Explosive Fighter Ucarn', 
        'race': 'Dragonoid', 
        'card cost': 5, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, put 2 cards from your mana zone into your graveyard. ■ Double breaker (This creature breaks 2 shields.)", 
        'power': 9000,
        'mana number': 1,
    },
    '77':{
        'name': 'Fatal Attacker Horvath', 
        'race': 'Human', 
        'card cost': 3, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ While you have at least 1 Armorloid in the battle zone, this creature gets +2000 power during its attacks", 
        'power': '2000+',
        'mana number': 1,
    },
    '78':{
        'name': 'Fire Sweeper Burning Hellion', 
        'race': 'Dragoniod', 
        'card cost': 4, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ Power attacker +2000 (While attacking, this creature gets +2000 power.)", 
        'power': '3000+',
        'mana number': 1,
    },
    '79':{
        'name': 'Gatling Skyterror', 
        'race': 'Armored Wyvern', 
        'card cost': 7, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ This creature can attack untapped creatures. ​■ Double breaker (This creature breaks 2 shields.)", 
        'power': 7000,
        'mana number': 1,
    },
    '80':{
        'name': 'Immortal Baron, Vorg', 
        'race': 'Human', 
        'card cost': 2, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "", 
        'power': 2000,
        'mana number': 1,
    },
    '81':{
        'name': 'Magma Gazer',  
        'card cost': 3, 
        'civilization': 'Fire', 
        'card type': 'Spell', 
        'card text': '■ One of your creatures gets "power attacker +4000" and "double breaker" until the end of the turn. (A creature that has "power attacker +4000" and "double breaker" gets +4000 power while attacking and breaks 2 shields.)',
        'mana number': 1,
    },
    '82':{
        'name': 'Meteosaur', 
        'race': 'Rock Beast', 
        'card cost': 5, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, destroy one of your opponent's creatures that has power 2000 or less", 
        'power': 2000,
        'mana number': 1,
    },
    '83':{
        'name': 'Nomad Hero Gigio', 
        'race': 'Machine Eater', 
        'card cost': 5, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ This creature can attack untapped creatures.", 
        'power': 3000,
        'mana number': 1,
    },
    '84':{
        'name': 'Onslaughter Triceps', 
        'race': 'Dragoniod', 
        'card cost': 3, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, put 1 card from your mana zone into your graveyard.", 
        'power': 5000,
        'mana number': 1,
    },
    '85':{
        'name': 'Rothus, the Traveler', 
        'race': 'Armorloid', 
        'card cost': 4, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ When you put this creature into the battle zone, destroy one of your creatures. Then your opponent chooses one of his creatures and destroys it.", 
        'power': 4000,
        'mana number': 1,
    },
    '86':{
        'name': 'Stonesaur', 
        'race': 'Rock Beast', 
        'card cost': 5, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ Power attacker +2000 (While attacking, this creature gets +2000 power.)", 
        'power': '2000+',
        'mana number': 1,
    },
    '87':{
        'name': 'Super Explosive Volcanodon', 
        'race': 'Dragonoid', 
        'card cost': 4, 
        'civilization': 'Fire', 
        'card type': 'Creature', 
        'card text': "■ Power attacker +4000 (While attacking, this creature gets +4000 power.)", 
        'power': '2000+',
        'mana number': 1,
    },
    '88':{
        'name': 'Tornado Flame',
        'card cost': 5, 
        'civilization': 'Fire', 
        'card type': 'Spell', 
        'card text': "Shield trigger (When this spell is put into your hand from your shield zone, you may cast it for no cost.) ■ Destroy one of your opponent's creatures that has power 4000 or less.",
        'mana number': 1,
    },

    // nature civilization
    
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