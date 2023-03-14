/*//Funciones--------------------------------------------------------------------------

/////Publicas
let seccion = document.getElementById('resultados');
function Votaciones(){
    let edad=12;
    let votar=edad>18?"Puede votar":"No puede votar";
    seccion.innerHTML = votar;
}

Votaciones();

////////Anonimas
let producto = function(a, b){
    return a*b;
} 

let resultado = producto(2, 4);

seccion.innerHTML += '<br>' + resultado;

//por cosntructor usando pase de parametros

mifuncion = new Function('a', 'b', 'c', 'return (a*b) + c;');
let res2 = mifuncion(2,4,5);

seccion.innerHTML += '<br>' + res2;

//Autoinvocación
(function(){
    seccion.innerHTML+='<br>Hola AutoInvocación';
})();


//Funcion Autoinvocada con pase de argumentos
//Parametros son los nombres que aparecen en la definición de una función
//Arguemntos son los valores que pasemos a una función

(function(a=3, b=3){
    seccion.innerHTML+="<br>Suma = "+ (a+b);
})();

function Suma(a,b){
    if(b== undefined) b=0;
    return a+b;
}
var res3 = Suma(4);


//Mas Argumentos
//Cuando llamemos una funcion con argumentos
/*function valores(){
    alert("El número de argumentos es: " + arguments.length);
    for(var i=0;i<arguments.length;i++){
        alert('Argumento: ' + i + ' = ' + arguments[i]);
    }
}
valores(4,5,6,7,9,3);*/


/////////////////////////////////////////////////////////////////////////////////////////////

//REALIZAR LOS SIGUIENTES EJERCICIOS CON
//1. Calcular la superfucuos de un triangulo, solicitar al usaurio base y altura
function Triangulo(){
    base = document.getElementById('base').value;
    altura = document.getElementById('altura').value;
    let producto = function(a, b){
        return (a*b)/2;
    }
    let resultado = producto(base, altura);
    document.getElementById('Area').innerHTML = resultado;
}


function Imprimir(){
    nombre = document.getElementById('id').value;
    apellido = document.getElementById('id').value;
    curp = document.getElementById('id').value;
    domicilio = document.getElementById('id').value;
    etc = document.getElementById('id').value;
    let Datos = function(a, b, c, d, e){
        res = 'Nombre: ' + a + '<br>Apellido: ' + b + 'curp: '+ c + '<br> etc: ' + d + '<br> etc: '+ e;
        return res;
    }
    let imprimir = Datos(nombre, apellido, curp, domicilio, etc);
    document.getElementById('id').innerHTML = imprimir;
}

//2. SOLICITAR A UN USUARIO 5 DATOS PERSONALES E IMPRIMIRLOS EN UNA SECCION
function DatosImprimir(){
    arrayform = document.getElementById('formDatos').children;//RECUPERO LOS HIJOS DEL FORM
    seccion = document.getElementById('datos');//RECUPERO LA SECCION
    res = Concatenar(arrayform);//MANDO A LLAMAR 'CONCATENAR' MANDANDO EL NODO DE LOS HIJOS DEL FORM Y ES GURADADO EN 'RES'
    seccion.innerHTML += res;//IMPRIMO 'res'
}

//3.- CALCULAR EL SUELDO DE 5 TRABAJADORES EN UNA EMPRESA DE CALZADO, Y OBTENER EL 
        // TOTAL DE NOMINA A PAGAR
function Sueldos(){
    arrayform = document.getElementById('formSueldo').children;//RECUPERO LOS HIJOS DEL FORM
    seccion = document.getElementById('sueldo');//RECUPERO LA SECCION
    res = Numeros(arrayform);//MANDO A LLAMAR 'Numeros' MANDANDO EL NODO DEL FORM, SE GUARDARA EN 'res'
    seccion.innerHTML += 'Total de sueldo: ' + res; //IMPRIMPO 'res'

}
// 4.- CALCULAR EL PROMEDIO DE UN ALUMNO TENIENDO 3 MATERIAS EN EL CUATRIME
function Calificaciones(){
    arrayform = parseint (document.getElementById('formCalif').children);
    seccion = document.getElementById('calif');
    res = Numeros(arrayform);
    seccion.innerHTML += 'Promedio: ' + res/(arrayform.length-1);

}

function Numeros(a){
    res=0;//DEFINO 'res' A 0
    for(var i=0;i < a.length-1; i++){//CREO UN FOR CON LIMITE DEL TAMAÑO DE 'a' EL CUAL ES EL ARREGLO DEL FORM - EL MENOS 1 ES POR EL BOTÓN
        res += parseInt(a[i].value); //SUMO 'res' MÁS EL VALOR DEL SIGUIENTE INPUT
    }
    return res;
}
function Concatenar(a){//GENERO 'CONCATENAR PIDIENDO UN PARAMETRO'
    res='';//DEFINO 'res' VACIA
    for(var i=0;i < a.length-1; i++){//CREO UN FOR CON LIMITE DEL TAMAÑO DE 'a' EL CUAL ES EL ARREGLO DEL FORM - EL MENOS 1 ES POR EL BOTÓN
        res += a[i].id + ': '+ a[i].value + '<br>'; //CONCATENO CON AYUDA DE LA ID DE LOS INPUT Y EL VALUE
    }
    return res;//RETORNO 'res'
}
