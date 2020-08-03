import React from "react";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	root: {
		with: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto",
	},
	table: {
		minWidth: 1080,
	},
});

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
		image: "https://placeimg.com/64/64/1",
		name: "tk",
		birthday: 830000,
		gender: "male",
		job: "baksu",
	},
	{
		id: 3,
		image: "https://placeimg.com/64/64/2",
		name: "sb",
		birthday: 840120,
		gender: "male",
		job: "Golfer",
	},
];

class App extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>번호</TableCell>
							<TableCell>이미지</TableCell>
							<TableCell>이름</TableCell>
							<TableCell>생년월일</TableCell>
							<TableCell>성별</TableCell>
							<TableCell>직업</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
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
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(App);