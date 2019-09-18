var variavel = 'minha var';

function minhafunc(x, y)
{
    return x+y;
}

//ES 6 ou ES 2015
let num = 2;
const PI = 3.1415;

//Javascript vanilla
var numero = [1,2, 3];
numero.map(function(valor){
    return valor * 2;
})

//arrow functions ES 6 ou ES 2015
numero.map( valor => valor *2 )

class Matematica{

    soma(x,y){
        return x+y;
    }

}