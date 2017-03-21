const _conn = require('./_conn');

const Employee = _conn.define('employee', 
	{name:  _conn.Sequelize.STRING,
	 management: {
	 	type: _conn.Sequelize.BOOLEAN, 
	 	defaultValue: false
	 }
});

module.exports = Employee;