const Calc = require('./Calc')

const calc = new Calc()

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.post('/add', (req, res) => {
	const { x, y } = req.body
	res.end(calc.add(x, y))
}
)
app.post('/sub', (req, res) => {
	const { x, y } = req.body
	res.end(calc.sub(x, y))
}
)
app.post('/mult', (req, res) => {
	const { x, y } = req.body
	res.end(calc.mult(x, y))

}
)
app.post('/div', (req, res) => {
	const { x, y } = req.body
	res.end(calc.div(x, y))
}
)
app.listen(3000, ()=>{
	console.log('listen 3000...')
})
