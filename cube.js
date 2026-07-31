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
        // Layer 1: Bewegungs-Modi
        this.layer1 = await this.loadCSV("modus-bewegung-3.csv");

        // Layer 2: Aufgaben-Matrix
        this.layer2 = await this.loadCSV("datei-aufgabe-4.csv");

        // Layer 3: Kernel-RESPO
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
    }

    orbitIX() {
        this.kernel.activateOrbit("IX");
    }

    orbitXI() {
        this.kernel.activateOrbit("XI");
    }

    orbitX4() {
        this.kernel.activateOrbit("X4");
    }

    orbitAll() {
        this.orbitIX();
        this.orbitXI();
        this.orbitX4();
        console.log("Orbit IX/XI/X4 vollständig aktiv.");
    }
}

const cibik = new CIBIK();
cibik.init();
class ContinuumHBT {
    constructor() {
        this.axis = "H"; // Höhe als Start
    }

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
class ContinuumLink {
    constructor(kernel, hbt) {
        this.kernel = kernel;
        this.hbt = hbt;
    }

    sync() {
        // H = Höhe → IX
        if (this.hbt.axis === "H") {
            this.kernel.activateOrbit("IX");
        }

        // B = Breite → XI
        if (this.hbt.axis === "B") {
            this.kernel.activateOrbit("XI");
        }

        // T = Tiefe → X4
        if (this.hbt.axis === "T") {
            this.kernel.activateOrbit("X4");
        }
    }
}
