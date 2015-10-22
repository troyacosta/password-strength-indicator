(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var feedback = document.getElementById('feedback');

function checkPassword(length, password) {
	var veryWeak = /\d+/;
	var weak = /[a-z]+/i;
	var strong = /(?=[a-z]+)(?=\d+)/i;
	var veryStrong = /(?=[a-z]+)(?=\d+)(?=[!@#$%^&*()?]+)/i;
	if (length > 7) {
		if (veryStrong.test(password)) {
			return feedback.innerHTML = 'That\'s a good, strong password.';
		} else if (strong.test(password)) {
			return feedback.innerHTML = 'Not too bad. You\'re password doesn\'t suck anymore.';
		}
	}
	if (length < 8) {
		if (weak.test(password)) {
			return feedback.innerHTML = 'It\'s getting better, but it still sucks.';
		} else if (veryWeak.test(password)) {
			return feedback.innerHTML = 'Your password sucks.';
		}
	}
}

function getPassword() {
	var password = document.querySelector('input').value;
	var length = password.length;
	checkPassword(length, password);
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map