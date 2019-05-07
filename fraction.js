class Fraction {
    constructor(num) {
        this.checkNumber(num);
        this.value = num.toString();
    }

    checkNumber(num) {
        if (isNaN(num.toString()) || num.toString().trim() === "") {
            throw `Error: '${num}' is not a number`;
        }
    }

    toString() { return this.value.toString(); }
    toInt() { return parseInt(this.value); }
    toFloat() { return parseFloat(this.value); }
    toNumber() { return Number(this.value); }
    int() { 
        this.value = parseInt(this.value); 
        return this;
    }
    float() { 
        this.value = parseFloat(this.value); 
        return this;
    }
    number() { 
        this.value = Number(this.value); 
        return this;
    }

    // Returns the absolute value of a number.
    abs() { 
        this.value = Math.abs(this.value); 
        return this;
    }
    // Returns the arccosine of a number.
    acos() { 
        this.value = Math.acos(this.value);
        return this;
    }
    // Returns the hyperbolic arccosine of a number.
    acosh() {
        this.value = Math.acosh(this.value); 
        return this;    
    }
    // Returns the arcsine of a number.
    asin() {
        this.value = Math.asin(this.value);
        return this;        
    }
    // Returns the hyperbolic arcsine of a number.
    asinh() {
        this.value = Math.asinh(this.value);
        return this;
    }
    // Returns the arctangent of a number.
    atan() {
        this.value = Math.atan(this.value);
        return this;
    }
    // Returns the hyperbolic arctangent of a number.
    atanh() {
        this.value = Math.atanh(this.value);
        return this;
    }
    // Returns the arctangent of the quotient of its arguments.
    atan2(num) {
        this.value = Math.atan2(this.value, num);
        return this;
    }
    // Returns the cube root of a number.
    cbrt() {
        this.value = Math.cbrt(this.value);
        return this;
    }
    // Returns the smallest integer greater than or equal to a number.
    ceil() {
        this.value = Math.ceil(this.value);
        return this;
    }
    // Returns the number of leading zeroes of a 32-bit integer.
    clz32() {
        this.value = Math.clz32(this.value);
        return this;
    }
    // Returns the cosine of a number.
    cos() {
        this.value = Math.cos(this.value);
        return this;
    }
    // Returns the hyperbolic cosine of a number.
    cosh() {
        this.value = Math.cosh(this.value);
        return this;
    }
    // Returns Ex, where x is the argument, and E is Euler's constant (2.718...), the base of the natural logarithm.
    exp() {
        this.value = Math.exp(this.value);
        return this;
    }
    // Returns subtracting 1 from exp(x).
    expm1() {
        this.value = Math.expm1(this.value);
        return this;
    }
    // Returns the largest integer less than or equal to a number.
    floor() {
        this.value = Math.floor(this.value);
        return this;
    }
    // Returns the nearest single precision float representation of a number.
    fround() {
        this.value = Math.fround(this.value);
        return this;
    }
    // Returns the square root of the sum of squares of its arguments.
    hypot() {
        let args = [this.value];
        for (let i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        this.value = Math.hypot(...args); 
        return this;
    }
    // Returns the result of a 32-bit integer multiplication.
    imul(num) {
        this.value = Math.imul(this.value, num);
        return this
    }
    // Returns the natural logarithm (loge, also ln) of a number.
    log() {
        this.value = Math.log(this.value);
        return this
    }
    // Returns the natural logarithm (loge, also ln) of 1 + x for a number x.
    log1p() {
        this.value = Math.log1p(this.value);
        return this
    }
    // Returns the base 10 logarithm of a number.
    log10() {
        this.value = Math.log10(this.value);
        return this
    }
    // Returns the base 2 logarithm of a number.
    log2() {
        this.value = Math.log2(this.value);
        return this
    }
    // Returns base to the exponent power, that is, base exponent.
    pow(exponent) {
        this.value = Math.pow(this.value, exponent);
        return this
    }
    // Returns the sign of the x, indicating whether x is positive, negative or zero.
    sign() {
        this.value = Math.sign(this.value);
        return this
    }
    // Returns the sine of a number.
    sin() {
        this.value = Math.sin(this.value);
        return this
    }
    // Returns the hyperbolic sine of a number.
    sinh() {
        this.value = Math.sinh(this.value);
        return this
    }
    // Returns the positive square root of a number.
    sqrt() {
        this.value = Math.sqrt(this.value);
        return this
    }
    // Returns the tangent of a number.
    tan() {
        this.value = Math.tan(this.value);
        return this
    }
    // Returns the hyperbolic tangent of a number.
    tanh() {
        this.value = Math.tanh(this.value);
        return this
    }
    // Returns the integer part of the number x, removing any fractional digits.
    trunc() {
        this.value = Math.trunc(this.value);
        return this
    }

    /*
    Following method handles the `algebraic fractions` which allows to do integer calculation on floating points
    */
    toAlgebraic(num1, num2) {
        num1 = num1.toString();
        num2 = num2.toString();
        if (num1.indexOf(".") === -1 && num2.indexOf(".") === -1) {
            return {
                num1: parseInt(num1),
                num2: parseInt(num2),
                base: 1
            }
        }


        if (num1.indexOf(".") === -1) {
            num1 += ".0";
        } else {
            num2 += ".0"
        }

        let num1Base = Math.pow(10, num1.split(".")[1].length)
        let num2Base = Math.pow(10, num2.split(".")[1].length)

        num1 = parseInt(num1.replace(".", ""));
        num2 = parseInt(num2.replace(".", ""));

        let dif;
        let baseNum;

        if (num1Base > num2Base) {
            dif = num1Base / num2Base;
            baseNum = num1Base;
            num2 = num2 * dif;
        } else {
            dif = num2Base / num1Base;
            baseNum = num2Base;
            num1 = num1 * dif;
        }

        return {
            num1: num1,
            num2: num2,
            base: baseNum
        }
    }

    // add value
    add(num) {
        this.checkNumber(num);
        let algebraic = this.toAlgebraic(this.value, num);
        this.value = String(
            (algebraic.num1 + algebraic.num2) / algebraic.base
        );
        return this;
    }

    // divide value
    divide(num) {
        this.checkNumber(num);
        let algebraic = this.toAlgebraic(this.value, num);
        this.value = String(algebraic.num1 / algebraic.num2);
        return this;
    }

    // divide the value and return reminder
    divideAndReminder(num) {
        this.checkNumber(num);
        let algebraic = this.toAlgebraic(this.value, num);
        this.divide(num);
        return String((algebraic.num1 % algebraic.num2) / algebraic.base);
        return this;
    }


    precision(x) {
        if (x == undefined) {
            return 0;
        }

        this.checkNumber(x);
        this.value = String(Number(this.value).toPrecision(x));
        return this;
    }

    round(decPos) {
        this.value = parseFloat(this.value);
        if (decPos === undefined) {
            this.value = Math.round(this.value);
        } else {
            this.value = Math.round(this.toFloat() * Math.pow(10, decPos)) / Math.pow(10, decPos);
        }
        this.value = String(this.value);
        return this;
    }

    reminder(num) {
        let algebraic = this.toAlgebraic(this.value, num);
        this.value = String((algebraic.num1 % algebraic.num2) / algebraic.base);
        return this;
    }

    subtract(num) {
        this.checkNumber(num);
        let algebraic = this.toAlgebraic(this.value, num);
        this.value = String((algebraic.num1 - algebraic.num2) / algebraic.base);
        return this;
    };
      
    multiply(num) {
        this.checkNumber(num);
        let alg = this.toAlgebraic(this.value, num);
        this.value = String((alg.num1 * alg.num2) / (alg.base * alg.base));
        return this;
    };

    static random(min, max) {
        if (isNaN(min) && isNaN(max)) {
            return Math.random();
        }
        
        if (isNaN(max)) {
            max = parseInt(min);
            min = 0;
        } else {
            min = parseInt(min);
            max = parseInt(max);
        }

        if (min > max) {
            throw `Error: min value can not be greater than max value`;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

Object.setPrototypeOf(Fraction, Math);


function fraction(num) {
    return new Fraction(num);
}


if (typeof window === 'undefined') {
    exports.Fraction = Fraction;
    exports.fraction = fraction;
}