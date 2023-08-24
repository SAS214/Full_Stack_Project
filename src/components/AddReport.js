import React, { Component } from 'react';
import './styl.css'


export default class AddReport extends Component {

    constructor(props){
        
        super(props)
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.attackNum = React.createRef();
        this.defenceNum = React.createRef();
        this.physicalNum = React.createRef();
        this.techNum = React.createRef();
    }

    submitReport(event){
        
        event.preventDefault();

        let report = {
            firstName : this.firstName.current.value,
            lastName : this.lastName.current.value,
            attackNum : this.attackNum.current.value,
            defenceNum : this.defenceNum.current.value,
            physicalNum : this.physicalNum.current.value,
            techNum : this.techNum.current.value,
        }

        fetch("http://localhost:8080/addreports", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(report),
        })
        .then(response => response.json());

        window.location.reload();
    }



    render(){
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitReport.bind(this)}>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref={this.firstName} type="text" className="validate" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref={this.lastName} type="text" className="validate" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input ref={this.attackNum} type="text" className="validate" />
                            <label htmlFor="attackNum">Attack #</label>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className="input-field col s6">
                            <input ref={this.defenceNum} type="text" className="validate" />
                            <label htmlFor="defenceNum">Defence #</label>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className="input-field col s6">
                            <input ref={this.physicalNum} type="text" className="validate" />
                            <label htmlFor="physicalNum">Physical #</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s6">
                            <input ref={this.techNum} type="text" className="validate" />
                            <label htmlFor="techNum">Tech #</label>
                        </div>
                    </div>

                    <div className="center-align">
                        <button className='btn #0d47a1 blue darken-4' type='submit' name='action'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}