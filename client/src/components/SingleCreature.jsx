import React from 'react'
import axios from 'axios'

export default class SingleCreature extends React.Component {
    state = {
        editing: false,
        creature: {}
    }
    componentDidMount = ()  => {
        axios.get(`/creatures/${this.props.match.params.id}`)
        .then((response) =>
        this.setState({creature: response.data})
        )
    }
    render() {
        return (
            <div className='App'>
                <h1>{this.state.creature.name}</h1>
                <p>{this.state.creature.description}</p>
            </div>
        )
    }
}