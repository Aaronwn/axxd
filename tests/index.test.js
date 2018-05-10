import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('axxd dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const axxd = testDist ? require('../dist/axxd') : require('../components'); // eslint-disable-line global-require
    expect(Object.keys(axxd)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have axxd.version', () => {
      const axxd = require('../dist/axxd'); // eslint-disable-line global-require
      expect(axxd.version).toBe(pkg.version);
    });
  }
});
