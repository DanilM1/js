let n = 0, s1 = prompt("Введите строку:"), s2 = "";
n = s1.length;
for (let i = n - 1; i >= 0; i--) {
    s2 += s1[i];
}
console.log(s2);