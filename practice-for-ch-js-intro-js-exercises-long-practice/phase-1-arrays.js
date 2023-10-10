// Your code here

Array.prototype.uniq = function() {
    const new_arr = []

    for (const ele of this) {
        if (!new_arr.includes(ele)) new_arr.push(ele)
    }

    return new_arr
}

// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function() {
    const new_arr = []

    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) new_arr.push([i, j])
        }
    }

    return new_arr
}

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function() {
    const result = []

    // row
    for (let i = 0; i < this.length; i++) {
        const new_row = []
        // ele 
        for (let j = 0; j < this.length; j++) {
            new_row.push(this[j][i])
        }
        result.push(new_row)
    }

    return result
}

console.log(
    [[0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8]].transpose())