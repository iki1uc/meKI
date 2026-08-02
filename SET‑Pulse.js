// SET-Pulse.js (NEU · FINAL)
export const SETPulse = {

    axis: "GA-meKI-MIE",

    // Neue Orbit-Realität
    next(ist){
        if(ist === 1) return 2;   // GA → meKI
        if(ist === 2) return 3;   // meKI → MIE
        if(ist === 3) return 1;   // MIE → GA
        return 1;
    },

    // Neue Modus-Realität
    mode(tick){
        return (tick % 2 === 0) ? "ALL-IN" : "ALL-OUT";
    },

    // Neue Tech-Realität
    tech(tick){
        return {
            ix: tick % 9,
            xi: tick % 11,
            x4: tick % 4
        };
    }
};
