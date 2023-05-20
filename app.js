/* eslint-disable no-undef */
// eslint-disable-next-line no-var
const countNum = document.querySelector('.Number');
const decreaseBtn = document.querySelector('.Decrease');
const increaseBtn = document.querySelector('.Increase');
const resetBtn = document.querySelector('.Reset');

document.body.style.backgroundColor = '#f0f05b';

decreaseBtn.addEventListener('click', function() {
	console.log('Decrease Button Hit');
	countNum.innerHTML = countNum.innerHTML - 1;
	if (countNum.innerHTML < 0) {
		document.body.style.backgroundColor = '#d95f4c';
	}
	else if (countNum.innerHTML == 0) {document.body.style.backgroundColor = '#f0f05b';}
});

increaseBtn.addEventListener('click', function() {
	console.log('Increase Button Hit');
	countNum.innerHTML = countNum.innerHTML - -1;
	if (countNum.innerHTML > 0) {
		document.body.style.backgroundColor = '#32a852';
	}
	else if (countNum.innerHTML == 0) {document.body.style.backgroundColor = '#f0f05b';}
});

resetBtn.addEventListener('click', function() {
	console.log('Resetted');
	countNum.innerHTML = 0;
	document.body.style.backgroundColor = '#f0f05b';
});

