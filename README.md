[![Build Status](https://travis-ci.org/anyms/fractionjs.svg?branch=master)](https://travis-ci.org/anyms/fractionjs)
[![License](https://img.shields.io/github/license/anyms/fractionjs.svg)](https://github.com/anyms/Fraction/blob/master/LICENSE)
[![Version](https://img.shields.io/github/release/anyms/fractionjs.svg)](https://github.com/anyms/Fraction/releases/latest)

# Fraction

A simple math library to solve precision problem

# Getting Started

Include `Fraction` in your project

```html
<script src="dist/fraction.min.js"></script>
```

Or in a NodeJS enviroment [fracjs](https://www.npmjs.com/package/fracjs)

```sh
npm i fracjs
```

# Usage

In a NodeJS enviroment, you have to require the `Fraction` class or `fraction` method.

```js
const fraction = require("fracjs").fraction;
```

Create the `Fraction` object with a starting value, it can be a `string` version of number. Then you can call any `Fraction` methods on created math object, it will modify the value in place

```js
let math = Fraction(0.1);
math.add(0.1);
math.add(0.1);

console.log(math.value); // 0.3
```

There is a method also available to create `Fraction` object, which will create and return a new `Fraction` object.

```js
let currency = Fraction(0.1);
```

You can also chain methods. The `toString` method returns the value from `Fraction` object, so if you are explicitly or implicitly converting `Fraction` object to a string that will return the value.

```js
let currency = fraction(0.1)
    .add(0.1)
    .add(0.1)
    .divide(Fraction.PI);

console.log(`value: ${currency}`);
```