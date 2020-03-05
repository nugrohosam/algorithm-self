function sumWithOthers(arr, arr2, total) {
    calculate(arr, arr2, total, 'sum')
}

function substractWithOthers(arr, arr2, total) {
    calculate(arr, arr2, total, 'substract')
}

function calculate(arr, arr2, total, type = 'sum') {
    let composite = []
    // add to composite
    for (let i = 0; i < arr.length; i++) {
        if (type == 'sum') composite.push(total - arr[i])
        else composite.push(total + arr[i])
    }

    // find the rest
    for (let i = 0; i < arr2.length; i++) {
        if (composite.includes(arr2[i])) {
            index1Arr = composite.indexOf(arr2[i])
            index2Arr = i
            break;
        }
    }

    return [index1Arr, index2Arr]
}

sumWithOthers([1, 2, 3, 4], [1, 2, 5, 4], 7)