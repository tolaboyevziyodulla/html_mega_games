result = 1;
tdes = document.getElementsByTagName('td');

function xvs0(xory) {
	if (result == 1 && xory.innerHTML == '') {
		xory.innerHTML = 'X';
		xory.style.color = 'red';
		result = 0;
	}


	if (result == 0 && xory.innerHTML == '') {
		xory.innerHTML = '0';
		xory.style.color = 'blue';
		result = 1;
	}

	
		
	if ( ( tdes[0].innerHTML == tdes[1].innerHTML && tdes[1].innerHTML == tdes[2].innerHTML ) && (tdes[0].innerHTML != '' && tdes[1].innerHTML != '' && tdes[2].innerHTML != '' ) ) {
		alert(' "' + tdes[0].innerHTML + '" lar yutdi!!!');
		tdes[0].style.backgroundColor = 'green';
		tdes[1].style.backgroundColor = 'green';
		tdes[2].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[0].style.backgroundColor = 'white';
			tdes[1].style.backgroundColor = 'white';
			tdes[2].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

		
	if ( ( tdes[3].innerHTML == tdes[4].innerHTML && tdes[4].innerHTML == tdes[5].innerHTML ) && (tdes[3].innerHTML != '' && tdes[4].innerHTML != '' && tdes[5].innerHTML != '' ) ) {
		alert(' "' + tdes[3].innerHTML + '" lar yutdi!!!');
		tdes[3].style.backgroundColor = 'green';
		tdes[4].style.backgroundColor = 'green';
		tdes[5].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[3].style.backgroundColor = 'white';
			tdes[4].style.backgroundColor = 'white';
			tdes[5].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

		
	if ( ( tdes[6].innerHTML == tdes[7].innerHTML && tdes[7].innerHTML == tdes[8].innerHTML ) && (tdes[6].innerHTML != '' && tdes[7].innerHTML != '' && tdes[8].innerHTML != '' ) ) {
		alert(' "' + tdes[6].innerHTML + '" lar yutdi!!!');
		tdes[6].style.backgroundColor = 'green';
		tdes[7].style.backgroundColor = 'green';
		tdes[8].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[6].style.backgroundColor = 'white';
			tdes[7].style.backgroundColor = 'white';
			tdes[8].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

		
	if ( ( tdes[0].innerHTML == tdes[3].innerHTML && tdes[3].innerHTML == tdes[6].innerHTML ) && (tdes[0].innerHTML != '' && tdes[3].innerHTML != '' && tdes[6].innerHTML != '' ) ) {
		alert(' "' + tdes[0].innerHTML + '" lar yutdi!!!');
		tdes[0].style.backgroundColor = 'green';
		tdes[3].style.backgroundColor = 'green';
		tdes[6].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[0].style.backgroundColor = 'white';
			tdes[3].style.backgroundColor = 'white';
			tdes[6].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

		
	if ( ( tdes[1].innerHTML == tdes[4].innerHTML && tdes[4].innerHTML == tdes[7].innerHTML ) && (tdes[1].innerHTML != '' && tdes[4].innerHTML != '' && tdes[7].innerHTML != '' ) ) {
		alert(' "' + tdes[1].innerHTML + '" lar yutdi!!!');
		tdes[1].style.backgroundColor = 'green';
		tdes[4].style.backgroundColor = 'green';
		tdes[7].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[1].style.backgroundColor = 'white';
			tdes[4].style.backgroundColor = 'white';
			tdes[7].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

		
	if ( ( tdes[2].innerHTML == tdes[5].innerHTML && tdes[5].innerHTML == tdes[8].innerHTML ) && (tdes[2].innerHTML != '' && tdes[5].innerHTML != '' && tdes[8].innerHTML != '' ) ) {
		alert(' "' + tdes[2].innerHTML + '" lar yutdi!!!');
		tdes[2].style.backgroundColor = 'green';
		tdes[5].style.backgroundColor = 'green';
		tdes[8].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[2].style.backgroundColor = 'white';
			tdes[5].style.backgroundColor = 'white';
			tdes[8].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

	if ( ( tdes[0].innerHTML == tdes[4].innerHTML && tdes[4].innerHTML == tdes[8].innerHTML ) && (tdes[0].innerHTML != '' && tdes[4].innerHTML != '' && tdes[8].innerHTML != '' ) ) {
		alert(' "' + tdes[0].innerHTML + '" lar yutdi!!!');
		tdes[0].style.backgroundColor = 'green';
		tdes[4].style.backgroundColor = 'green';
		tdes[8].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[0].style.backgroundColor = 'white';
			tdes[4].style.backgroundColor = 'white';
			tdes[8].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

	if ( ( tdes[2].innerHTML == tdes[4].innerHTML && tdes[4].innerHTML == tdes[6].innerHTML ) && (tdes[2].innerHTML != '' && tdes[4].innerHTML != '' && tdes[6].innerHTML != '' ) ) {
		alert('"' + tdes[2].innerHTML + '" lar yutdi!!!');
		tdes[2].style.backgroundColor = 'green';
		tdes[4].style.backgroundColor = 'green';
		tdes[6].style.backgroundColor = 'green';
		setTimeout(function() {
			tdes[2].style.backgroundColor = 'white';
			tdes[4].style.backgroundColor = 'white';
			tdes[6].style.backgroundColor = 'white';
			for(i = 0; i < 9; i ++) {
				tdes[i].innerHTML = '';
			}
		}, 400)
	}

}


function clearMen() {
	for (i = 0; i < 9;i ++) {
		tdes[i].innerHTML = '';
	}
}