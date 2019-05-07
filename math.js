class MathJS {
    constructor(num) {
        this.checkNumber(num);
        this.value = num.toString();
    }

    checkNumber(num) {
        if (isNaN(num.toString()) || num.toString().trim() === "") {
            throw `Error: '${num}' is not a number`;
        }
    }

    abs() { this.value = Math.abs(this.value); }
    acos() { this.value = Math.acos(this.value); }
    asin() { this.value = Math.asin(this.value); }
    atan() { this.value = Math.atan(this.value); }
    atan2(num2) { this.value = Math.atan2(this.value, num2); }
    ceil() { this.value = Math.ceil(this.value); }
    cos() { this.value = Math.cos(this.value); }
    exp() { this.value = Math.exp(this.value); }
    floor() { this.value = Math.floor(this.value); }
    log() { this.value = Math.log(this.value); }
    pow(exponent) { this.value = Math.pow(this.value, exponent); }
    sin() { this.value = Math.sin(this.value); }
    sqrt() { this.value = Math.sqrt(this.value); }
    tan() { this.value = Math.tan(this.value); }

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
            this.value = Math.round(this.value * Math.pow(10, decPos)) / Math.pow(10, decPos);
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
}

Object.setPrototypeOf(MathJS, Math);


function mathjs(num) {
    return new MathJS(num);
}