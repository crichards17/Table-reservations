const Customer = require('../lib/Customer.js');

describe('Customer', () => {
	it('should have a name, number, email address and unique id', () => {
		const customer = new Customer();
		customer.name = 'John';
		customer.number = 123465789;
		customer.email = 'john@email.com';
		customer.uniqueId = 102456;
		expect(customer instanceof Customer).toBe(true);
		expect('name' in customer).toBe(true);
		expect('number' in customer).toBe(true);
		expect('email' in customer).toBe(true);
		expect('uniqueId' in customer).toBe(true);
	});
});