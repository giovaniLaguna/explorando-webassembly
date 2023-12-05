import wat from 'watr';

console.log(`
  Your random number is: ${Math.random()}
  (edit any file to auto-restart this script)
`);

// compile text to binary
const buffer = wat(`
  (func
    (export "double") (param f64) (result f64)
    (f64.mul (local.get 0) (f64.const 2))
  )
`);

// create instance
const module = new WebAssembly.Module(buffer);
const instance = new WebAssembly.Instance(module);

// use API
const { double } = instance.exports;
console.log(double(108)); // 216
