class Action {
    constructor(survivor){
        this.survivor = survivor;
    }
    isAvailable(){
        // checking availiability also updates the current "state" of the action
        return true;
    }
    getOptions(){
        // interface method
    }
    // doAction(option){
    //     this.survivor.actionsCount -= 1;
    // }
    // could be a param on the constructor as well
    getMap(){
        // facade function to provide for a map later
        return gameControl.map;// get inventory card
    }
}

class Search extends Action {
    constructor(survivor){
        //super code
        this.used = false;
    }
    isAvailable(){
        return this.used;
    }
    checkConditions(){
        // if survivor inside building
        // or survivor inside car
        // and no zombies in map.region
    }
    doAction(){
        this.used = true; // ONLY ONE SEARCH PER TURN
        return gameControl.getInventoryObj();// get inventory card
        // after getting a card player's inventory can be re organazied
    }
}

class Open extends Action {
    doAction(tool){
        // open door
        // depending on what tool it's used make noise
    }
}

class Combat extends Action {
    doAction(weapon){
        // melee or range combat based on the weapon
    }
}

class Trade extends Action {
    doAction(survivor, equipment){
        // trade with zone survivors
    }
}

class Equip extends Action {
    doAction(equipment, hand){
        // equip an item in one hand
    }
}

class CarInteraction extends Action {
    doAction(car){
        // get in or out of a car
        // change seats
    }
}

class Drive extends Action {
    doAction(tile){
        // if on the drivers seat, drive the car to the indicated tile
        // cars can move slow or fast (1 or 2 tiles per action)
        // cars can hit zombies while moving fast
    }
}

class Activate extends Action {
    doAction(interactiveObject){
        // take or activate an object in the tile
    }
}

class MakeNoise extends Action {
    doAction(tile){
        // attract the zombies to you
    }
}