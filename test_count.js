function count(arr) {
    const total = arr.filter((value) => value > 0)

    if (total.length == 0) {
        return 0
    }

    let subTotal = 0
    let maxCount = 0
    let fromIndex = 0
    let toIndex = 0

    for (let i = 0; i < arr.length; i++) {
        subTotal = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            subTotal += arr[j]
            if (subTotal > maxCount) {
                maxCount = subTotal
                fromIndex = i
                toIndex = j
            }
        }
    }

    return arr.filter((value, key) => {
        return key >= fromIndex && key <= toIndex
    }).reduce((a, b) => {
        return a + b
    })
}

console.log(count([-2, 1, -3, 4, -1, 2, 1, -5, 4]))