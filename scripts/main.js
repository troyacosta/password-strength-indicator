'use strict';
var feedback = document.getElementById('feedback');

function checkPassword(length, password) {
	var veryWeak = /\d+/;
	var weak = /[a-z]+/i;
	var strong = /(?=[a-z]+)(?=\d+)/i;
	var veryStrong = /(?=[a-z]+)(?=\d+)(?=[!@#$%^&*()?]+)/i;
	if(length > 7) {
		if(veryStrong.test(password)) {
			return feedback.innerHTML = 'That\'s a good, strong password.';
		}
		else if(strong.test(password)) {
		return feedback.innerHTML = 'Not too bad. You\'re password doesn\'t suck anymore.';
		}
	}
	if(length < 8) {
		if(weak.test(password)) {
		return feedback.innerHTML = 'It\'s getting better, but it still sucks.';
		}
		else if(veryWeak.test(password)) {
		return feedback.innerHTML = 'Your password sucks.';
		}
	}
}

function getPassword() {
	var password = document.querySelector('input').value;
	var length = password.length;
	checkPassword(length, password);
}