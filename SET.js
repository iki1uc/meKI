// SET.js 
import { SETPulse } from "./SET-Pulse.js";
import { SETIReality } from "./SETI-Reality.js";

export function SET(current, tick){
    const pulse = SETPulse.next(current.ist);

    const tech = SETPulse.tech(tick);
    const mode = SETPulse.mode(tick);

    const meta = {
        axis: SETPulse.axis,
        pulse: { ist: current.ist, soll: pulse, gate: current.gate },
        tech,
        mode
    };

    return SETIReality.evaluate(meta);
}
// SETI.js 
import { SETIReality } from "./SETI-Reality.js";

export function SETI(meta){
    return SETIReality.evaluate(meta);
}
