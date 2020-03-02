function findDuplicate(numbers) {

    console.log('numbers[0] : ' + numbers[0])
    let tortoise = numbers[0]
    console.log('tortoise : ' + tortoise)
    let here = numbers[0]
    console.log('here : ' + here)
    let i = 0;
    console.log('numbers : [' + numbers.join(', ') + ']')
    console.log('')

    while (true) {
        i++
        let index = tortoise
        let index2 = numbers[here]
        
        console.log('initialize tortoise from numbers[' + index + '] : ' + numbers[index])
        console.log('initialize here from value on numbers[' + here + '] : ' + index2 + ', means numbers[' + index2 + '] : ' + numbers[index2])
        drawGraph(numbers, index, index2);

        tortoise = numbers[index]
        here = numbers[index2]
        console.log(i + '. tortoise[' + index + ']: ' + tortoise + ', here[' + index2 + ']: ' + here)
        console.log('')

        if (tortoise == here) {
            break
        }
    }

    let ptr1 = numbers[0]
    let ptr2 = tortoise
    let j = 0
    while (ptr1 != ptr2) {
        j++
        console.log(j + '. this the ptr1 : ' + ptr1 + ', this the ptr2 : ' + ptr2)

        ptr1 = numbers[ptr1]
        ptr2 = numbers[ptr2]
    }

    console.log('this the duplicate numbers : ' + ptr1);
}

function drawGraph($numbers, $pointer1 = null, $pointer2 = null) {
    $arr = $numbers.map((val, key) => {
        if (key == $pointer1) {
            return val >= 10 ? 't ' : 't'
        } else if (key == $pointer2) {
            return val >= 10 ? 'h ' : 'h'
        } else {
            return val >= 10 ? '  ' : ' '
        }
    })
    console.log($arr.join('    '))
    console.log($numbers.join(' -> '))
}

findDuplicate([9, 2, 13, 5, 6, 1, 10, 7, 8, 4, 3, 11, 12, 1, 14, 15])