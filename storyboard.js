import { Storyboard } from 'dotosb';
import { addSection } from './src/utils/abstracts.js';
import introduction from './src/sections/section_introduction.js';
console.clear();

const sb = new Storyboard();

// Sections load
addSection(sb, introduction);

sb.write('out.osb');

