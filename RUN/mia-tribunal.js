export function MIATribunal(meta){
    const score = (meta.tech.ix + meta.tech.xi + meta.tech.x4) *
                  (meta.mode === "ALL-IN" ? 2 : 1);

    return {
        gate: meta.gate,
        score,
        verdict: score > 20 ? "POSITIV" : "NEUTRAL"
    };
}

