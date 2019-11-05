import React from 'react'
import axios from 'axios'

export default class SingleCreature extends React.Component {
    state = {
        editing: false,
        creature: {},
        updatedCreatureName: '',
        updatedCreatureDescription: ''
    }
    componentDidMount = ()  => {
        axios.get(`/creatures/${this.props.match.params.id}`)
        .then((response) =>
        this.setState({creature: response.data}),
        )
    }
    toggleEdit = () => {
        let editing = !this.state.editing
        this.setState({editing})
    }
    handleNewCreatureName = (evt) => {
        let updatedCreatureName = evt.target.value
        this.setState({updatedCreatureName})
    }

    handleNewCreatureDescription = (evt) => {
        let updatedCreatureDescription = evt.target.value
        this.setState({updatedCreatureDescription})
    }
    updateCreature = (event) => {
        event.preventDefault()
        let updatedCreature = {
            name: this.state.updatedCreatureName,
            description: this.state.updatedCreatureDescription
        }
        this.setState({creature: updatedCreature})
        axios.put(`/creatures/${this.state.creature._id}`, updatedCreature)
        this.toggleEdit()
    }
    removeCreature = () => {
        axios.delete(`/creatures/${this.props.match.params.id}`)
    }
    render() {
        return (
            <div className='App'>
                <h1>{this.state.creature.name}</h1>
                <p>{this.state.creature.description}</p>
                <button onClick={this.toggleEdit}>Edit Creature</button>
                {this.state.editing? <form onSubmit={this.updateCreature}>
                    <input type='text' name='name' placeholder={this.state.creature.name} onChange={this.handleNewCreatureName}/>
                    <input type='text' name='description' placeholder={this.state.creature.description} onChange={this.handleNewCreatureDescription}/>
                    <input type='submit' value='Update'/>
                </form> : null}
                    <a href='/'><button onClick={this.removeCreature}>Delete</button></a>
            </div>
        )
    }
}