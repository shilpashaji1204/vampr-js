const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

    let rootVampire;
    beforeEach( function() {
      rootVampire = new Vampire("root");
    });

    describe("totalDescendents", () => {
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
        it("should return the correct number of descendents", () => {
            const rootVampire = new Vampire("root");
            const offspring1 = new Vampire();
            const offspring2 = new Vampire();
            const offspring3 = new Vampire();
            const offspring4 = new Vampire();
            rootVampire.addOffspring(offspring1);
            rootVampire.addOffspring(offspring2);
            offspring1.addOffspring(offspring3);
            offspring2.addOffspring(offspring4);
            // total number of descendents should be 4
            expect(rootVampire.totalDescendents).to.equal(4);
          });
        });
    });        