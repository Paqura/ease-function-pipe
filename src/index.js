const pipe = (value, fn, ...fns) => fn ? pipe(fn(value), ...fns) : value;
const toUpper = text => text.toUpperCase();

let text = 'hello world!';
let t = pipe(text, toUpper);

console.log(t);
