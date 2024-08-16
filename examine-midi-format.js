const fs = require('fs');
const midi = require('midi-file');

const input = fs.readFileSync('death.mid');
const parsed = midi.parseMidi(input);
console.log(parsed.tracks);
console.log(parsed.header);
const output = midi.writeMidi(parsed);
const outputBuffer = Buffer.from(output);
fs.writeFileSync('death_copy.mid', outputBuffer);
