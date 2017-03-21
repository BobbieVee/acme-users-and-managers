const _conn = require('./_conn');
const Employee = require('./Employee');

const sync = ()=> _conn.sync({force: true}); 

Employee.belongsTo(Employee,{as: "manager"});
Employee.hasMany(Employee,{as: 'managee',
	foreignKey: 'managerId'
});

const seed = ()=> {
	return sync()
	.then(()=>{
		return Promise.all([
			Employee.create({name: 'Curly'}),
			Employee.create({name: 'Larry'}),
			Employee.create({name: 'Moe', management: true}),
			Employee.create({name: 'Shep', management: true}),
			])
	})
	.then((results)=>{
		const [curly, larry, moe, shep] = results;
		return Promise.all([
			curly.setManager(moe.id),
			larry.setManager(moe.id),
			shep.setManagee(moe.id)
			]);

	})
	.then(()=> console.log("Seeded this MoFo"))
	.catch(e => console.log(e));
}


module.exports = {
	sync,
	seed,
	models: {
		Employee
	}
};