export function nextGate(gate){
    if(gate === "GA") return "meKI";
    if(gate === "meKI") return "MIE";
    return "GA";
}

export function orbitGate(turns){
    const orbit = ["GA","meKI","MIE","GA","MIE"];
    return orbit[turns % orbit.length];
}

