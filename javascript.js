

 let vetortotal = [];
 let contaitens = 0;
let totalcarrinho =0;
let totalcarrinho1;


function adicionaitem (char , number, codigoitem) {
	 let valor = document.getElementsByClassName("valor")[codigoitem];
	 let valor1 = valor.value;

	 console.log(valor);

	 if (valor1 == 0) {
	 	return } else {
	 
		alert('ITEM ADICIONADO');
		 let totalitem = (valor1 * number);
		 let totalitemarredondado = parseFloat (totalitem.toFixed(2)); 
		 

		let e1 = document.createElement('li');
		let item = document.createTextNode(valor1 + "x " + char + " " + "R$:" + number + " /Un - " + "Total = R$: " + totalitemarredondado);
		e1.appendChild(item);
		let preenche = document.getElementsByTagName("ul")[0];
		preenche.appendChild(e1);

		vetortotal[contaitens] = totalitemarredondado;
       totalcarrinho = totalcarrinho+vetortotal[contaitens];
       totalcarrinho1 = parseFloat(totalcarrinho.toFixed(2));
	   alert('Total carrinho: ' + totalcarrinho1);
	   alert('Adicionado na posição ' + contaitens);
	   contaitens = contaitens + 1;
	   alert('Posição atual ' + contaitens);
	   



	  let ptotal = document.getElementById('ptot');
	   ptotal.textContent = totalcarrinho1;         
	   
	}

	
}

function removeitem (){

	if (contaitens == 0) {
	 	return } else {
   
  alert('Posição atual ' + contaitens);
  contaitens = (contaitens - 1);
  

  let remocao = document.getElementsByTagName("li") [contaitens]; 
  let container = document.getElementsByTagName('ul') [0];
  container.removeChild(remocao);


  totalcarrinho = totalcarrinho -  vetortotal[contaitens];
  totalcarrinho1 = parseFloat(totalcarrinho.toFixed(2));
  alert('Total carrinho: ' + totalcarrinho1);
  vetortotal[contaitens] = 0;
  alert('Item removido da posição ' + contaitens);
  alert('Posição atual: ' + contaitens);
  

  let ptotal = document.getElementById('ptot');
	   ptotal.textContent = totalcarrinho1; 

	}
}



