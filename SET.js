// SET-Pulse.js
export const SETPulse = {

    axis: "GA-meKI-MIE",

    next(ist){
        if(ist === 1) return 2;   // GA → meKI
        if(ist === 2) return 3;   // meKI → MIE
        if(ist === 3) return 1;   // MIE → GA
        return 1;
    },

    mode(tick){
        return (tick % 2 === 0) ? "ALL-IN" : "ALL-OUT";
    },

// SET.js 
import { RealityPulse } from "./RealityPulse.js";

export function SET(current, tick){
    return RealityPulse(current, tick);
}

    
    tech(tick){
        return {
            ix: tick % 9,
            xi: tick % 11,
            x4: tick % 4
        };
    }
};
