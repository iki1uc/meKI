// SETI-Reality.js (NEU)
export const SETIReality = {

    evaluate(meta){
        const score =
            (meta.tech.ix + meta.tech.xi + meta.tech.x4) *
            (meta.mode === "ALL-IN" ? 2 : 1);

        return {
            axis: meta.axis,
            mode: meta.mode,
            ix: meta.tech.ix,
            xi: meta.tech.xi,
            x4: meta.tech.x4,
            score,
            verdict: score > 20 ? "POSITIV" : "NEUTRAL"
        };
    }
};
