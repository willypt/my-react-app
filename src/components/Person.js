import React, {Component} from 'react'

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 0,
            name: props.name
        }
    }

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
                <h2>Hi! I'm {this.state.name}</h2>
                <p>I'm {this.props.age} and I live in {this.props.address}</p>
                <p>I'm {this.state.status === 0 ? 'available' : 'unavailable'}</p>
                <p>Here's my bio: {this.state.bio}</p>
                <button onClick={this.onChangeStatus.bind(this)}>Change Status</button>
                <br/>
                You can change your name here: <input type="text" value={this.state.name} onChange={this.onChangeName.bind(this)}/>
                <hr/>
            </div>
        )
    }
}

export default Person