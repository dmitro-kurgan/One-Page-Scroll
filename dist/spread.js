'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(languages);

function Add(x, y, z) {
	// console.log(x + y + z);
	return x + y + z;
}

var numbers = [1, 2, 3];

var add = Add.apply(undefined, numbers);

console.log(add);