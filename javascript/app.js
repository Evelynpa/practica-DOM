function add(){
	/*obtener el valor*/
	var comments = document.getElementById("comment").value;
	if(comments === '' || comments === ' '){
		validate.style.display = 'block';
	}else{
		/*limpiar textarea*/
		document.getElementById("comment").value = "";

		validate.style.display = 'none';

		var newComments = document.createElement('div');
		var cont = document.getElementById('cont');
		var chek = document.createElement('input');
		chek.type = 'checkbox';

		var pharagraph = document.createElement('p');
		pharagraph.classList.add('color');
		var nodoText = document.createTextNode(comments);
		pharagraph.appendChild(nodoText);

		var heart = document.createElement('i');
		heart.classList.add('fa','fa-heart','heart');
		var trash = document.createElement('i');
		trash.classList.add('fa','fa-trash','trash');

		newComments.appendChild(chek);
		newComments.appendChild(trash);
		newComments.appendChild(heart);
		newComments.appendChild(pharagraph);
		cont.appendChild(newComments);

		chek.addEventListener('click',function(){
			pharagraph.classList.toggle('strike-out');
		})
		trash.addEventListener('click',function(){
			cont.removeChild(newComments);
		})
		heart.addEventListener('click',function(){
			heart.classList.toggle('red');
		})
	}
}