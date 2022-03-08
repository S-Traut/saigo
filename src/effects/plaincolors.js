import { Effect } from '../utils/abstracts.js';

export default class PlainColors extends Effect {

  set(start, end, color) {
    const sprite = this.sb.createSprite("sb/p.png");
    sprite.add('V', 0, [854, 480]);
    sprite.add('F', [start, end], [1, 1]); 
    sprite.add('C', [start, start], [1, 1, 1, ...color]);
  }

}
