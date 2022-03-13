import { Effect } from '../utils/abstracts.js';

export default class Background extends Effect {

  /**
  * Generate a vignette sprite from a given start to
  * an end.
  */
  setVignette(start, end) {
    const sprite = this.sb.createSprite('sb/v.png');
    sprite.add('S', start, 480.0 / 1080);
    sprite.add('F', [start, start + 1000], [0, 1]);
    sprite.add('F', [end - 1000, end], [1, 0]);
  }

  /**
  * Remove the base background from the beatmap.
  */
  remove() {
    this.sb.createSprite('bg.png').add('F',0,0);
  }
}
