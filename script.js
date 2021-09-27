const input = document.getElementById('input');
const enter = document.getElementById('enter');
const show = document.getElementById('show');
const historyPlace = document.getElementById('historyPlace');
var [ howManyA, howManyB ] = [ 0, 0 ];

const submit = () => {
	enterArray = [];
	for (let i=0 ; i<4 ; i++) { 
		enterArray.unshift( Math.floor( enter.value / 10 ** i % 10 ) );
	}
	[ a, b ] = [ checkA(enterArray, answerNum), checkB(enterArray, answerNum) ];
	b -= a;
	a == 4 ? show.innerText = "correct" : show.innerText = `${ a } A ${ b } B`;
	writeHistory(enterArray, a, b);
	enter.value = "";
}

const checkA = ( enter, ans ) => {
	howManyA = 0;
	for(let i=0 ; i<4 ; i++) {
		if ( enter[i] == ans[i] ) {
			howManyA += 1;
		}
	}
	return howManyA
}

const checkB = ( enter, ans ) => {
	howManyB = 0;
	for(let i=0 ; i<4 ; i++) {
		for(let k=0 ; k<4 ; k++) {
			if (enter[i] == ans[k]) {
				howManyB += 1;
			}
		}
	}
	return howManyB
}

const writeHistory = ( enter, a, b ) => {
	var p = document.createElement("p");
	enterShow = enter.join(" ");
  p.innerText = `${ enterShow } <---> ${ a } A ${ b } B`;
  historyPlace.appendChild(p);
}

const allReset = () => {
	addValue(false);
	chooseFourNum();
	show.innerText = '';
	historyPlace.innerText = "";
}

const addValue = (num) => { num ? enter.value = enter.value + num : enter.value = "" }

const chooseFourNum = () => {
	allNum = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	answerNum = [];
	for(let i=0 ; i<4 ; i++) {
		whichNumber = Math.floor( Math.random() * allNum.length );
		answerNum.push( allNum.splice( whichNumber, 1 )[0] ); 
	}
}

enter.addEventListener("keypress", function() { if (event.keyCode === 13) { submit() } })

//default
chooseFourNum();