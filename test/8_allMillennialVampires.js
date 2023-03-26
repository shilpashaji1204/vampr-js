const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

    let rootVampire;
    beforeEach( function() {
        rootVampire = new Vampire("root", 1970);
    });

    describe("allMillennialVampires", () => {
        let offspring1, offspring2, offspring3, offspring4;
        beforeEach(() => {
            offspring1 = new Vampire("vampire1", 1990);
            offspring2 = new Vampire("vampire2", 2005);
            offspring3 = new Vampire("vampire3", 1985);
            offspring4 = new Vampire("vampire4", 1999);
            rootVampire.addOffspring(offspring1);
            offspring1.addOffspring(offspring2);
            offspring2.addOffspring(offspring3);
            offspring3.addOffspring(offspring4);
        });
        it('should return an array of all vampires converted after 1980', () => {
            const millennialVampires = rootVampire.allMillennialVampires;
            expect(millennialVampires).to.be.an('array').that.has.lengthOf(3);
            expect(millennialVampires).to.deep.include.members([offspring1, offspring2, offspring4]);
        });

        it('should return an empty array if no vampires were converted after 1980', () => {
            const vampire = new Vampire("vampire", 1975);
            rootVampire.addOffspring(vampire);
            const millennialVampires = rootVampire.allMillennialVampires;
            expect(millennialVampires).to.be.an('array').that.is.empty;
        });
    });
});