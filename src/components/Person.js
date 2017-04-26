import React, {Component} from 'react'
import {connect} from 'react-redux'

class Person extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         status: 0,
    //         name: props.name
    //     }
    // }

    onChangeStatus(){
        if (this.state.status === 0){
            this.setState({ status : 1 })
        } else {
            this.setState({ status : 0 })
        }
    }

    onChangeName(event){
        this.setState({name : event.target.value})
    }

    onChangeBio(event){
        this.setState({bio : event.target.value})
    }

    componentWillMount(){
        // before initial rendering
    }

    componentDidMount(){
        // after initial rendering
    }

    componenetWillReceiveProps(newProps){
        // receive new props
    }

    shouldComponentUpdate(newProps, newState){
        // before render, after receive new props or state
        // return true or false, false to prevent rendering
        return true
    }

    componentWillUpdate(newProps, newState){
        // before render, after receive new props or state
    }

    componentDidUpdate(){
        // after render
    }

    componentWillUnmount(){
        // before removing component
    }

    render() {
        return (
            <div>
                <h2>Hi! I'm {this.props.name}</h2>
                <p>I'm {this.props.age} and I live in {this.props.address}</p>
                {/*<p>I'm {this.state.status === 0 ? 'available' : 'unavailable'}</p>*/}
                <p>Here's my bio: {this.props.person.bio}</p>
                {/*<button onClick={this.onChangeStatus.bind(this)}>Change Status</button>*/}
                <br/>
                {/*You can change your name here: <input type="text" value={this.state.name} onChange={this.onChangeName.bind(this)}/>*/}
                <br/>
                Update Bio
                <button onClick={() => this.props.updateBio('fresh graduate')}>Fresh Graduate</button>
                <button onClick={() => this.props.updateBio('developer')}>Developer</button>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        person: state.personReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBio: (newBio) => {
            dispatch({  
                type: 'UPDATE_BIO',
                payload: newBio
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)