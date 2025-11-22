one = document.getElementById('one');
two = document.getElementById('two');


function act(e) {
	leftX = one.offsetLeft;
	topX = one.offsetTop;
	leftY = two.offsetLeft;
	topY = two.offsetTop;

	if (e.keyCode == 37 && leftX > 50) {
		leftX -= 50;
	}

	if (e.keyCode == 38 && topX > 50) {
		topX -= 50;
	}

	if (e.keyCode == 39 && leftX < 1150) {
		leftX += 50;
	}

	if (e.keyCode == 40 && topX < 750) {
		topX += 50;
	}
	if (e.keyCode >= 37 && e.keyCode <= 40) {
		one.style.left = leftX + 'px';
		one.style.top = topX + 'px';
		return 
		}


	if (e.keyCode == 65 && leftY > 50) {
		leftY -= 50;
	}

	if (e.keyCode == 87 && topY > 50) {
		topY -= 50;
	}

	if (e.keyCode == 68 && leftY < 1150) {
		leftY += 50;
	}

	if (e.keyCode == 83 && topY < 750) {
		topY += 50;
	}
	
	two.style.left = leftY + 'px';
	two.style.top = topY + 'px';

	if (leftX == leftY && topX == topY) {
		alert('😡GAME OVER😡');
		leftX = 1150;
		topX = 50;
		leftY = 50;
		topY = 50;
		one.style.top = '50px';
		one.style.left = '1150px';
		two.style.top = '50px';
		two.style.left = '50px';
	}
}
