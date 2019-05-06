# MathJS

A simple math library to solve precision problem

# Getting Started

Include `MathJS` in your project:

```html
<script src="dist/math.min.js"></script>
```

# Usage

Create the `MathJS` object with a starting value, it can be a `string` version of number. Then you can call any `MathJS` methods on created math object, it will modify the value in place

```js
let math = MathJS(0.1);
math.add(0.1);
math.add(0.1);

console.log(math.value); // 0.3
```