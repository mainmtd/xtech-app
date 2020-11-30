import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import User from '../user'
import ServiceOrder from '../serviceOrder'
import Client from '../client'
import Report from '../report'

import './Home.css';
import logo from '../../images/LogoXTech.png';
import userIcon from '../../images/user-2.png';
import listIcon from '../../images/list-3.png';
import stickMan from '../../images/stick-man-2.png';
import pieChart from '../../images/pie-chart.png';



export default class Home extends Component {
    renderUser = () => {
        ReactDOM.render(<User/>, document.getElementById('homePanel'));
        var user = document.getElementById("menu_user");
        var so = document.getElementById("menu_so");
        var client = document.getElementById("menu_client");
        var report = document.getElementById("menu_report");
        user.classList.add("Selected");
        so.classList.remove("Selected");
        client.classList.remove("Selected");
        report.classList.remove("Selected");
    }

    renderServiceOrder = () => {
        ReactDOM.render(<ServiceOrder/>, document.getElementById('homePanel'));
        var user = document.getElementById("menu_user");
        var so = document.getElementById("menu_so");
        var client = document.getElementById("menu_client");
        var report = document.getElementById("menu_report");
        user.classList.remove("Selected");
        so.classList.add("Selected");
        client.classList.remove("Selected");
        report.classList.remove("Selected");
    }

    renderClient = () => {
        ReactDOM.render(<Client/>, document.getElementById('homePanel'));
        var user = document.getElementById("menu_user");
        var so = document.getElementById("menu_so");
        var client = document.getElementById("menu_client");
        var report = document.getElementById("menu_report");
        user.classList.remove("Selected");
        so.classList.remove("Selected");
        client.classList.add("Selected");
        report.classList.remove("Selected");
    }

    renderReport = () => {
        ReactDOM.render(<Report/>, document.getElementById('homePanel'));
        var user = document.getElementById("menu_user");
        var so = document.getElementById("menu_so");
        var client = document.getElementById("menu_client");
        var report = document.getElementById("menu_report");
        user.classList.remove("Selected");
        so.classList.remove("Selected");
        client.classList.remove("Selected");
        report.classList.add("Selected");
    }

    myFunction() {
        var element = document.getElementById("myDIV");
        element.classList.toggle("mystyle");
    }
    
    render(){
        return (
            <>
                <div className="Home-Container">
                    <div className="Home-NavBar">
                        <img className="Home-Logo" src={logo} alt=""/>
    
                        <p className="Home-Username">Gestor00</p>
    
                        <div className="NavBar">
                            <ul>
                                <li onClick={this.renderUser} id="menu_user">
                                    <img className="Home-Icon" src={userIcon} alt=""/>
                                    <span className="Home-MenuText">USER</span>
                                </li>
                                <hr/>
                                <li onClick={this.renderServiceOrder} id="menu_so">
                                    <img className="Home-Icon" src={listIcon} alt=""/>
                                    <span className="Home-MenuText">SERVICE ORDER </span>
                                </li>
                                <hr/>
                                <li onClick={this.renderClient} id="menu_client">
                                    <img className="Home-Icon" src={stickMan} alt=""/>
                                    <span className="Home-MenuText">CLIENT </span>
                                </li>
                                <hr/>
                                <li onClick={this.renderReport} id="menu_report">
                                    <img className="Home-Icon" src={pieChart} alt=""/>
                                    <span className="Home-MenuText">REPORT </span>
                                </li>
                                <hr/>
                            </ul>
                        </div>
                    </div>
                    <div className="Home-Panel" id="homePanel">
                        
                    </div>
                </div>
            </>
        )
    }
    
}