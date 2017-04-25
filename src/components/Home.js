import React, {Component} from 'react'
import Person from './Person'

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Welcome to my Home</h1>
                <Person name="Asti" address="Yogyakarta" age={25} />
            </div>
        )
    }
}

export default Home

