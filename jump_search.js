// wiki https://en.wikipedia.org/wiki/Jump_search
// image https://www.google.com/search?q=jump+search&safe=strict&rlz=1C5CHFA_enID840ID840&sxsrf=ALeKk00nWAUWkvkD7bY5V8LMhQXKE6-8Dg:1583105940556&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj05umZufrnAhVC73MBHQT3CgQQ_AUoAXoECBAQAw&biw=1280&bih=721#imgrc=cNpL9HAcy4GBsM

function jumpSearch(arr, x) {
    const arraySize = arr.length

    if (!arraySize) {
        // We can't find anything in empty array.
        return -1
    }

    // Calculate optimal jump size.
    // Total number of comparisons in the worst case will be ((arraySize/jumpSize) + jumpSize - 1).
    // The value of the function ((arraySize/jumpSize) + jumpSize - 1) will be minimum
    // when jumpSize = √array.length.
    const akarArrSize = Math.sqrt(arraySize)
    const jumpSize = Math.floor(akarArrSize)
    console.log('jump to size : ' + jumpSize + ', from Math.floor(Math.sqrt(' + arraySize + ')) equal Math.floor(' + akarArrSize + ')')

    // Find the block where the x belong to.
    let blockStart = 0
    let blockEnd = jumpSize
    console.log('block start : ' + blockStart)
    console.log('block end : ' + blockEnd)
    console.log('')

    while (x > arr[Math.min(blockEnd, arraySize) - 1]) {
        console.log('do if more than x > arr[Math.min(blockEnd, arraySize) - 1] : ' + x + ' > arr[Math.min(' + blockEnd + ', ' + arraySize + ') - 1 ]')
        console.log('jump size : ' + jumpSize)

        // Jump to the next block.
        blockStart = blockEnd
        blockEnd += jumpSize

        // If our next block is out of array then we couldn't found the element.
        if (blockStart > arraySize) {
            console.log('')
            console.log('if more than : ' + arraySize + ', you will stop. block start is on ' + blockStart)
            return -1
        }

        console.log('block start : ' + blockStart + ', block end from blockEnd + jumpSize : ' + blockEnd)
        console.log('')
    }

    console.log('if less than : ' + arraySize + ', you will stop. block start is on ' + blockStart)
    console.log('search with patience')
    console.log('')

    // Do linear search for x in subarray starting from blockStart.
    let currentIndex = blockStart
    console.log('start from index : ' + currentIndex)
    console.log('')

    while (currentIndex < Math.min(blockEnd, arraySize)) {
        console.log('search : arr[' + currentIndex + '] == ' + x + ' : ' + arr[currentIndex] + ' == ' + x)

        if (arr[currentIndex] == x) {
            console.log('find on index : ' + currentIndex)
            return;
        }

        currentIndex += 1
    }

    console.log('not find on all indexes')
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 17, 18, 20]
for (let i = 0; i < 999985; i++) {
    arr.push(20)
}

for (let i = 0; i < 1000000; i++) {
    arr.push(22)
}
const x = 21

jumpSearch(arr, x)