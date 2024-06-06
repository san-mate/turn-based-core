import test from 'ava';

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

test('Tests that the "Move Action" can calculate the right amount of options to show the player (Move.getOptions)', t => {
    let move = new Move();
    let options = move.getOptions(t.context.survivor, t.context.map);
    t.is(options.length, 13);
});

test('Tests that the contents of the Option objects from Move.getOptions are correctly formed', t => {
    let move = new Move();
    for (let option of move.getOptions(t.context.survivor, t.context.map)){
        t.true(option instanceof Option);
        t.true(option.data instanceof Object);
        t.true(option.data.tile instanceof Tile);
        t.true(Number.isInteger(option.data.stepsLeft));
    }
});

test('Tests that choosing one option from the Move.getOptions actually moves the player (Move.takeAction)', t => {
    let move = new Move();
    let options = move.getOptions(t.context.survivor, t.context.map);
    let selectedOption = options[0];
    let moveTileId = selectedOption.data.tile.id;
    
    move.takeAction(selectedOption, t.context.survivor, t.context.map);
    
    t.is(t.context.map.getPosition(t.context.survivor), t.context.map.getTile(moveTileId));
    t.is(t.context.survivor.getSteps(), 5);
});

test.todo('Tests that the steps counter resets after the turn ends (Move.resetStepsCount)');
test.todo('Tests that the player can move within their specified movement range');
test.todo('Tests that movement options consider terrain or cost factors correctly');