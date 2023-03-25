class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let vampFamilyLength = this.offspring.length;
    if(vampFamilyLength === undefined || vampFamilyLength === null) {
      return 0;
    }
    return vampFamilyLength;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampIndex = 0;
    let vampCursor = this.creator;

    while(vampCursor) {
      vampIndex ++;
      if(vampCursor.creator) {
        vampCursor = vampCursor.creator;
      } else {
        return vampIndex;
      }
    }
    return vampIndex;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.offspring === null) {
      return false;
    }

    for (let i = 0; i < this.numberOfOffspring; i ++) {
      if(vampire.name === this.offspring[i].name) {
        return true;
      }
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if(vampire === this) {
      return this;
    }
    if (this.offspring.includes(vampire)) {
      return this;
    }
    
  }
}

module.exports = Vampire;

