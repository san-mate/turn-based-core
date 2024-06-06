import test from 'ava';

import {GameMap, Tile} from './../entities/maps.js';

import {createMapDataFromString} from './../utils.js';

test('Tests that the GameMap is created correctly', t => {
    let testMap1 = ["#######",
                    "#S   E#",
                    "#S   E#",
                    "#S   E#",
                    "#######"];
    let {startTiles, tileMatrix, tileDict} = createMapDataFromString(testMap1);
    
    let map = new GameMap({startTiles: startTiles, tileMatrix: tileMatrix, tileDict: tileDict});
    t.is(map.tileMatrix.length, 5);
    t.is(map.tileMatrix[0].length, 7);
});