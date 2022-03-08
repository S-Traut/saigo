import { Section } from '../utils/abstracts.js';
import Lyrics from '../effects/lyrics.js';

export default class SectionIntroduction extends Section {
  
  generate() {
    const lyrics = this.getEffect(Lyrics);
    const lyrics2 = this.getEffect(Lyrics);

    lyrics.generateLyric();
  }
}
