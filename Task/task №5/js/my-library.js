(function () {
  function myLibraru() {
    if (myLibraru.instant) {
      return myLibraru.instant;
    }

    var cash = []

    function isNumber(instace) {
      for (var i = 0; i < cash.length; i++) {
        var element = cash[i];
        
        if (element[0] === instace) return element[1];
      }

      var result = typeof instace === 'number';

      cash.push([instace, result]);

      return result;
    }

    function isSting(instace) {
      for (var i = 0; i < cash.length; i++) {
        var element = cash[i];
        
        if (element[0] === instace) return element[1];
      }

      var result = typeof instace === 'string';

      cash.push([instace, result]);

      return result;
    }

    function isBoolean(instace) {
      return Boolean(instace);
    }

    function isArray(instace) {
      for (var i = 0; i < cash.length; i++) {
        var element = cash[i];
        
        if (element[0] === instace) return element[1];
      }

      const result = instace instanceof Array;

      cash.push([instace, result]);

      return result;
    }

    function isUndefined(instace) {
      return typeof instace === 'undefined';
    }

    function isDate(instace) {
      return typeof instace === 'date';
    }

    function isFunction(instace) {
      return typeof instace == 'function';
    }

    function isNull(instace) {
      return typeof instace === 'null';
    }

    function isNaN(instace) {
      return typeof instace === 'NaN';
    }

    var expObj = {
      isNumber: isNumber,
      isSting: isSting,
      isBoolean: isBoolean,
      isArray: isArray,
      isUndefined: isUndefined,
      isDate: isDate,
      isFunction: isFunction,
      isNull: isNull,
      isNaN: isNaN,
    }

    myLibraru.instant = expObj;

    return expObj;
  }

  window.myLibraru = myLibraru();
  
})()


