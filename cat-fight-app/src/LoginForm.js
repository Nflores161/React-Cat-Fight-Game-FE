import React, {Component} from 'react'

class UserForm extends Component {

    constructor() {
        super()
        this.state = {
            loginName: '',
            registerName: ''
        }
    }



    render(){
        return(
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.onHide()
                    this.props.handleLogin(this.state.loginName)
                    }}>
                    <input type="text" name="loginName" onChange={(event) => this.setState({loginName: event.target.value})} value={this.state.loginName}/>
                    <input type="submit" value="Log In" />
                </form>
{/* 
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.handleRegister(this.state.registerName)
                    }}>
                    <input type="text" name="registerName" onChange={(event) => this.setState({registerName: event.target.value})} value={this.state.registerName}/>
                    <input type="submit" value="Register" />
                </form> */}
            </div>
            )
    }
}

export default UserForm