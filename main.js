function Converter() {    
    let valor = document.getElementById('valor').value;
    let moeda = document.getElementById('moeda').value;
   
    let valorFloat = parseFloat(valor)
    let resultadoDolar = (valorFloat * 5.25).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let resultadoEuro = (valorFloat * 6.20).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let resultadoBit = (valorFloat * 243.730).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    //Resultado
    document.getElementById("valorConvertidoDolar").style.display = 'none';
    document.getElementById("valorConvertidoEuro").style.display = 'none';
    document.getElementById("valorConvertidoBit").style.display = 'none';
    document.getElementById("valorConvertidoErro").style.display = 'none';
    document.getElementById("valorConvertidoErroValor").style.display = 'none';

    if (moeda == 'dolar' && valor != '') {        
        document.getElementById("valorConvertidoDolar").style.display = 'block';
        document.getElementById('valorConvertidoDolar').innerHTML = `O valor em real é ${resultadoDolar}`;
    } else if ( moeda == 'euro' && valor != '') {
        document.getElementById("valorConvertidoEuro").style.display = 'block';
        document.getElementById('valorConvertidoEuro').innerHTML = `O valor em real é ${resultadoEuro}`;
    } else if (moeda == 'bit' && valor != '') {
        document.getElementById("valorConvertidoBit").style.display = 'block';
        document.getElementById('valorConvertidoBit').innerHTML = `O valor em real é ${resultadoBit}`;
    } else if (valor == '') {
        document.getElementById("valorConvertidoErroValor").style.display = 'block';
        document.getElementById('valorConvertidoErroValor').innerHTML = `Insira um valor!`;
    } else {
        document.getElementById("valorConvertidoErro").style.display = 'block';
        document.getElementById('valorConvertidoErro').innerHTML = `Escolha uma moeda!`;
    }

}

// n.toLocaleString('pt-BR', {style: 'currency', currency: 'R'})