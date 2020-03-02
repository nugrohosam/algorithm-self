// wiki https://en.wikipedia.org/wiki/Quicksort

function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp

    return items
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)] //middle element
    let i = left // left pointer
    let j = right // right pointer

    console.log('pivot : ' + pivot)
    console.log('')

    while (i <= j) {
        while (items[i] < pivot) {
            console.log('if items[' + i + '] : ' + items[i] + ' < pivot : ' + pivot)
            i++
            console.log('i is ' + i)
        }

        while (items[j] > pivot) {
            console.log('if items[' + j + '] : ' + items[j] + ' < pivot : ' + pivot)
            j--
            console.log('j is ' + j)
        }

        console.log('if i <= j : ' + i + ' <= ' + j)
        if (i <= j) {

            console.log('before swap : ' + items)
            console.log(' ---------------------- ')
            items = swap(items, i, j) //sawpping two elements
            console.log('after swap : ' + items)

            i++
            j--
        }
    }

    console.log('return partiton : ' + i)
    return i
}

function quickSort(items, left, right) {
    var index
    if (items.length > 1) {
        index = partition(items, left, right) //index returned from partition

        console.log('partition is on index[' + index + '] : ' + items[index])

        if (left < index - 1) { //more elements on the left side of the pivot
            console.log('if left < index - 1 : ' + left + ' < ' + index - 1)
            quickSort(items, left, index - 1)
        }
        if (index < right) { //more elements on the right side of the pivot
            console.log('if index < right: ' + index + ' < ' + right)
            quickSort(items, index, right)
        }
    }

    return items
}

var items = [5, 3, 7, 6, 2, 9]
console.log(items.join(', '))
console.log('')
var sortedArray = quickSort(items, 0, items.length - 1)