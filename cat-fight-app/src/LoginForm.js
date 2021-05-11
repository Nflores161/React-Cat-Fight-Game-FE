import React, {Component} from 'react'

class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
            loginName: ''
        }
    }



    render(){
        return(
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleLogin(this.state.loginName)
                }}>
                <input type="text" name="loginName" onChange={(event) => this.setState({loginName: event.target.value})} value={this.state.loginName}/>
                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default LoginForm