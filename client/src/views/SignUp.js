import React from 'react'
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		console.log('sign up submit')
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
				console.log('sign up submit if statement')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row signup'>
					<div className='column column-33 column-offset-33'>
						<h1>Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input onChange={this.onInputChange.bind(this)} type="text" placeholder="Name" name="name" value={name} />
							<input onChange={this.onInputChange.bind(this)} type="text" placeholder="Email" name="email" value={email} />
							<input onChange={this.onInputChange.bind(this)}type="password" placeholder="Password" name="password" value={password} />
							<button>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp