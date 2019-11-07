import React from 'react';
import Nav from "../../components/Nav/index";
import { Container } from "../Grid";
import Title from "../Title/title";
import RegisterForm from "../RegisterForm";
//The component for doing the actual signup of the User
class Register extends React.Component {
	state = {
		redirectToReferrer: false
	}

	register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
				//relocate to the login page
				window.location.assign("/protected");
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		return (
			<div>
				<Nav className="App-header"/>
				<Container>
					<Title/>
				<RegisterForm onRegister={this.register} />
				</Container>
			</div>
		)
	}
}

export default Register