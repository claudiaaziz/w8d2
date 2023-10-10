// Your code here

const range = (start, end) => {
    const result = []

    if (start > end) return []
    result.push(start)
    return result.concat(range(start + 1, end))
}

// console.log(range(1,6))

const sumRec = arr => {
    let sum = arr[0]
    if (arr.length < 1) return 0
    return sum += sumRec(arr.slice(1))
}

// console.log(sumRec([3,5,6]))

const exponenet = (base, exp) => {
    
}