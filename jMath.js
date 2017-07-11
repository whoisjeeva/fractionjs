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

  this.abs = function() { this.value = Math.abs(str_num); }
  
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
