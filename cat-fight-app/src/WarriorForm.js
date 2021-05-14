import React, {Component} from 'react'

class WarriorForm extends Component {

    constructor(){
        super()
        this.state = {
            name: "",
            image: "",
            purrsonality: "",
            power: 100,
            attacc: 5
        }
    }

    render(){
        return(
            <div className="formDiv">
                <h3>Groom New Warrior</h3>
                <form className="warriorForm" onSubmit={(event)  => {
                    event.preventDefault()
                    this.props.submitWarrior(this.state)
                }} onChange={(event) => {
                    this.setState({
                        [event.target.name]: event.target.value
                    })
                }
                }>
                    <label>Warrior Name:</label>
                    <input className="blackBackground" type="text" name="name" placeholder="Enter Name" value={this.state.name}/>
                    <br/>
                    <label>Warrior Image:</label>
                    <input className="blackBackground" type="text" name="image" placeholder="Enter Image" value={this.state.image}/>
                    <br/>
                    <label>Warrior Purrsonality:</label>
                    <input className="blackBackground" type="text" name="purrsonality" placeholder="Enter Purrsonality" value={this.state.purrsonality}/>
                    <br/>
                    <input type="submit" value="Groom" className="attacc-btn"/>
                </form>
            </div>
        )
    }

}

export default WarriorForm