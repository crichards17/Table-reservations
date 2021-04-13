class CustomerManager {

	constructor(){
		this.tables = [];
		for(let i = 1; i < 6; i ++){
			const table = {};
			table.number = i;
			table.customer = null;
			this.tables.push(table);
		}
		this.waitlist = [];
		this.customers = [];
	}

	addNewCustomer = (customer) => {
		this.customers.push(customer);
		const _emptyTableIndex = this.emptyTableIndex();
		if(_emptyTableIndex > -1){
			this.tables[_emptyTableIndex].customer = customer;
		} else {
			this.waitlist.push(customer);
		}
	}

	emptyTableIndex = () => {
		let tableIndex = -1;
		for(let i = 0; i < this.tables.length; i++){
			if(!this.tables[i].customer){
				return i;
			}
		}
		return tableIndex;
	}

	removeCustomerFromTable = (number) => {
		// remove customer from table
		// add oldest customer from waitlist 
		// to table if waitlist.length > 0 
		if(this.waitlist.length > 0) {
			this.tables[number - 1].customer = this.waitlist.shift();
		}
		
	}

	getTables = () => {
		return this.tables;
	}

	getWaitlist = () => {
		return this.waitlist;
	}

	getCustomers = () => {
		return this.customers;
	}

}

module.exports = CustomerManager;