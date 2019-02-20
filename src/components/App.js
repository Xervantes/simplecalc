import React, {Component} from 'react';
import '../App.css';

class App extends Component {
    state = {
        firstValue: '',
        secondValue: ''
    };

    changeFirstValue = (e) => {
        console.log('event:', e.target.value);
        this.setState({
            firstValue: e.target.value
        })
    };

    changeSecondValue = (e) => {
        console.log('event:', e.target.value);
        this.setState({
            secondValue: e.target.value
        })
    };

    addValues = (e) => {
        e.preventDefault();
        const {firstValue, secondValue} = this.state;
        const value = Number(firstValue) + Number(secondValue);
        console.log(`The result is: ${value}`);
        this.setState({
            firstValue: '',
            secondValue: ''
        })
    };

    subtractValues = (e) => {
        e.preventDefault();
        const {firstValue, secondValue} = this.state;
        const value = Number(firstValue) - Number(secondValue);
        console.log(`The result is: ${value}`);
        this.setState({
            firstValue: '',
            secondValue: ''
        })
    };

    render() {
        return (
            <form>

                <input type='text' value={this.state.firstValue} onChange={this.changeFirstValue}/>
                <input type='text' value={this.state.secondValue} onChange={this.changeSecondValue}/>
                <input type='submit' value='Add' onClick={this.addValues}/>
                <input type='submit' value='Subtract' onClick={this.subtractValues}/>

            </form>
        );
    }
}

export default App;
