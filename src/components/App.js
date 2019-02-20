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

    updateValues = (e) => {
        console.log('event:', e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    calculate = (e) => {
        e.preventDefault();
        let value = null;
        const {firstValue, secondValue} = this.state;
        if (e.target.value === 'Add') {
            value = Number(firstValue) + Number(secondValue);
        } else {
            value = Number(firstValue) - Number(secondValue);
        }
        console.log(`The result is: ${value}`);
        this.setState({
            firstValue: '',
            secondValue: ''
        })

    }

    render() {
        return (
            <form>

                <input type='text' value={this.state.firstValue} onChange={this.updateValues} id='firstValue'/>
                <input type='text' value={this.state.secondValue} onChange={this.updateValues} id='secondValue'/>
                <input type='submit' value='Add' onClick={this.calculate}/>
                <input type='submit' value='Subtract' onClick={this.calculate}/>

            </form>
        );
    }
}

export default App;
