let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',

    //se añaden funciones al objeto
    keypress: function () {
        console.log('Se ha presionado una tecla')
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba')
    }
}

console.log(obj.nombre)
console.log(obj['nombre'])

let myKey = 'nombre'
//se le asigna a la variable myKey el valor de "nombre" para referirse al atributo "nombre" del objeto
console.log(obj[myKey])
//se llama al atributo dentro de objeto con el valor de myKey

myKey = 'keypress'
console.log(obj[myKey])
myKey = 'mouseOver'
console.log(obj[myKey])
//se cambian los valores de myKey para mandar a llamar distintos atributos, o en este caso funciones siendo la primera "keypress" y la siguiente "mouseOver"

// Arrays
let myArray = [];
// Se añaden distintas cosas al array, desde un número hasta una función
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj[myKey]);
myArray.push(function() {
    console.log('hola desde el array')
});
console.log(myArray);
console.log(myArray[2]());
console.log(myArray[3]());

let funcArray = [];

funcArray.push(() => console.log('Function 1'));
funcArray.push(() => console.log('Function 2'));
funcArray.push(() => console.log('Function 3'));

funcArray.forEach((item) => {
    item();
})