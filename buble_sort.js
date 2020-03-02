// wiki https://en.wikipedia.org/wiki/Bubble_sort

function bubleSort(numbers) {
    let len = numbers.length
    for (let i = 0; i < (len - 1); i++) {
        if (numbers[i] > numbers[i + 1]) {
            let temp = numbers[i]
            numbers[i] = numbers[i + 1]
            numbers[i + 1] = temp

            i = 0;
            console.log(numbers.join(', '))
            console.log('comback i')
        } else {
            console.log('i : ' + i)
        }
    }

    console.log('sorted : ' + numbers.join(', '))
}

bubleSort([0, 2, 1, 5, 4, 7, 5, 6, 8, 3, 9, 8, 10])