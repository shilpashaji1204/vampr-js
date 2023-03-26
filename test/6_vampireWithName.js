const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

    let rootVampire;
    beforeEach( function() {
      rootVampire = new Vampire("root");
    });

    describe("vampireWithName", () => {
        let offspring1, offspring2, offspring3, offspring4;
        beforeEach(() => {
            offspring1 = new Vampire("vampire1");
            offspring2 = new Vampire("vampire2");
            offspring3 = new Vampire("vampire3");
            offspring4 = new Vampire("vampire4");
            rootVampire.addOffspring(offspring1);
            offspring1.addOffspring(offspring2);
            offspring2.addOffspring(offspring3);
            offspring3.addOffspring(offspring4);
        });
    
        it('should return the vampire with the given name', () => {
            expect(rootVampire.vampireWithName("vampire1")).to.equal(offspring1);
            expect(rootVampire.vampireWithName("vampire2")).to.equal(offspring2);
            expect(rootVampire.vampireWithName("vampire3")).to.equal(offspring3);
            expect(rootVampire.vampireWithName("vampire4")).to.equal(offspring4);
            expect(rootVampire.vampireWithName("nonexistent")).to.be.null;
        });
    });
});