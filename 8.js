let map = new Map();

map.set(1, 0);
map.set('3', '2');

for (let elem of map.keys()) {
    console.log(`Ключ - ${elem}, значение - ${map.get(elem)}`);
}