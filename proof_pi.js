function proof_pi(n) {
    let point_to_cirle = 0;
    let point_to_rectangle = 0;

    for (let i = 0; i < n; i++) {
        let x = Math.random()
        let y = Math.random()

        let xMultiply = x * x
        let yMultiply = y * y

        let distance = Math.sqrt(xMultiply + yMultiply)
        if (distance <= 1) {
            point_to_cirle++;
        }

        point_to_rectangle++
    }

    // area cicle / area rectangle
    // 
    // pi * r^2 / 2r * 2 = point_to_cirle / point_to_rectangle
    // cause if max of r = 1
    // 
    // pi / 4 = point_to_cirle / point_to_rectangle
    // pi = 4 * (point_to_cirle / point_to_rectangle)
    console.log(4 * (point_to_cirle / point_to_rectangle))
}

proof_pi(1000)