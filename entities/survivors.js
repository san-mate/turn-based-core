import {ObjectId} from 'bson';
import {Rules} from './rules.js';

export class Survivor {
    id;
    actionsCount; // counter var that tracks actions taken by the survivor
    stepsCount;
    
    constructor(actions){
        this.id = new ObjectId();
        this.lifePoints = this.getDefaultLifePoints();
        this.actions = actions; // list of available actions for the Survivor to use
        this.availableActions = actions;
        
        // this.level;
        // this.inventory; // 5 pieces of Equipment
        // this.skills = initialSetSkills;  // may change based on leveling
        
        this.resetActionCount();
        this.resetStepsCount();
    }
    
    // items will be equiped on hands
    // left_hand;
    // right_hand;
    
    getAvailableActions(){
        return this.availableActions;
    }
    
    takeAction(action, option){
        this.actionsCount--;
        action.takeAction(option);
        // check if action is one time use or multiple time and still available
    }
    
    resetActionCount(){
        this.actionsCount = this.getMaxActions();
    }
    
    resetStepsCount(){
        this.stepsCount = this.getMaxSteps();
    }
    
    // useEquipment(hand){
    //     // if item is weapon, attack
    //     // if equipment is item, consume
    // }
    
    // levelUp(){
    //     this.level += 1;
        // if level > stage
        // chose a new skill
    // }
    
    takeDamage(damage){
        this.lifePoints -= damage;
    }
    
    getMaxActions(){
        return Rules.getConfig().survivorMaxActions;
    }
    
    getActionsCount(){
        return this.actionsCount;
    }
    
    getMaxSteps(){
        // this could change for each survivor in particular
        return Rules.getConfig().survivorMaxSteps;
    }
    
    getDefaultLifePoints(){
        return Rules.getConfig().survivorLifePoints;
    }

    getLifePoints(){
        return this.lifePoints;
    }

    setSteps(stepsLeft){
        this.stepsCount = stepsLeft;
    }
    
    getSteps(){
        return this.stepsCount;
    }
}