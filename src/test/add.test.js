const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

xit(`should add values`, () => {
  expect(add(1,3)).toBe(4);
  expect(add(1,3)).not.toBe(3);
});

xdescribe('Test generateGreeeting', () => {

  it(`should return 'Hello name'`, () => {
    const name = 'Fred';
    expect(generateGreeting(name)).toBe(`Hello Fred`);
  });

  it(`should return 'Hello Anonymous'`, () => {
    expect(generateGreeting()).toBe(`Hello Anonymous`);
  });

});
