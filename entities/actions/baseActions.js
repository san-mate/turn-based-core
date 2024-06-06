export class Action {
    // isAvailable(){
    //     // checking availiability also updates the current "state" of the action
    //     return true;
    // }
    getOptions(survivor, map){}
    takeAction(option, survivor, map){}
}

export class Option {
    data;
    
    constructor(data){
        this.data = data;
    }
}

