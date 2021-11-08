function MyArray(array) {
  this.array = array;
};


MyArray.prototype.first = function() {
  return this.array[0]
};

MyArray.prototype.last = function() {
  return this.array[this.array.length - 1]
};

MyArray.prototype.skip = function(value) {

  var value = value,
      newArr = [],
      length = this.array.length;

    for(var i = value; i < length; i++) {
      newArr.push(this.array[i])
    }

    return new MyArray(newArr)
};

MyArray.prototype.take = function(value) {

  var value = value,
      newArr = [],
      length = this.array.length;

    for(var i = 0; i < length; i++) {
      if(i < value) {
        newArr.push(this.array[i])
      }
    }

    return new MyArray(newArr)

};

MyArray.prototype.map = function(callback) {

  var newArr = [],
      length = this.array.length;

  for (var i = 0; i < length; i++) {

    newArr.push(callback(this.array[i]));
  }

  return new MyArray(newArr);
}

MyArray.prototype.filter = function(callback) {

  var newArr = [],
      length = this.array.length;

  for (var i = 0; i < length; i++) {

    if(callback(this.array[i])) {

      newArr.push(this.array[i])

    }
  }

  return new MyArray(newArr);

}

MyArray.prototype.forEach = function(callback) {

  var length = this.array.length;

  for (let i = 0; i < length; i++) {
    callback(this.array[i])
  }
}





var arr = new MyArray([3, 5, 2, 4, 1])


console.log(arr);


