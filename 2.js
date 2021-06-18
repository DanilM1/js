let value = 23;

switch(typeof(value)) {
    case 'number':
        console.log(`${value} - число.`);
        break;
    case 'string':
        console.log(`${value} - строка.`);
        break;
    case 'boolean':
        console.log(`${value} - логический тип данных.`);
        break;
    default:
        console.log(`Тип ${value} не определён.`);
}