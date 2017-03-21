const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const Employee = db.models.Employee;

// app.use(express.static(__dirname));
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/',(req, res, next)=> {
		res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/employees', (req, res, next)=>{
	Employee.findAll({
		include: [
			{	
				model: Employee, 
				as: "manager"
			},
			{
				model: Employee,
				as: 'managee'
			}
		]
	})
	.then((employees)=>{
		// console.log('employees[2] = ', employees[2]);
		res.send(employees);
	})
});

// Employee.findById(1,{
// 					include: [{model: Employee, as: 'manager'}]
// 				})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening intently on port ${port}`));

db.seed();
