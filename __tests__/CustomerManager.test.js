const Customer = require('../lib/Customer.js');
const CustomerManager = require('../lib/CustomerManager.js');

describe('CustomerManager', () => {
	it('should add a new customer to its customers list', () => {
		const customer = new Customer();
		const manager = new CustomerManager();

		customer.name = 'John';
		customer.phone = 123465789;
		customer.email = 'john@email.com';
		customer.id = 102456;
		expect(customer instanceof Customer).toBe(true);
		
		manager.addNewCustomer(customer);
		const customers = manager.getCustomers();
		expect(customers.length).toEqual(1);
		expect(customers[0]).toBe(customer);
	});

	it('should add a customer to the waitlist if the tables are all full', () => {
		const manager = new CustomerManager();
		for(let i = 0; i < 10; i++){
			const customer = new Customer();
			manager.addNewCustomer(customer);
		}
		const tables = manager.getTables();
		const waitlist = manager.getWaitlist();
		const customers = manager.getCustomers();
		expect(tables.length).toEqual(5);
		expect(waitlist.length).toEqual(5);
		expect(customers.length).toEqual(10);
	});

	it('should remove a customer from a requested table and add a member from the waitlist to that table', () => {
		const manager = new CustomerManager();
		for(let i = 0; i < 10; i++){
			const customer = new Customer();
			if(i === 2){
				customer.name = "Prince Phillip";
			}
			if(i === 4){
				customer.name = "Charles IV";
			}
			if(i === 5){
				customer.name = "Henry V";
			}
			manager.addNewCustomer(customer);
		}
		let tables = manager.getTables();
		const waitlist = manager.getWaitlist();
		const customers = manager.getCustomers();
		expect(tables.length).toEqual(5);
		expect(waitlist.length).toEqual(5);
		expect(customers.length).toEqual(10);

		manager.removeCustomerFromTable(4);
		table = manager.getTables();
		//expect()

	});

});