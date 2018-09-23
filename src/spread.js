let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages);

function Add(x, y, z) {
	// console.log(x + y + z);
	return x + y + z;
}

let numbers = [1, 2, 3];

let add = Add(...numbers);

console.log(add);