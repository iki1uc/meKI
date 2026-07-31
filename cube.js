// CIBIK-O-METER · cube.js
// CONTINUUM-MODULE · 3 LAYERS

class CIBIK {
    constructor() {
        this.layer1 = [];   // modus-bewegung-3.csv
        this.layer2 = [];   // datei-aufgabe-4.csv
        this.kernel = null; // ernte.js Kernel-RESPO
        this.mode = "H";    // Default-Modus
    }

    async loadCSV(path) {
        const response = await fetch(path);
        const text = await response.text();
        return text.split("\n").map(row => row.split(","));
    }

    async init() {
        this.layer1 = await this.loadCSV("modus-bewegung-3.csv");
        this.layer2 = await this.loadCSV("datei-aufgabe-4.csv");
        this.kernel = new KernelRESPO(); // aus ernte.js
        console.log("CIBIK-O-Meter aktiviert.");
    }

    setMode(m) {
        this.mode = m;
        this.kernel.setAxiomMode(m);
        console.log("Modus gesetzt:", m);
    }

    runTask(index) {
        const task = this.layer2[index];
        this.kernel.execute(task);
        console.log("Aufgabe ausgeführt:", task);
        return true;
    }

    orbitIX() { this.kernel.activateOrbit("IX"); return true; }
    orbitXI() { this.kernel.activateOrbit("XI"); return true; }
    orbitX4() { this.kernel.activateOrbit("X4"); return true; }

    orbitAll() {
        this.orbitIX();
        this.orbitXI();
        this.orbitX4();
        console.log("Orbit IX/XI/X4 vollständig aktiv.");
        return true;
    }
}

const cibik = new CIBIK();
cibik.init();


// CONTINUUM-HBT
class ContinuumHBT {
    constructor() { this.axis = "H"; }

    setAxis(a) {
        this.axis = a;
        console.log("Continuum-Achse gesetzt:", a);
    }

    rotate() {
        if (this.axis === "H") this.axis = "B";
        else if (this.axis === "B") this.axis = "T";
        else this.axis = "H";
        console.log("Achse rotiert:", this.axis);
    }
}

const hbt = new ContinuumHBT();


// CONTINUUM-LINK
class ContinuumLink {
    constructor(kernel, hbt) {
        this.kernel = kernel;
        this.hbt = hbt;
    }

    sync() {
        if (this.hbt.axis === "H") this.kernel.activateOrbit("IX");
        if (this.hbt.axis === "B") this.kernel.activateOrbit("XI");
        if (this.hbt.axis === "T") this.kernel.activateOrbit("X4");
    }
}

const link = new ContinuumLink(cibik.kernel, hbt);


// AU·RA CACHE
class AURA {
    constructor() {
        this.cache = Array(9).fill(null); // 9 Slots für 9x9
    }

    store(index, value) {
        this.cache[index] = value;
        console.log("AU·RA gespeichert:", index, value);
    }

    get(index) { return this.cache[index]; }
    nextFree() { return this.cache.findIndex(v => v === null); }
}

const aura = new AURA();


// AXIOM-SEQUENCER · 9×9 · whirl.me
function axiomSequencer() {

    const sequence = [
        () => { hbt.setAxis("H"); link.sync(); return cibik.orbitIX(); },
        () => { hbt.setAxis("B"); link.sync(); return cibik.orbitXI(); },
        () => { hbt.setAxis("T"); link.sync(); return cibik.orbitX4(); },
        () => { return cibik.orbitAll(); },
        () => { if (hbt.axis === "T") return cibik.runTask(0); return false; },
        () => { hbt.rotate(); link.sync(); return true; },
        () => { return cibik.runTask(1); },
        () => { return cibik.runTask(2); },
        () => { return cibik.runTask(3); }
    ];

    let index = 0;

    function next() {
        if (index >= sequence.length) {
            console.log("Keine Funktion hat gegriffen.");
            return;
        }

        try {
            const result = sequence[index]();

            if (result !== false) {
                aura.store(index, result);
                askToAdopt(index);
            } else {
                index++;
                next();
            }

        } catch (e) {
            index++;
            next();
        }
    }

    next();
}


// ÜBERNAHME-DIALOG
function askToAdopt(index) {
    const names = [
        "H‑AXIOM · IX‑PORTAL",
        "B‑AXIOM · XI‑PORTAL",
        "T‑AXIOM · X4‑PORTAL",
        "6e‑FUSION",
        "UPG‑SHIFT",
        "CONTINUUM‑SHIFT",
        "TASK‑1",
        "TASK‑2",
        "TASK‑3"
    ];

    const msg = `Funktion erfolgreich: ${names[index]}\nÜbernehmen?`;
    if (confirm(msg)) console.log("Übernommen:", names[index]);
    else console.log("Nicht übernommen.");
}
