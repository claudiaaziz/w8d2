// Your code here

Array.prototype.bubbleSort = function() {
    sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                [this[i + 1], this[i]] = [this[i], this[i + 1]];
                sorted = false;
            }
        }
    }

    return this
};

// arr = [3,5,6,7,5]

// console.log(arr.bubbleSort()) 

String.prototype.substrings = function() {
    const subs = []

    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            subs.push(this.slice(i,j))
        }
    }

    return subs
}

console.log("claudia".substrings())