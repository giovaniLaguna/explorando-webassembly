const nodemon = require('nodemon');

nodemon({ script: 'tests/1.mjs' })
  .on('start', console.clear)
  .on('restart', console.clear)
  .on('quit', () => {
    console.log('App has quit');
    process.exit();
  });
