import wat from 'watr';

// compile text to binary
const buffer = wat(`
  (module    
    (import "console" "log" (func $log (param i32 i32)))
    (func $main (export main) (param i32 i32) (result i32 i32)
      (call log (local.get 0) (local.get 1))
      i32.const 123
      (i32.mul (local.get 0) (local.get 1))
    )
  )
`);

// create instance
const module = new WebAssembly.Module(buffer);
const instance = new WebAssembly.Instance(module, {
  console,
});

console.log(instance.exports.main(100, 200));

