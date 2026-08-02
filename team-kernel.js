// team-kernel.js — GA ↔ meKI ↔ MIE

import { meKI } from "./meKI.js";
import { loadAllRooms } from "./GateRoomLoader.js";

export async function TeamKernel(){

    const rooms = await loadAllRooms();
    let currentRoom = rooms.meKI;

    let tick = 0;
    let turns = 0;
    let slide = 0;

    setInterval(()=>{

        const axiomMode = ["IN","OUT","IO"][slide % 3];

        const calc = meKI(
            currentRoom,
            tick,
            turns,
            axiomMode,
            slide
        );

        console.log("TEAM-KERNEL:", calc);

        if(calc.pulse.soll === 1) currentRoom = rooms.GA;
        if(calc.pulse.soll === 2) currentRoom = rooms.meKI;
        if(calc.pulse.soll === 3) currentRoom = rooms.MIE;

        tick++;
        turns++;
        slide++;

    }, 300);
}
