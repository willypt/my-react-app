import React from 'react'
import Person from '../components/Person'

const People = () => {
    return (
        <div>
            <h1>This is my friends</h1>
            <Person name="Harry Potter" address="Hogwarts" age={27} />
            <Person name="Jon Snow" address="Winterfell" age={30} />
            <Person name="Scarlett Johansson" address="Hogwarts" age={32} />
        </div>
    )
}

export default People

