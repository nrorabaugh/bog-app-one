import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Creatures extends Component {
    state = {
        creatureList: [],
        newCreature: {
            name: '',
            description:''
        },
        creating: false
    }

    componentDidMount = ()  => {
        axios.get('/creatures') 
        .then((response) => {
            this.setState({creatureList: response.data})
        })
    }

    toggleForm = () => {
        const creating = !this.state.creating
        this.setState({creating})
    }

    handleNewCreatureName = (evt) => {
        let newCreature = this.state.newCreature
        newCreature.name = evt.target.value
        this.setState({newCreature})
    }

    handleNewCreatureDescription = (evt) => {
        let newCreature = this.state.newCreature
        newCreature.description = evt.target.value
        this.setState({newCreature})
    }
    
    addNewCreature = () => {
        this.toggleForm()
        axios.post('/creatures', this.state.newCreature)
        .then(() => {
            this.componentDidMount()
            }
        )}

    addToList = (event) => {
        event.preventDefault()
        this.addNewCreature()
    }

    render () {
        const creatureList = this.state.creatureList.map(
            (creature) => {
                let link = `/${creature._id}`
                return <div className = 'App' key={creature._id}>
                    <Link to={link}>
                        <h1>{creature.name}</h1>
                        <p>{creature.description}</p>
                    </Link>
                </div>
                 }
        )
         return (
            <div className='App'>
                <h1>Creatures</h1>
                {creatureList}
                <button onClick={this.toggleForm}>{this.state.creating? null : 'Add New Creature'}</button>
                {this.state.creating? <form onSubmit={this.addToList}>
                    <input type='text' name='name' placeholder='Name' onChange={this.handleNewCreatureName}/>
                    <input type='text' name='description' placeholder='Description' onChange={this.handleNewCreatureDescription}/>
                    <input type='submit'/>
                </form> : null}
            </div>
         )
    }
}