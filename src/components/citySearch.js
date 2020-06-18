import React from 'react';


class CitySearch extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            city: "",
            newCity: []
        };
        this.changeCityName = this.changeCityName.bind(this);
    }

     changeCityName(e){
        this.setState({
            city: e.target.value
        });

        const url = `http://ctp-zip-api.herokuapp.com/city/`;

        fetch(url + e.target.value.toUpperCase())
        .then(response => response.json())
        .then(data => this.setState({ newCity: data }))
        .catch((error) => {console.error('Error:', error)});

    }

    render() {
        return(
        <div id="display">
            <div className = "search">
                <label htmlFor="zip">Please Enter any city name: </label> <br/>
                <input placeholder="NEW YORK" id="zip" type="text" value={this.state.city} onChange = {this.changeCityName}/>
            </div>
             <div className = "zip">
                {this.state.newCity.map((zip, index) => (
                 <div key ={index}> 
                 {zip} 
                </div>
                ))}
            </div>
        </div>
        )
    };
};

export default CitySearch;
