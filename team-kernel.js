// team-kernel.js — Dreieck + Würfel

import { meKI } from "./meKI.js";
import { loadAllRooms } from "./GateRoomLoader.js";

export async function TeamKernel(){

    const rooms = await loadAllRooms();
    let room = rooms.meKI;

    let tick = 0;
    let turns = 0;
    let slide = 0;

    setInterval(()=>{

        const axiom = ["IN","OUT","IO"][slide % 3];

        const node = meKI(room, tick, turns, axiom, slide);

        console.log("TEAM-WÜRFEL:", node);

        if(node.pulse.soll === 1) room = rooms.GA;
        if(node.pulse.soll === 2) room = rooms.meKI;
        if(node.pulse.soll === 3) room = rooms.MIE;

        tick++;
        turns++;
        slide++;

    }, 300);
}
