// lecture about turn based games movement
// https://www.youtube.com/watch?v=v6HctnbLypU&ab_channel=LestaStudio
import {Action, Option} from './baseActions.js';

export class Move extends Action {
   
    getOptions(survivor, map){
        return this.breadthFirstSearch(map.getPosition(survivor), survivor.getSteps());
    }
    
    takeAction(option, survivor, map){
        map.moveSurvivor({survivor: survivor, position: map.getTile(option.data.tile.id)});
        survivor.setSteps(option.data.stepsLeft);
    }
    
    breadthFirstSearch(startTile, steps){
        // amplitude exploration
        // https://gist.github.com/chrisco/ae1ba58b9df4f92e1db6c3adf39b71b0
    	// https://www.techiedelight.com/breadth-first-search/
        let visitedTiles = [];
        let tilesToVisit = [];
        let stepsLeft = steps;
        let returnOptions = [];
        
        tilesToVisit.push(...startTile.getAvaliableAdjecentTiles());
        visitedTiles.push(startTile.id);
        
        while (stepsLeft >> 0 && tilesToVisit.length >> 0){
            let currentTile = tilesToVisit.pop();
            stepsLeft--;
            for (let adjTile of currentTile.getAvaliableAdjecentTiles()){
                //if (!adjTile.isAvailable()) continue;
                if (adjTile in tilesToVisit) continue;
                if (visitedTiles.includes(adjTile.id)) continue;

                visitedTiles.push(adjTile.id);
                returnOptions.push(new Option({tile: adjTile, stepsLeft: stepsLeft}));
                tilesToVisit.unshift(adjTile);
            }
        }
        return returnOptions;
    }

}