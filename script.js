function myFunction() {
	var x = document.getElementById("myBtn").alert ("Ola");
;
	x.addEventListener("click", myFunction);
}

function myFunction() {
document.getElementById("p1").remove();
}

const pessoa = {Nome: 'ana', sobrenome: 'ricardo', idade:50, olho:"azul"};
const carro = ["Saab", "Volvo" , "BMW"];

document.getElementById("demo").innerHTML = 
typeof 0 + "<br>" +
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +

class Lapis {
	constructor(cor, ano) {
		this.cor = cor;
		this.ano = ano;
		
	}
	idade() { //Método
		let date = new Date();
		
		//getFullYear - retorna o ano atual
		return date.getFullYear() - this.ano;
	}
}

let meuLapis = new Lapis("amarelo", 2015);
document.getElementById("demo").innerHTML = 
"Meu lapis tem:" + meuLapis.idade() + " anos";
