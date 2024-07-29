const caracter = 'Cadma';

console.log(caracter);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})


const circ = (diametro: number) => {
    return diametro * Math.PI;
}

console.log(circ(9));


let nomes = ['Provera', 'Cadma'];
nomes.forEach(items => {
    console.log(items);
})
//Atribuir um tipo de dado de dados explicito na variavle
let char: string;
let animais: (string|number)[]=[];
animais.push('Cao',1 ,'Gato',2);
animais.forEach(item =>{
    console.log(item);
})
let pessoa: {};
pessoa = {
    nome: 'Cadma',
    idade: 25
}
console.log(pessoa);