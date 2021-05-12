import React, {Component} from 'react'
import CharacterCard from './CharacterCard'
import Container from 'react-bootstrap/Container'
// import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'


class CharacterList extends Component {

    render(){
        return(
            <Container className="justify-content" flex-wrap="wrap">
                <h3>Choose Warrior</h3>
                
                
                <Row sm={3}>
                {this.props.cats.map(cat => <CharacterCard key={cat.id} cat={cat} assignCat={this.props.assignCat} {...this.props.routerProps}/>)}
                </Row>
                
                
            </Container>
        )
    }
}

export default CharacterList