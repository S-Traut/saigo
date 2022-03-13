import { Section } from '../utils/abstracts.js';
import { COLOR } from '../utils/constants.js';
import Background from '../effects/background.js';

export default class SectionGlobal extends Section {
  
  // Defining section start and end times.
  start = 32;
  end = 225632;

  init() {
    this.bg = this.getEffect(Background);
  }

  background() {
    this.bg.remove(); 
  }

  foreground() {
    this.bg.setVignette(this.start, this.end);
  }
}
