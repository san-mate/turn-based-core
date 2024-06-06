class Zombie {
    life_points;
    skills;

    move(){
        // zombies move towards the players
        // based on noise, each player has noise asociated
        // when having two paths to move zombies split and "clone" <-- shitty rule
    }
    
    attack(player){
        // gives one wound to the attacked survivor
    }
}

class Walker extends Zombie {
    // XP: 1
}

class Fatty extends Zombie {
    // XP: 1
    // Only takes damanage with weapones > 1
}

class Abomination extends Zombie {
    // XP: 5
    // Only takes damanage with weapones > 2
}

class Runner extends Zombie {
    // XP: 1
    // has two actions (two moves, attack and move, attack two survivors on the same zone)
    // runners first attack, then move
}