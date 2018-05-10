const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
const axxd = require('..');

describe('axxd', () => {
  it('exports modules correctly', () => {
    expect(Object.keys(axxd)).toMatchSnapshot();
  });

  it('should hint when import all components', () => {
    expect(warnSpy).toBeCalledWith(
      'You are using a whole package of axxd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
    );
    warnSpy.mockRestore();
  });
});
