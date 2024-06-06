import test from 'ava';

import {Survivor} from './../entities/survivors.js';

test('Test that the Survivor is correctly initialized according to the default config', t => {
    let survivor = new Survivor([]);
    t.deepEqual(survivor.getAvailableActions(), []);
    t.is(survivor.getActionsCount(), 4);
    t.is(survivor.getLifePoints(), 5);
    t.is(survivor.getSteps(), 6);
});

test('Tests that the Survivor takes damage correctly.', t => {
    let survivor = new Survivor([]);
    t.is(survivor.getLifePoints(), 5);
    survivor.takeDamage(1)
    t.is(survivor.getLifePoints(), 4);
});