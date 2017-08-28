var content = document.getElementById('containerGrid');
var sourcePic = ['cabin.png','cake.png','circus.png','game.png','safe.png','submarine.png'];

for(var i in sourcePic){
	var div = document.createElement('div');
	var img = document.createElement('img');
	div.setAttribute('class','div-image');
	img.src = 'assets/img/portfolio/'+ sourcePic[i];
	div.appendChild(img);
	content.appendChild(div);
}

var modal = document.getElementById('modal');
var close = document.getElementById('close');
var btnClose = document.getElementById('btn-close');
var contentImage = document.getElementById('viewImage');
var classImage = document.getElementsByClassName('div-image');

content.addEventListener("click",function(event){
	if (event.target.tagName == "IMG"){
		modal.style.display = "block";
		contentImage.src = event.target.src;
		contentImage.id = event.target.id;
	}
});
content.addEventListener("mouseover",function(event){
	if (event.target.tagName == "IMG"){
		//event.target.nextSibling.style.backgroundColor = '#18bc9c';
		/*this.children.style.backgroundColor = '#18bc9c';
		this.children.style.opacity = "0.5";
		this.children.style.zIndex = '4';*/
		event.target.style.opacity = "0.5";	
		console.log('funciona');
	}
});
content.addEventListener("mouseout",function(event){
	if (event.target.tagName == "IMG"){
		//event.target.nextSibling.style.backgroundColor = '#18bc9c';
		event.target.style.opacity = "1";
	}
});

close.addEventListener("click",function(){
	modal.style.display = "none";
});

btnClose.addEventListener("click",function(){
	modal.style.display = "none";
});

var submit = document.getElementById('submit');
var name = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');

submit.addEventListener('click', function(){
	validate();
});
//VALIDACION DE FORMULARIO

function validate(){

	if(name.value == undefined){
		alert('Please enter your name.');
	} else if(isNaN(parseInt(name.value))){
		alert('Thats a number, Please enter your name.');
		name.innerHTLM = '';
	}else if(!isNaN(parseInt(name.value))){
		alert('Form complete!');
		name.innerHTLM = '';
	}

	if(!(/\S+@\S+\.\S+/.test(email.value))){
		alert('Please enter a valid email.');
	}else{
		alert('Form complete!');
	}

	if(phone.value == undefined){
		alert('Please enter a number.');
	} else if(isNaN(parseInt(phone.value))){
		alert('Thats not a number, Please enter a number.');
		phone.innerHTLM = '';
	}else{
		alert('Form complete!');
		phone.innerHTLM = '';
	}

	if(message.value == undefined){
		alert('Please enter a message.');
	} else{
		alert('Form complete!');
		name.innerHTLM = '';
	}
	
}
