import { addCombo, executeCombo } from "./combo.js";
import { applyColorRules } from "./score.js";
import { nextGate, orbitGate } from "./gates.js";
import { techPulse } from "./tech.js";
import { RealityPulse } from "./realitypulse.js";
import { MIATribunal } from "./mia-tribunal.js";
import { stabiliseRoom } from "./wloch.js";
import { ecoShift } from "./eco-shift.js";

let turns = 0;
let score = 0;
let tick = 0;
let gate = "meKI";
let currentRoom = null;

export function initGame(rooms){
    currentRoom = rooms.meKI;
}

export function onLowerButton(action){
    addCombo(action);
}

export function onExecute(){

    turns++;

    const comboResult = executeCombo();
    score = applyColorRules(comboResult, score, turns);

    gate = nextGate(gate);
    gate = orbitGate(turns);

    const tech = techPulse(tick);
    const pulse = stabiliseRoom(currentRoom);
    const reality = RealityPulse(currentRoom, tick);

    const verdict = MIATribunal({
        pulse,
        tech,
        mode: reality.meta.mode,
        score,
        turns,
        gate
    });

    ecoShift(reality);

    tick++;

    if(turns >= 13){
        console.log("GAME OVER:", verdict);
    }
}

