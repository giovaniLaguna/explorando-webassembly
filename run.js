const nodemon = require('nodemon');

nodemon({ script: 'tests/3.mjs' })
  .on('start', console.clear)
  .on('restart', console.clear)
  .on('quit', () => {
    console.log('App has quit');
    process.exit();
  });
