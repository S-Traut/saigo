import { Storyboard } from 'dotosb';
import { addSection } from './src/utils/abstracts.js';
import introduction from './src/sections/section_introduction.js';
import global from './src/sections/section_global.js';
console.clear();

const sb = new Storyboard();

// Sections load
addSection(sb, introduction);
addSection(sb, global);

sb.write('beatmap/An - Saigo (PoNo).osb');

