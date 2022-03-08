import { Section } from '../utils/abstracts.js';
import Lyrics from '../effects/lyrics.js';
import PlainColor from '../effects/plaincolors.js';
import { COLOR } from '../utils/constants.js';

export default class SectionIntroduction extends Section {
  
  // Defining section start and end times.
  start = 32;
  end = 10000;

  generate() {
    this.background();
    this.foreground();
  }

  background() {

    // Setting up the dark background
    const color = this.getEffect(PlainColor);
    color.set(this.start, this.end, COLOR.dark);
  }

  foreground() {

  }
}
