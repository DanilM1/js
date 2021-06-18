let n = 0, arr1 = [1, 2, 0, "RF", NaN, true], arr2 = [0, 0, 0];
n = arr1.length;

for (let i = 0; i < n; i++) {
    if (typeof(arr1[i]) === 'number') {
        if (arr1[i] === 0) {
            arr2[0]++;
        } else if (arr1[i] % 2 > 0) {
            arr2[1]++;
        } else {
            arr2[2]++;
        }
    }
}
console.log(`В массиве: ${arr2[0]} нулей; ${arr2[1]} нечетных чисел; ${arr2[2]} четных чисел`);