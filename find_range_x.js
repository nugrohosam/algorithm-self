function firstPos(arr, x) {

    const len = arr.length
    let low = 0
    let first = -1;
    let high = len - 1
    console.log('')
    console.log('<--------------------------------------->')
    console.log('find : ' + x)
    console.log('')
    console.log('')
    
    while (low <= high) {
        const mid = parseInt(low + (high - low) / 2)
        console.log('mid now : mid from parseInt(low + (high  - low ) / 2)')
        console.log('mid now : ' + mid + ' from parseInt(' + low + ' + (' + high + ' - ' + low + ') / 2)')

        if (arr[mid] >= x) {
            first = mid;
            printPointer(arr, low, mid)
            console.log('because x find it high = mid--')
            high = mid - 1
        } else {
            printPointer(arr, mid, high)
            console.log('because x not find it low = mid++')
            low = mid + 1
        }

        console.log('low : ' + low)
        console.log('high : ' + high)
        console.log('')

    }
    
    return first;
}

function printPointer(arr, low, high) {
    const pointer = arr.map((_, key) => {
        if (key == low || key == high) {
            return key == low ? 'v' : 'x';
        } else {
            return '-';
        }
    })

    console.log('src : ' + pointer.join('--'))
    console.log('arr : ' + arr.join(', '))
}

function findrange(arr, x) {
    const firstIndex = firstPos(arr, x)
    const lastIndex = firstPos(arr, x + 1) - 1;

    console.log('')
    console.log([firstIndex, lastIndex])
}

findrange([2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 8, 9, 9], 8)