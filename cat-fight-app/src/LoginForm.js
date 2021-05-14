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
                <form className="blackBackground" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.onHide()
                    this.props.handleLogin(this.state.loginName)
                    }}>
                    <input className="blackBackground" type="text" name="loginName" onChange={(event) => this.setState({loginName: event.target.value})} value={this.state.loginName}/>
                    <input className="blackBackground" type="submit" value="Log In" />
                </form>
            )
    }
}

export default UserForm