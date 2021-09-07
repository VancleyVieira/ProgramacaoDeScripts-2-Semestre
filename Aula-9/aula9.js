const MENSAGEM = "Bem-vindo!"
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
    if(operacao == 1 || operacao == 2 || operacao == 3 || operacao == 4 ){
        if(operacao == 1){
            resultado = parseFloat(valor1 + valor2)
            document.write(`${valor1} + ${valor2} = ${resultado}`)
        }
        else if(operacao == 2){
            resultado = parseFloat(valor1 - valor2)
            document.write(`${valor1} - ${valor2} = ${resultado}`)  
        }
        else if(operacao == 3){
            resultado = parseFloat(valor1 * valor2)
            document.write(`${valor1} x ${valor2} = ${resultado}`)
        }else{
            resultado = parseFloat(valor1 / valor2)
            document.write(`${valor1} / ${valor2} = ${resultado}`)
        }
    }else{
        alert("Operação invalida")
        document.write("Operação invalida")
    }
}   

