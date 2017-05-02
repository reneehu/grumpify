var eventKeys = [];
var magicWord = 'cat';

function grumpify() {
	var images = document.querySelectorAll('img');
	images.forEach( image => {
		image.src = 'https://media.giphy.com/media/vPN3zK9dNL236/giphy.gif';
		// console.log(image.src);
	})
}

window.addEventListener('keyup', e => {
	// console.log(e.key);
	eventKeys.push(e.key);
	eventKeys.splice( -magicWord.length - 1, eventKeys.length - magicWord.length);
	if (eventKeys.join('').includes(magicWord)){
 		grumpify();
	}
})