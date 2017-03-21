import $ from 'jquery';
// alert('hey');
const employeeContainer = '#usersColumn';
const managerContainer = '#managersColumn';
$(employeeContainer).append(`<h2>Users</h2>`);
$(managersColumn).append(`<h2>Managers</h2>`);


$.get('/api/employees')
.then((employees)=>{
	//get unique collection of all managees for each manager
		// if (employee.manager)
	// create a collection of managers and populate manager container
	let managers = [];
	employees.forEach((employee)=> {
		if (employee.management){
			managers.push(employee.management)
			$(managerContainer).append(
				`<div class="panel panel-default"> 
					<div class='panel-heading'><h3>${employee.name}</h3></div>
						<div class='panel=body'>
							<div class="container">								
								<h5>Manages...</h5>
							</div>
					</div>
				</div>`
			);
		}
	});
	//populate employees container
	employees.forEach((employee)=> {
		let manager = {};
		if(!employee.manager){
			manager= 'none';
		} else {
			manager= employee.manager.name;
		}
		$(employeeContainer).append(
			`<div class="panel panel-default"> 
				<div class='panel-heading'><h3>${employee.name}</h3></div>
					<div class='panel=body'>
						<div class="container">
							<form >
							<br>
								<button class='btn btn-primary' style="margin: 10px">Promote to Manager</button>
							</form>
							<h4>Managed By:</h4>
							<select class='dropdown' style="margin: 10px">
								<option>${manager}</option>
							</select>
						</div>
				</div>
			</div>`
		);
	});
	

})
			
			
