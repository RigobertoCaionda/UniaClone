document.querySelectorAll('.helpIcons--item').forEach((item, index)=>{
	item.addEventListener('click',()=>{
		let helpIconsBox = document.querySelector('.helpIcons--box');
		let title = document.querySelector('.helpIcons--box--title h1');
		let text = document.querySelector('.helpIcons--box--text');
	if(helpIconsBox.classList.contains('setRight')){
		helpIconsBox.classList.remove('setRight');
	}else{
		helpIconsBox.classList.add('setRight');
	}
		if(index == 0){
			title.innerHTML = 'VEJA OS CURSOS QUE TEMOS PARA SI';
			text.innerHTML = "A UnIA é um projecto ambicioso e arrojado. A aposta em licenciaturas de cariz tecnológico é uma marca desta instituição que pretende criar um ambiente institucional que promova o desenvolvimento intelectual dos alunos e docentes, nacionais e internacionais, incentivando a troca de conhecimentos como um método evolutivo de aprendizagem.<br>Como aceder aos nossos cursos:<br><br><div class='alignment'><span>1</span> Menu Principal- <a href=''>clique aqui</a><br><br><span>2</span> Na barra lateral direita em baixo</div>";
		}else if(index == 1){
			title.innerHTML = 'UNIA';
			text.innerHTML = "A Universidade Independente de Angola, conta com um edifico de 5 pisos, 4 pavilhões e um edifico de 2 pisos, em conformidade com as exigências de qualidade dos nossos alunos. O esforço desenvolvido por todos quantos fazem a UnIA - entre docentes, discentes, reitoria, administração escolar e restantes trabalhadores, tem-se traduzido num aumento regular de número de novos alunos.";
		}
	});
});
document.querySelector('.menu--toggle').addEventListener('click',()=>{
	let menuBottom = document.querySelector('.menu--bottom');
	if(menuBottom.classList.contains('removeMargin')){
		menuBottom.classList.remove('removeMargin');
	}else{
		menuBottom.style.transition = 'all ease-in 0.4s';
		menuBottom.classList.add('removeMargin');
	}
});
document.querySelectorAll('.prevent--default').forEach((item)=>{
	item.addEventListener('click',(e)=>{
		e.preventDefault();
		let submenu = item.closest('li').querySelector('.submenu');
		if(submenu.style.display == ""){
			submenu.style.display = 'block';
		}else if(submenu.style.display == "block"){
			submenu.style.display = 'none';
		}else if(submenu.style.display == 'none'){
			submenu.style.display = 'block';
		}
	});
});
