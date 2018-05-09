const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('axxd.css')
  .hasFile('axxd.min.css')
  .hasFile('axxd.js')
  .hasFile('axxd.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');

