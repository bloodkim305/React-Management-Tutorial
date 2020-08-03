import React from "react";
import Customer from "./components/Customer";

const customers = [
	{
		id: 1,
		image: "https://placeimg.com/64/64/any",
		name: "gmk",
		birthday: 830520,
		gender: "male",
		job: "baksu",
	},
	{
		id: 2,
		image: "https://placeimg.com/64/64/any",
		name: "tk",
		birthday: 830000,
		gender: "male",
		job: "baksu",
	},
	{
		id: 3,
		image: "https://placeimg.com/64/64/any",
		name: "sb",
		birthday: 840120,
		gender: "male",
		job: "Golfer",
	},
];

class App extends React.Component {
	render() {
		return (
			<div>
				{customers.map((customer) => {
					return (
						<Customer
							key={customer.id}
							id={customer.id}
							image={customer.image}
							name={customer.name}
							birthday={customer.birthday}
							gender={customer.gender}
							job={customer.job}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
