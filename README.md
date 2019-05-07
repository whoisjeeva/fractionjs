[![Build Status](https://travis-ci.org/anyms/MathJS.svg?branch=master)](https://travis-ci.org/anyms/MathJS)
[![License](https://img.shields.io/github/license/anyms/mathjs.svg)](https://github.com/anyms/MathJS/blob/master/LICENSE)
[![Version](https://img.shields.io/github/release/anyms/mathjs.svg)](https://github.com/anyms/MathJS/releases/latest)

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

There is a method also available to create `MathJS` object, which will create and return a new `MathJS` object.

```js
let currency = mathjs(0.1);
```

You can also chain methods. The `toString` method returns the value from `MathJS` object, so if you are explicitly or implicitly converting `MathJS` object to a string that will return the value.

```js
let currency = mathjs(0.1)
    .add(0.1)
    .add(0.1)
    .divide(MathJS.PI);

console.log(`value: ${currency}`);
```