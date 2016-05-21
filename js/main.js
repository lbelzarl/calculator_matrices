var btn = document.querySelector('.multiply-btn');

btn.addEventListener('click', function(e) {
	var row = $('.matrix-a .row').length,
		column = $('.matrix-b input').length / $('.matrix-b .row').length, 
		A = $('.matrix-a input'),	// массив всех значений матрицы А
		B = $('.matrix-b input'),	// массив всех значений матрицы В
		matrixC = [];
	
	// Алгаритм перемножения матриц.
	for (var i = 0; i <= row; i+=2) {
		for (var j = 0; j <= column-1; j++) {
			var C = A[i].value * B[j].value + A[i+1].value * B[j+2].value;
			matrixC.push(C);
		}
	}

	// Выводим матрицу С.
	$('.matrix-c').empty();
	$('<div class="wrap"></div>').appendTo('.matrix-c')
	
	for (var i = 1, k = 0; i <= row; i++) {
		var div = $('<div class="row"></div>');
		div.appendTo('.matrix-c .wrap');

		for (var j = 1; j <= column; j++) {
			div.append('<input type="text" value="' + matrixC[k++] + '" disabled>');
		}
	}
});

	// var	check = '.' + $('input:radio:checked').val(),
	// if (e.target.classList.contains('add-row')) {
		
	// 	return;
	// }

	// if (e.target.classList.contains('remove-row')) {
	// 	//
	// 	return; 
	// }

	// if (e.target.classList.contains('add-column')) {
	// 	//
	// 	return;
	// }

	// if (e.target.classList.contains('remove-column')) {
	// 	//
	// 	return; 
	// }



// function add-row() {
// 	$('<div class="row">' +
//             '<input type="text" data-matrix="a" data-row="2" data-column="1">' +
//             '<input type="text" data-matrix="a" data-row="2" data-column="2">' +
//     '</div>')
// }


