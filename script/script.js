let value1, value2, operator;
//La variable result para manipular la cadena de texto
let result = document.getElementById('result');
let tempResult = document.getElementById("temp-result");

/**
 * Agrega un caracter segun el boton que el usuario ha presionado
 * en pantalla
 * @param button boton que el usuario ha presionado
 */
function handleButton(button) {
    //Se divide la cadena por caracteres y se almacena en un arreglo
    let resultArr = tempResult.innerHTML.split('');

    if (result.innerHTML == '0') {
        result.innerHTML = button;
    }
    else if (isNaN(button) && button != '.') {
        if (tempResult.innerHTML == '') {
            tempResult.innerHTML = result.innerHTML + button;
            result.innerHTML = '0';
        }
        else {
            /**
             * const replaced = tempResult.innerHTML.slice(0, -1) + button;
                        tempResult.innerHTML = replaced;
             */
            tempResult.innerHTML += result.innerHTML + button;
            result.innerHTML = '0';
        }
    }
    else if (button == '.') {
        if (result.innerHTML.includes('.') == false) {
            result.innerHTML += button;
        }
    }
    else {
        result.innerHTML += button;
    }
}

function squareroot() {
    //Se concatena el tempResult con el result, luego eval ejecuta las operaciones
    //dentro de un string y math.sqrt obtiene la raiz cuadrada
    let temp = Math.sqrt(eval(tempResult.innerHTML + result.innerHTML));
    //Se almacena el simbolo de raiz cuadrada + el contenido del tempResult
    //almacenado en la variable another
    let another = '&#8730;' + tempResult.innerHTML;
    //Se concatena another con el result.innerHTML y se asigna al tempResult.innerHTML
    tempResult.innerHTML = another + result.innerHTML;
    //Se debe poner un string para que se concatene con los números
    result.innerHTML = '' + temp;
}

function reset() {
    console.log('Cleaning...');
    result.innerHTML = '0';
    tempResult.innerHTML = '';
}

function equal() {
    let temp = eval(tempResult.innerHTML + result.innerHTML);
    tempResult.innerHTML += result.innerHTML + "=";
    result.innerHTML = '' + temp;
}

function deleteLast() {
    let arrayDelete = result.innerHTML.split('');
    console.log(arrayDelete);
    arrayDelete.pop();
    result.innerHTML = arrayDelete.join('');
    if (result.innerHTML == '') {
        result.innerHTML = '0';
    }
}
function shootoff() {
    let confirm = alert("Está seguro que desea apagar la calculadora?!")
    confirm ? result.innerHTML = "Apagado" : ""
}