import React, {Component} from 'react'
import CharacterCard from './CharacterCard'

class CharacterList extends Component {

    render(){
        return(
            <div>
                <h3>Character List</h3>
                {this.props.cats.map(cat => <CharacterCard key={cat.id} cat={cat} assignCat={this.props.assignCat} {...this.props.routerProps}/>)}
            </div>
        )
    }
}

export default CharacterList