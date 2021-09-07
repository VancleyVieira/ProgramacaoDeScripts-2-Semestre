const MENSAGEM = "Bem-vindo!"
alert(MENSAGEM)

do{

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
                alert(`${valor1} + ${valor2} = ${resultado}`)
                document.write("<br>"+`${valor1} + ${valor2} = ${resultado}`)
            }
            else if(operacao == 2){
                resultado = parseFloat(valor1 - valor2)
                alert(`${valor1} - ${valor2} = ${resultado}`)
                document.write("<br>"+`${valor1} - ${valor2} = ${resultado}`)  
            }
            else if(operacao == 3){
                resultado = parseFloat(valor1 * valor2)
                alert(`${valor1} x ${valor2} = ${resultado}`)
                document.write("<br>"+`${valor1} x ${valor2} = ${resultado}`)
            }else{
                resultado = parseFloat(valor1 / valor2)
                alert(`${valor1} / ${valor2} = ${resultado}`)
                document.write("<br>"+`${valor1} / ${valor2} = ${resultado}`)
            }
        }else{
            alert("Operação invalida")
            document.write("Operação invalida")
        }
    }   
    var escolha = prompt("Deseja continuar calculando?\nDigite 1 se sim ou qualquer coisa se não:")
    var repetir = 1
    if(escolha == repetir){
        escolha++
        repetir++
    }else{
        alert("Fim do Processamento!")
        document.write("<br>"+"Fim do Processamento!")
        
    }
}while(escolha == repetir);
