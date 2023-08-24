import React, { Component } from 'react';
import AddReport from './AddReport';
import ShowReport from './ShowReport';
import './styl.css'

export default class PlayerReport extends Component{
    
    constructor(props){    
        super(props);
        this.state = {
            reports : [],
        };
    }

    componentDidMount(){
        fetch('http://localhost:8080/getreports')
        .then(res => res.json())
        .then( (data) => {
            this.setState({ reports: data })
        })
    }

    render(){
        return(
            <div>
                <h1 className='left-align'>Enter Player Data</h1>
                <div className='row'>
                    <AddReport />
                </div>
                <div className='row'>
                    { this.state.reports.map((item) => (
                        <ShowReport key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
} 

