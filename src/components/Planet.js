
import { connect } from 'react-redux';
import React, { Component } from 'react';
class Planet extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            counter: 0
        };
    }

    function(event){
        
        console.log("test ");
    }
    
    render () {
        let planets = this.props.state.planets;
        let optionItems = planets.map((planet) =>
                <option key={planet.name}>{planet.name}</option>
            );

        return (
         <div>
             <select onChange={this.props.onValueCounter}>
                {optionItems}
             </select>
         </div>
        )
    }

    
}
const mapStateToProps1 = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps1 = dispatch => {
    
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'dec'}),
        onValueCounter: () => dispatch({type: 'decVal',val:10})
    };
};
export default connect(mapStateToProps1, mapDispatchToProps1)(Planet);