import React from "react";

class Customer extends React.Component {
	render() {
		return (
			<>
				<CustomerProfile
					image={this.props.image}
					name={this.props.name}
					id={this.props.id}
				/>
				<CustomerInfo
					birthday={this.props.birthday}
					gender={this.props.gender}
					job={this.props.job}
				/>
			</>
		);
	}
}

class CustomerProfile extends React.Component {
	render() {
		return (
			<>
				<img src={this.props.image} alt="image" />
				<h2>
					{this.props.name}({this.props.id})
				</h2>
			</>
		);
	}
}

class CustomerInfo extends React.Component {
	render() {
		return (
			<>
				<p>{this.props.birthday}</p>
				<p>{this.props.gender}</p>
				<p>{this.props.job}</p>
			</>
		);
	}
}

export default Customer;
