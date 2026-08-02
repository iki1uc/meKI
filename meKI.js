// meKI.js — erzeugt das axiomische Dreieck GA–meKI–MIE

import { techPulse } from "./tech.js";
import { stabiliseRoom } from "./wloch.js";
import { RealityPulse } from "./realitypulse.js";
import { MIATribunal } from "./mia-tribunal.js";
import { orbitGate } from "./gates.js";

export function meKI(currentRoom, tick, turns, axiomMode, slide){
 
    const tech = techPulse(tick);
    const pulse = stabiliseRoom(currentRoom);
    const reality = RealityPulse(currentRoom, tick);
    const gate = orbitGate(turns);

    const verdict = MIATribunal({
        pulse,
        tech,
        mode: reality.meta.mode,
        score: reality.meta.tick,
        turns,
        gate,
        axiomMode,
        slide
    });

    return {
        pulse,
        tech,
        gate,
        axiomMode,
        slide,
        room: currentRoom,
        verdict
    };
}
