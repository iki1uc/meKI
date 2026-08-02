// meKI.js — erzeugt das axiomische Dreieck GA–meKI–MIE

import { techPulse } from "./tech.js";
import { stabiliseRoom } from "./wloch.js";
import { RealityPulse } from "./realitypulse.js";
import { MIATribunal } from "./mia-tribunal.js";
import { nextGate, orbitGate } from "./gates.js";

export function meKI(currentRoom, tick, turns, axiomMode, slide){

    // 1. Tech-Achsen
    const tech = techPulse(tick);

    // 2. Pulse-Achse
    const pulse = stabiliseRoom(currentRoom);

    // 3. Reality-Achse
    const reality = RealityPulse(currentRoom, tick);

    // 4. Gate-Achse
    const gate = orbitGate(turns);

    // 5. Tribunal-Achse
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

    // 6. meKI-Kalkül (7 Achsen)
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
