/*const MENSAGEM = "Bem-vindo!"
alert(MENSAGEM)

var valor1 = parseFloat(prompt("Informe o valor1: "))
var valor2 = parseFloat(prompt("Informe o valor2: "))

var resultado = 0;

let operacao = parseFloat(prompt(`Qual operação deseja fazer?\n Digite '1' para adição \n Digite '2' para subtração
                                                             \n Digite '3' para multiplicação \n Digite '4' para divisão`))

if(isNaN(valor1) || isNaN(valor2)){
    alert("Valor invalido!!")
    console.log('Valor invalido!!')
    document.write('Valor invalido!!')
}else{
    switch(operacao){
        case 1:
            resultado = valor1 + valor2
            document.write(`${valor1} + ${valor2} = ${resultado}`)
            break
        case 2:
            resultado = valor1 - valor2
            document.write(`${valor1} - ${valor2} = ${resultado}`)
            break
        case 3: 
            resultado = valor1 * valor2
            document.write(`${valor1} x ${valor2} = ${resultado}`)
            break
        case 4:
            resultado = valor1 / valor2
            document.write(`${valor1} / ${valor2} = ${resultado}`)
            break
        default:
            resultado = "Operação invalida!"
            document.write(`${resultado}`)
    }
}   

*/
var numero = prompt(parseFloat("Informe um numero até 100: "))

if(!isNaN(numero)){
    while(numero <= 100){
        console.log("while: "+numero)
        numero++
    }
    do{
        console.log("do: "+numero)
        numero++
    }while(numero <= 100)
}