import React, { Component } from 'react';
import './App.css';
import Details from './Details';

let Clients = require('./clients.json');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: Clients,
            index: 0,
            inputField: "",
            filteredList: Clients,
            infClient: false
        };
        this.press = this.press.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }
    updateInputValue(e) {
        this.setState({inputField: e.target.value});
        this.setState({filteredList: this.state.clients.filter(function(item){
            if(item.general.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){return true};
            if(item.job.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){return true};
            })
        }, () => {this.setState({infClient: !!this.state.filteredList.length})});
    }
    press(i){
        this.setState({index: i, infClient: true})
    }

    render(){
        return (
            <div className="ui grid main">
                <div className="one wide column"></div>
                <div className="four wide column clients-list">
                    <input className="search" type="text" placeholder="Search..." value={this.state.inputField} onChange={this.updateInputValue}/>
                    <ul>
                        {
                            this.state.filteredList.map((item, i) =>
                            <li className="list-item" onClick={()=>this.press(i)} key={i} index={i}>
                            <div className="list-item-img"><img src={item.general.avatar} alt="фото" /></div>
                                <div className="list-item-text">
                                    <p>{item.general.firstName}<br/><span className="conpany">{item.job.title}</span></p>
                                </div>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div className="ten wide column clients-details">
                    <Details data={this.state.filteredList[this.state.index]} informationClient={this.state.infClient}/>
                </div>
                <div className="one wide column"></div>
            </div>
        );
    }
}

export default App;
