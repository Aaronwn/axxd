const axxd = require('./components');

const req = require.context('./components', true, /^\.\/locale-provider\/.+_.+\.tsx$/);

axxd.locales = {};

req.keys().forEach((mod) => {
  const match = mod.match(/\/([^/]+).tsx$/);
  axxd.locales[match[1]] = req(mod).default;
});

module.exports = axxd;
