let n = 0, arr = [0, 0, 0];
n = arr.length;
for (let i = 1; i < n; i++) {
    if (arr[0] !== arr[i]) {
        n = 0;
        break;
    }
}
if (n !== 0) {
    console.log(true);
}
else {
    console.log(false);
}