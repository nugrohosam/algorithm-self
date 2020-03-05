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
    let newArr = new Array(arr.length)
    const len = arr.length
    for (let i = 0; i < len; i++) {
        newArr[i] = new Array(arr.length)
        for (let j = len - 1; j >= 0; j--) {
            const index2 = ((len - 1) - j);
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
    [1, 2, 3], // [7, 4, 1]
    [4, 5, 6], // [8, 5, 2]
    [7, 8, 9] //  [9, 6, 3]
]

const arr2 = [
    [1, 2, 3, 4], //    [13, 9, 5, 1]           [16, 15, 14, 13]
    [5, 6, 7, 8], //    [14, 10,6, 2]   rotate  [12, 11, 10, 9]
    [9, 10, 11, 12], // [15, 11,7, 3]   again   [8,  7,  6,  5]
    [13, 14, 15, 16] // [16, 12,8, 4]           [4,  3,  2,  1]
]

const degrees90 = 90
const degrees180 = 180
const degrees270 = 270
const degrees360 = 360

rotate(degrees90, arr2);
rotate(degrees180, arr2);
rotate(degrees270, arr2);
rotate(degrees360, arr2);