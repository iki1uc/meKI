class SETAxiom {
    constructor(kernel) {
        this.kernel = kernel;
    }

    activate() {
        console.log("SET-Axiom aktiviert (Saat)");
        this.kernel.setAxiomMode("SET");
        this.kernel.prepareMatrix();     // 9x9 öffnen
        this.kernel.prepareOrbit();      // IX/XI/X4 freischalten
        this.kernel.prepareContinuum();  // HBT initialisieren
        return true;
    }
}
