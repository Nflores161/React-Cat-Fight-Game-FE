import React, {Component} from 'react'

class RegisterForm extends Component {

    constructor() {
        super()
        this.state = {
            registerName: ''
        }
    }



    render(){
        return(
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleRegister(this.state.registerName)
                }}>
                <input type="text" name="registerName" onChange={(event) => this.setState({registerName: event.target.value})} value={this.state.registerName}/>
                <input type="submit" value="Register" />
            </form>
        )
    }
}

export default RegisterForm