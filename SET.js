// SET.js · Saat-Axiom

class SETAxiom {
    constructor(kernel) {
        this.kernel = kernel;
    }

    activate() {
        console.log("SET-Axiom aktiviert (Saat)");
        this.kernel.setAxiomMode("SET");
        return true;
    }
}

const SET = new SETAxiom(KERNEL);
