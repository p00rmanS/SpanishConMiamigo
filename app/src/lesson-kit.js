import { L } from './home-world-lessons.js';
import { A } from './advanced-lessons-1.js';
import { grid } from './school-basics-1.js';
import { stickBlock } from './memory-aids.js';

// A compact way to write lessons that all carry a bilingual explanation, a pro tip and a
// "Make it stick" memory block. table[0] is the header row; speakCol is the column read aloud.
export const mk =
  (unit, { advanced = false } = {}) =>
  (
    id,
    level,
    title,
    sentence,
    meaning,
    taglish,
    english,
    [formula, key, tip, tipDetail],
    [prompt, choices, answer, reason, scene],
    [ex1, ex2],
    [heading, table, speakCol],
    [trick, practice, mistake],
  ) =>
    (advanced ? A : L)(
      [id, level, title, unit, sentence, meaning, taglish, english],
      [formula, key, tip, tipDetail],
      [prompt, choices, answer, reason, scene],
      [ex1, ex2],
      [
        { heading, table: grid(table[0], table.slice(1), speakCol) },
        stickBlock({ trick, practice, mistake }),
      ],
    );
