function rotate(degrees, arr) {
    const len = arr.len
    let newArr = []

    switch (degrees) {
        case 90:
            newArr = rotateTo90(arr)
            break
        case 180:
            newArr = rotateTo90(rotateTo90(arr))
            break
        case 270:
            newArr = rotateTo90(rotateTo90(rotateTo90(arr)))
            break
        case 360:
            newArr = rotateTo90(rotateTo90(rotateTo90(rotateTo90(arr))))
            break
        default:
            break
    }


    printArr(newArr)
}

function rotateTo90(arr) {
    let newArr = new Array(arr[0].length)
    const len = arr[0].length
    const len2 = arr.length
    for (let i = 0; i < len; i++) {
        newArr[i] = new Array(len2 - 1)
        for (let j = len2 - 1; j >= 0; j--) {
            const index2 = ((len2 - 1) - j);
            newArr[i][index2] = arr[j][i]
        }
    }

    return newArr
}

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log('[' + arr[i].join(', ') + ']')
    }
}

const arr = [
    [1, 2, 3], // [4, 1]
    [4, 5, 6]  // [5, 2]
               // [6, 3] 
]

const arr2 = [
    [1, 2, 3, 4], //    [9, 5, 1]
    [5, 6, 7, 8], //    [10,6, 2]
    [9, 10, 11, 12], // [11,7, 3]
                     // [12,8, 4]
]

const degrees90 = 90
rotate(degrees90, arr);

const degrees180 = 180
rotate(degrees180, arr);