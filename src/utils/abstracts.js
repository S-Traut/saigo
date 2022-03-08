export function addSection(sb, section) {
  const instance = new section(sb);
  instance.generate();
}

export class Section {

  constructor(sb) {
    this.effects = new Map();
    this.sb = sb;
    console.log(`[SECTION] Loaded ${this.constructor.name} `); 
  }
 
  /**
  * This function takes up an effect class as a parameter and
  * return this corresponding instance from the library.
  * 
  * if the effect doesn't exist in the library create a new one and
  * add it.
  */
  getEffect(effect) {
    let instance = this.effects.get(effect.name);
    if(!instance) {
      instance = new effect(this.sb);
      this.effects.set(effect.name, instance);
    }
    return instance;
  }
}

export class Effect {

  constructor(sb) {
    this.sb = sb;
  }
}
