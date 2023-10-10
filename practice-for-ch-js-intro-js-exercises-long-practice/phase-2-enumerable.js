// Your code here

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

const cb = ele => {
    console.log(ele);
};

[1,4,5,6].myEach(cb);

Array.prototype.myMap = function(callback) {
    const new_arr = [];
    this.myEach(ele => new_arr.push(callback(ele)));
    return new_arr;
};

const addOne = ele => {
    return ele + 1;
};

console.log([4,3,6,6].myMap(addOne));

Array.prototype.myReduce = function(callback, initial_value) {

}

[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
});