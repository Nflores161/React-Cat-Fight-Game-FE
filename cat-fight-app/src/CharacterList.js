import React, {Component} from 'react'
import CharacterCard from './CharacterCard'
import Container from 'react-bootstrap/Container'
// import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import WarriorForm from './WarriorForm'

class CharacterList extends Component {

    render(){
        return(
            <div className="blackBackground">
            <Container className="catCardContainer blackBackground">
                <h3 id="chooseWarrior" className="headerText">Choose Your Warrior</h3>
                
                
                <Row className="blackBackground catRow" lg={3}>
                    {this.props.cats.map(cat => <CharacterCard key={cat.id} cat={cat} assignCat={this.props.assignCat} {...this.props.routerProps} playBattleSong={this.props.playBattleSong} themeSong={this.props.themeSong} />)}
                </Row>
                
                <WarriorForm submitWarrior={this.props.submitWarrior}/>
                
            </Container>
            </div>
        )
    }
}

export default CharacterList