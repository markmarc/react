import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
   
        
    
    state = {lat: null, errorMessage: ''}
    render(){
        
        
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Błąd: {this.state.errorMessage} 
            </div>
        }
        if(this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message ="Proszę pozwolić na geolokalizacje"/>
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message}))
        }
    }

ReactDOM.render(<App/>, document.querySelector("#root"))

