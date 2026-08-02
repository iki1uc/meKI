export function RealityPulse(room, tick){
    return {
        meta: {
            mode: (tick % 2 === 0) ? "ALL-IN" : "ALL-OUT",
            tick
        },
        room
    };
}

