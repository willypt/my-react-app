import React from 'react'
import Person from '../components/Person'

const Home = () => {
    return (
        <div>
            <h1>Welcome to my Home</h1>
            <Person name="Asti" address="Yogyakarta" age={25} />
        </div>
    )
}

export default Home

