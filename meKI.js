// meKI.js — 27→81→756→2268 Würfel-Kalkül

import { techPulse } from "./tech.js";
import { stabiliseRoom } from "./wloch.js";
import { RealityPulse } from "./realitypulse.js";
import { MIATribunal } from "./mia-tribunal.js";
import { orbitGate } from "./gates.js";

export function meKI(room, tick, turns, axiom, slide){

    const pulse = stabiliseRoom(room);
    const tech = techPulse(tick);
    const reality = RealityPulse(room, tick);
    const gate = orbitGate(turns);

    return {
        pulse,          // 3
        tech,           // 3
        axiom,          // 3
        slide,          // 3
        gate,           // 3
        room,           // 3
        verdict: MIATribunal({
            pulse,
            tech,
            mode: reality.meta.mode,
            score: reality.meta.tick,
            turns,
            gate,
            axiom,
            slide
        })
    };
}
