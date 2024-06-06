import test from 'ava';

import {ActionService} from './../entities/actions/actionService.js';
import {Option} from './../entities/actions/baseActions.js';
import {Move} from './../entities/actions/movement.js';
import {GameMap, Tile} from './../entities/maps.js';
import {Survivor} from './../entities/survivors.js';

import {createMapDataFromString} from './../utils.js';

test.beforeEach(t => {
    let testMap1 = ["#######",
                    "#  #  #",
                    "#  S  #",
                    "#     #",
                    "#######"];
    let {startTiles, tileMatrix, tileDict} = createMapDataFromString(testMap1);
    
    t.context.map = new GameMap({startTiles: startTiles, tileMatrix: tileMatrix, tileDict: tileDict});
    t.context.survivor = new Survivor(["Move"]);
    t.context.map.placeSurvivorStart(t.context.survivor);
});

test('Tests that the ActionService starts with the default actions from the default rules', t => {
    let actionService = new ActionService({actions: ["Move"]});
    actionService.generateOptions("Move", t.context.survivor, t.context.map);
    t.is(actionService.actions.size, 1);
});

test.todo('Tests that the ActionService can generate all the options for each action');