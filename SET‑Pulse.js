// Bewertungssystem
import { SETPulse } from "./SET-Pulse.js";
import { SETIReality } from "./SETI-Reality.js";

export function RealityPulse(current, tick){

    const soll = SETPulse.next(current.ist);

    const pulse = {
        gate: current.gate,
        ist: current.ist,
        soll
    };

    const tech = SETPulse.tech(tick);
    const mode = SETPulse.mode(tick);

    const meta = {
        axis: SETPulse.axis,
        pulse,
        tech,
        mode
    };

    const eval = SETIReality.evaluate(meta);

    return {
        pulse,
        meta,
        eval
    };
}
