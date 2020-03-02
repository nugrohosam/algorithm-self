function linearSearch(arr, x) {
    z
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            console.log('its found on index : ' + i)
            return;
        }

        console.log('arr[i] : ' + arr[i])
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 17, 18, 20]
const x = 20

linearSearch(arr, x)