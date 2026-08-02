export function techPulse(tick){
    return {
        ix: tick % 9,
        xi: tick % 11,
        x4: tick % 4
    };
}
