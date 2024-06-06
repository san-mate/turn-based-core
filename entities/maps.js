import {ObjectId} from 'bson';

export class GameMap {
    tileMatrix;
    tileDict;
    survivorPositions;
    
    constructor({startTiles, tileMatrix, tileDict}){
        this.tileMatrix = tileMatrix; // 2D matrix of the tiles
        this.tileDict = tileDict; // id access to each tile
        this.startTiles = startTiles;
        this.survivorPositions = new Map(); // dict that manages the current position of each survivor on the map
    }
    
    getTile(id){
        return this.tileDict[id];
    }
    
    placeSurvivorStart(survivor){
        for(let tile of this.startTiles){
            if(tile.isAvailable()){
                this.survivorPositions[survivor] = tile;
                continue;
            }
        }
    }
    
    getPosition(survivor){
        return this.survivorPositions[survivor]
    }
    
    moveSurvivor({survivor, position}){
        this.survivorPositions[survivor] = position;
    }
}

export class Tile {
    id;
    occupied;
    adjacentTiles;
    
    constructor(){
        this.id = new ObjectId();
        this.occupied = false;
        this.adjacentTiles = [];
    }
    
    getAvaliableAdjecentTiles(){
        return this.adjacentTiles.filter((tile) => !(tile instanceof Wall));
    }
    
    isAvailable(){
        return !this.occupied;
    }
}

export class Start extends Tile {

}

export class Exit extends Tile {

}

export class Wall extends Tile {

}

class Room extends Tile {
    // survivor can search on rooms for items
}

class Street extends Tile {
    // streets can have manholes, which may spawn zombies while opening doors
}