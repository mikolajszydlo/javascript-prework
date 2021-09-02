function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(rsl){
	document.getElementById('result').innerHTML = rsl;
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}