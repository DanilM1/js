function validatorOfNumbers (n) {
    if (n > 1000) {
        console.log("Данные неверны.");
    }
    else {
        let m = Math.max(Math.floor(Math.pow(n, 0.5)), 1) + 1;
        if (n > 2) {
            for (let i = 2; i < m; i++) {
                if (n % i === 0) {
                    n = -1;
                    break;
                }
            }
        }
        if (n === -1) {
            console.log("Число непростое.");
        }
        else {
            console.log("Число простое.");
        }
    }
}

let n = 24;

validatorOfNumbers(n);