import React from 'react';
import axios from "axios";

class CITYSEARCH extends React.Component {
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
        axios.get(url + e.target.value.toUpperCase())
        .then((response) => {
            const data = response.data;
            this.setState({newCity: data});
        })
        .catch((err) => console.log(err));
    }

    render() {
        return(
        <div id="display">
            <div className = "search">
                <label for="zip">Please Enter any city name: </label> <br/>
                <input placeholder="NEW YORK" id="zip" type="text" value={this.state.city} onChange = {this.changeCityName}/>
            </div>
            <div className = "zip">
                { this.state.newCity.map(zip => {return (
                    <div className="outputs" key={zip.allNumber}>
                        {zip}
                    </div>)})}
            </div>
        </div>
        )
    };
};

export default CITYSEARCH;
