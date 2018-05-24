import React, { Component } from 'react';
import './App.css';


class Details extends Component{
    render(){
        return(
        this.props.informationClient && this.props.data !== undefined ?
            <div className="details-item">
                <div className={"general"}>
                    <div className={"general-avatar"}>
                        <img src={this.props.data.general.avatar} alt="фото"/>
                    </div>
                    <div className={"general-text"}>
                        <p>First name: {this.props.data.general.firstName}</p>
                        <p>Last name: {this.props.data.general.lastName}</p>
                    </div>
                </div>
                <div className={"job"}>
                    <p>Company: {this.props.data.job.company}</p>
                    <p>Title: {this.props.data.job.title}</p>
                </div>
                <div className={"contact"}>
                    <p>Email: {this.props.data.contact.email}</p>
                    <p>Phone: {this.props.data.contact.phone}</p>
                </div>
                <div className={"address"}>
                    <p>City: {this.props.data.address.city}</p>
                    <p>Country: {this.props.data.address.country}</p>
                    <p>Street: {this.props.data.address.street}</p>
                    <p>Zip-code: {this.props.data.address.zipCode}</p>
                </div>
            </div> :
            <div className="details-item">Select from the list.</div>

        )
    }
}

export default Details;