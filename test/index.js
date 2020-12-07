const {
  bla,
  blupp,
  moop,
  mehhh,
  moi,
  uups,
} = require('bla');

const meh = doFoo(bla, blupp, moop, mehhh, moi, uups);
console.warn(meh);

function doFoo({ foo, bar, baz }) {
  return foo ? bar : baz;
}
