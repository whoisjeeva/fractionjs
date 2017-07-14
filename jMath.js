function jMath(str_num) {
  throwError = function(val, type) {
    if (!(typeof val == type)) {
        throw "Error: expect <" + type + "> object, but <" + typeof(val) + "> is given.";
    }
  }

  /*
  Following method handles the `algebraic fractions` which allows to do integer calculation on floating points
  */
  toAlgebraic = function (f1, f2) {
    if (f1.indexOf('.') == -1 && f2.indexOf('.') == -1) {
      return {
        num1: parseInt(f1),
        num2: parseInt(f2),
        base: 1
      }
    }
    if (f1.indexOf('.') == -1) {
      f1 += '.0';
    } else {
      f2 += '.0';
    }
    let f1_base = Math.pow(10, f1.split('.') [1].length);
    let f2_base = Math.pow(10, f2.split('.') [1].length);
    f1 = parseInt(f1.replace('.', ''));
    f2 = parseInt(f2.replace('.', ''));
    let dif,
    base_num;
    if (f1_base > f2_base) {
      dif = f1_base / f2_base;
      base_num = f1_base;
      f2 = f2 * dif;
    } else {
      dif = f2_base / f1_base;
      base_num = f2_base;
      f1 = f1 * dif;
    }
    return {
      num1: f1,
      num2: f2,
      base: base_num
    };
  };

  this.__init__ = function() {
    throwError(str_num, "string");
    if (this.constructor.name !== "jMath") {
      throw "Error: <this> is not pointing to <jMath> object";
    }
    this.value = str_num;
  };

  this.abs = function() { this.value = Math.abs(this.value); }
  this.acos = function() { this.value = Math.acos(this.value); }
  this.asin = function() { this.value = Math.asin(this.value); }
  this.atan = function() { this.value = Math.atan(this.value); }
  this.atan2 = function(num2) { this.value = Math.atan2(this.value, num2); }
  this.ceil = function() { this.value = Math.ceil(this.value); }
  this.cos = function() { this.value = Math.cos(this.value); }
  this.exp = function() { this.value = Math.exp(this.value); }
  this.floor = function() { this.value = Math.floor(this.value); }
  this.log = function() { this.value = Math.log(this.value); }
  this.pow = function(exponent) { this.value = Math.pow(this.value, exponent); }
  this.sin = function() { this.value = Math.sin(this.value); }
  this.sqrt = function() { this.value = Math.sqrt(this.value); }
  this.tan = function() { this.value = Math.tan(this.value); }
  
  this.add = function (str_num2) {
    throwError(str_num2, "string");
    let alg = toAlgebraic(this.value, str_num2);
    this.value = String((alg.num1 + alg.num2) / alg.base);
  };

  this.divide = function (str_num2) {
    throwError(str_num2, "string");
    let alg = toAlgebraic(this.value, str_num2);
    this.value = String((alg.num1 / alg.num2));
    // this.precision(16);
  };

  this.divideAndReminder = function (str_num2) {
    throwError(str_num2, "string");
    let alg = toAlgebraic(this.value, str_num2);
    this.divide(str_num2);
    return String((alg.num1 % alg.num2) / alg.base);
  }

  this.precision = function (x) {
    if (x == undefined) {
      return 0;
    }
    throwError(x, "number");
    this.value = String(Number(this.value).toPrecision(x));
  }

  this.round = function(dec_pos) {
    this.value = parseFloat(this.value);
    if (dec_pos === undefined) {
      this.value = Math.round(this.value);
    } else {
      this.value = Math.round(this.value * Math.pow(10, dec_pos)) / Math.pow(10, dec_pos);
    }
    this.value = String(this.value);
  }

  this.reminder = function (str_num2) {
    let alg = toAlgebraic(this.value, str_num2);
    this.value = String((alg.num1 % alg.num2) / alg.base);
  }
  
  this.subtract = function (str_num2) {
    throwError(str_num2, "string");
    let alg = toAlgebraic(this.value, str_num2);
    this.value = String((alg.num1 - alg.num2) / alg.base);
  };
  
  this.multiply = function (str_num2) {
    throwError(str_num2, "string");
    let alg = toAlgebraic(this.value, str_num2);
    this.value = String((alg.num1 * alg.num2) / (alg.base * alg.base));
  };

  this.__init__();
}


jMath.E = "2.718281828459045";
jMath.LN2 = "0.6931471805599453";
jMath.LN10 = "2.302585092994046";
jMath.LOG2E = "1.4426950408889634";
jMath.LOG10E = "0.4342944819032518";
jMath.PI = "3.141592653589793";
jMath.SQRT1_2 = "0.7071067811865476";
jMath.SQRT2 = "1.4142135623730951";

jMath.random = function(max, min) {
  if (min === undefined && max === undefined) {
    return Math.random();
  } else if (min === undefined) {
    return Math.floor(Math.random() * (max + 1)); // 0 - 5
  } else if (min !== undefined && max !== undefined) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
  return null;
}