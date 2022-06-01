window.onload = function () {
	criaHeader(tituloDoHeader);
	criaParagrafo(textoDoHeader);
	criaMain();
	criaSessao('main', 'sessao-input');
	criaInput('#sessao-input');
	criaButton('#sessao-input', 'criar-tarefa', adicionaLi, 'Adiciona à Lista');
	criaButton('#sessao-input', 'salvar-tarefas', adicionaLi, 'Salva as tarefas');
	criaSessao('main', 'sessao-lista-tarefas');
	criaListaOrdenada('#sessao-lista-tarefas');
	criaSessao('main', 'sessao-botoes');
	criaButton('#sessao-botoes', 'apaga-tudo', apagaTudo, 'Limpa Tudo');
	criaButton('#sessao-botoes', 'remover-finalizados', apagaFinalizados, 'Exclui Finalizados');
	criaButton('#sessao-botoes', 'remover-selecionado', apagaSelecionado, 'Exclui Selecionado');
}


const tituloDoHeader = 'Minha Lista de Tarefas';
const textoDoHeader = 'Clique duas vezes em um item para marcá-lo como completo';


function criaHeader(titulo) {
	let recebe = document.querySelector('body');
	let cria = document.createElement('header');
	cria.innerText = titulo;
	recebe.appendChild(cria);
}

function criaParagrafo(texto) {
	let recebe = document.querySelector('header');
	let cria = document.createElement('p');
	cria.innerText = texto;
	cria.id = 'funcionamento';
	recebe.appendChild(cria);
}

function criaMain() {
	let recebe = document.querySelector('body');
	let cria = document.createElement('main');
	recebe.appendChild(cria);
}

function criaSessao(elementoPai, idFornecida) {
	let recebe = document.querySelector(elementoPai);
	let cria = document.createElement('section');
	cria.id = idFornecida;
	recebe.appendChild(cria);
}

function criaInput(elementoPai) {
	let recebe = document.querySelector(elementoPai);
	let cria = document.createElement('input');
	cria.id = 'texto-tarefa';
	cria.type = 'text';
	recebe.appendChild(cria);
}

function criaListaOrdenada(elementoPai) {
	let recebe = document.querySelector(elementoPai);
	let cria = document.createElement('ol');
	cria.id = 'lista-tarefas';
	recebe.appendChild(cria);
}

function criaButton(elementoPai, buttonId, funcaoDoEvento, textoDoBotao) {
	let recebe = document.querySelector(elementoPai);
	let cria = document.createElement('button');
	cria.id = buttonId;
	cria.innerText = textoDoBotao;
	cria.addEventListener('click', funcaoDoEvento);
	recebe.appendChild(cria);
}

function adicionaLi() {
	let recebe = document.querySelector('#lista-tarefas');
	let cria = document.createElement('li');
	let textoInput = document.querySelector('#texto-tarefa');
	if (textoInput.value !== '') {
		cria.innerText = textoInput.value;
		cria.addEventListener('click', function() {
			removeClasse();
			this.className += ' fundo-especial';
		});
		cria.addEventListener('dblclick', function () {
			if (this.classList.contains('completed')) {
				this.classList.remove('completed');
			} else {
				this.className += ' completed';
			}
		});
		recebe.appendChild(cria);
		textoInput.value = '';
	}

	function removeClasse() {
		let recebe = document.querySelectorAll('#lista-tarefas li');
		for (let index = 0; index < recebe.length; index++){			
			recebe[index].classList.remove('fundo-especial');
		}
	}

}

function apagaTudo () {
	let recebe = document.getElementById('lista-tarefas');
	while (recebe.firstChild) {
		recebe.removeChild(recebe.firstChild);
	}
}

function apagaFinalizados () {
	let recebe = document.querySelectorAll('.completed');
		for (let index = 0; index < recebe.length; index++){	
			recebe[index].remove();
		}

}

function apagaSelecionado () {
	let recebe = document.querySelectorAll('.fundo-especial');
		for (let index = 0; index < recebe.length; index++){	
			recebe[index].remove();
		}

}


