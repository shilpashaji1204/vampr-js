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
    
  }
// Returns the vampire object with that name, or null if no vampire exists with that name
vampireWithName(name) {
  // Traverse the tree using a depth-first search
  let stack = [this];
  while (stack.length > 0) {
    let currentVampire = stack.pop();
    if (currentVampire.name === name) {
      return currentVampire;
    }
    stack.push(...currentVampire.offspring);
  }
  // If we reach this point, the vampire was not found
  return null;
}

// Returns the total number of vampires that exist
get totalDescendents() {
  let count = 0;
  const queue = [...this.offspring];
  while (queue.length) {
    const current = queue.shift();
    count++;
    queue.push(...current.offspring);
  }
  return count;
}

// Returns an array of all the vampires that were converted after 1980
get allMillennialVampires() {
  return this.offspring.filter(vampire => vampire.yearConverted >= 1980);
}
}


module.exports = Vampire;

