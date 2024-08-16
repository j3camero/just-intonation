const fs = require('fs');
const midi = require('midi-file');

const header = { format: 1, numTracks: 1, ticksPerBeat: 120 };
const tracks = [[
    {
      deltaTime: 0,
      meta: true,
      type: 'setTempo',
      microsecondsPerBeat: 535714
    },
    {
      deltaTime: 0,
      running: true,
      channel: 0,
      type: 'noteOn',
      noteNumber: 60,
      velocity: 100
    },
    {
      deltaTime: 120,
      running: true,
      channel: 0,
      type: 'noteOff',
      noteNumber: 60,
      velocity: 0,
      byte9: true
    },
    {
      deltaTime: 0,
      running: true,
      channel: 0,
      type: 'noteOn',
      noteNumber: 62,
      velocity: 100
    },
    {
      deltaTime: 120,
      running: true,
      channel: 0,
      type: 'noteOff',
      noteNumber: 62,
      velocity: 0,
      byte9: true
    },
    {
      deltaTime: 0,
      running: true,
      channel: 0,
      type: 'noteOn',
      noteNumber: 64,
      velocity: 100
    },
    {
      deltaTime: 240,
      running: true,
      channel: 0,
      type: 'noteOff',
      noteNumber: 64,
      velocity: 0,
      byte9: true
    },
    { deltaTime: 120, meta: true, type: 'endOfTrack' },
]];
const song = { header, tracks };
const output = midi.writeMidi(song);
const outputBuffer = Buffer.from(output);
fs.writeFileSync('cde.mid', outputBuffer);
