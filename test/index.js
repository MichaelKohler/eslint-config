const {
  bla,
  blupp,
  moop,
  mehhh,
  moi,
  uups,
} = require('');

const meh = doFoo(bla, blupp, moop, mehhh, moi, uups);
console.warn(meh);

const mehFn = (foo) => inexistent(foo, blupp, moop);

function doFoo({ foo, bar, baz }) {
  return foo ? bar : baz;
}
