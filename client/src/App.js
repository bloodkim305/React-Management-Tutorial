import React from "react";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	root: {
		with: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto",
	},
	table: {
		minWidth: 1080,
	},
	progress: {
		margin: theme.spacing(2),
	},
});

class App extends React.Component {
	state = {
		customers: "",
		completed: 0,
	};

	componentDidMount() {
		this.timer = setInterval(this.progress, 20);
		this.callApi()
			.then((res) => this.setState({ customers: res }))
			.catch((error) => console.log(error));
	}

	callApi = async () => {
		const response = await fetch("/api/customers");
		const body = await response.json();
		return body;
	};

	progress = () => {
		const { completed } = this.state;
		this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
	};

	render() {
		const { classes } = this.props;
		const { customers, completed } = this.state;
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
						{customers ? (
							customers.map((customer) => {
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
							})
						) : (
							<TableRow>
								<TableCell colSpan="6" align="center">
									<CircularProgress
										className={classes.progress}
										variant="determinate"
										value={completed}
									/>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(App);
