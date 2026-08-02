const SWITCHES = [
    {
        name: "SET‑AXIOM",
        desc: "Saat – Startimpuls für alle Vektoren",
        run: () => SET.activate()
    },
    {
        name: "H‑AXIOM",
        desc: "Höhe – IX‑Portal",
        run: () => { hbt.setAxis("H"); link.sync(); return cibik.orbitIX(); }
    },
    {
        name: "B‑AXIOM",
        desc: "Breite – XI‑Portal",
        run: () => { hbt.setAxis("B"); link.sync(); return cibik.orbitXI(); }
    },
    {
        name: "T‑AXIOM",
        desc: "Tiefe – X4‑Portal",
        run: () => { hbt.setAxis("T"); link.sync(); return cibik.orbitX4(); }
    },
    {
        name: "6e‑FUSION",
        desc: "Alle Orbits gleichzeitig",
        run: () => cibik.orbitAll()
    },
    {
        name: "UPG‑SHIFT",
        desc: "Dreiecks‑Rotation (nur T‑Modus)",
        run: () => hbt.axis === "T" ? cibik.runTask(0) : false
    },
    {
        name: "CONTINUUM‑SHIFT",
        desc: "H → B → T Rotation",
        run: () => { hbt.rotate(); link.sync(); return true; }
    },

// SETI.js 
import { SETIReality } from "./SETI-Reality.js";

export function SETI(meta){
    return SETIReality.evaluate(meta);
}

    
    {
        name: "ZEIT‑V",
        desc: "Vergangenheit – V‑Achse",
        run: () => TIME.set("V")
    },
    {
        name: "ZEIT‑J",
        desc: "Jetzt – J‑Achse",
        run: () => TIME.set("J")
    },
    {
        name: "ZEIT‑Z",
        desc: "Zukunft – Z‑Achse",
        run: () => TIME.set("Z")
    }
];
