class Customer {

	constructor(){
		this.name = "Unknown Customer";
		this.phone = "Unknown Phone";
		this.email = "Unknown email";
		this.id = Math.floor(Math.random() * 100000);
	}

	name = (name) => {
		this.name = name;
	}

	phone = (phone) => {
		this.phone = phone;
	}

	email = (email) => {
		this.email = email;
	}

	id = (id) => {
		this.id = id;
	}

}

module.exports = Customer;