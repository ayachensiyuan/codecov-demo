class Calc {
	constuctor() { }

	add(x, y) { return x + y }

	sub(x, y) { return x - y }

	mult(x, y) { return x * y }

	div(x, y) {

		if (y == 0) return 'error'
		else return x / y
	
	}
}

module.exports = Calc
