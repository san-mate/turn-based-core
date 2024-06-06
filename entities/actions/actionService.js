import {Move} from './movement.js';
import {Search} from './search.js';


// this should be moved to a "registery"
const actionsMap = {
    "Move": Move,
    "Search": Search,
}

export class ActionService {
    actions;
    generatedOptions;
    
    constructor({actions = ["Move", "Search"]}) {
        this.actions = new Map();
        for (const action of actions) {
            this.actions.set(action, new actionsMap[action]);
        }
        
        this.generatedOptions = new Map();
    }
    
    generateOptions(action, survivor, map){
        if(!this._isValidAction(action))
            throw new Error('Invalid action');
        
        this.generatedOptions.set(action, this.actions.get(action).getOptions(survivor, map));
        return this.generatedOptions[action];
    }
    
    takeOption(action, option, survivor, map){
        if(!this._isValidOption(action, option) || !this._isValidAction(action))
            throw new Error('Invalid action-option');

        action = this.actions.get(action);
        action._takeAction(option, survivor, map);
    }
    
    _isValidAction(action) {
        return this.actions.has(action);
    }
    
    _isValidOption(action, option) {
        return this.generatedOptions.get(action).includes(option);
    }
}