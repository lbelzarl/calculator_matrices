$('.multiply-btn').on('click', function(e) {
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

		for (var j = 1; j <= column; j++) {
			div.append('<input type="text" value="' + matrixC[k++] + '" disabled>');
		}

		div.appendTo('.matrix-c .wrap');
	}
});

$('.add-remove').on('click', function(e) {
	var	check = '.' + $('input:radio:checked').val(),
		row = $(check + ' .row'),
		column = $(check + ' input').length / row.length;

	// Добавляет строку выбранной матрице
	if (e.target.classList.contains('add-row')) {
		var div = $('<div class="row"></div>');
		
		for (var i = 0; i < column; i++) {
			div.append('<input type="text">');
		}

		div.appendTo(check + ' .wrap');
		return;
	}

	// Удаляет строку выбранной матрицы
	if (e.target.classList.contains('remove-row')) {
		 
		return;
	}

	// Добавляет столбец выбранной матрице 
	if (e.target.classList.contains('add-column')) {
		for (var i = 0; i < row.length; i++) {
			$('<input type="text">').appendTo(row[i]);
		}
		return;
	}

	// Удаляет столбец выбранной матрицы
	if (e.target.classList.contains('remove-column')) {
		//
		return; 
	}
});


// function add-row() {
// 	$('<div class="row">' +
//             '<input type="text" data-matrix="a" data-row="2" data-column="1">' +
//             '<input type="text" data-matrix="a" data-row="2" data-column="2">' +
//     '</div>')
// }


