/**
 * Created by Sachin on 2/5/2017.
 */
import React from 'react';
import './App.css';
import {commercialInformation} from './commercialInformation';
import {technicalContact} from './technicalContact';
import {accountNames} from './accountNames';

console.log('a = ', commercialInformation);
console.log('b = ', technicalContact);
console.log('c = ', accountNames);

export default class CreateAccount extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return(
            <div className="other-than-main">
                <nav className="navbar navbar-default navbar-static-top navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            </button>
                            <a className="navbar-brand" href="#">CTOOL</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Accounts <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Connections</a></li>
                                <li><a href="#">Operators</a></li>
                                <li><a href="#">Miscelleneous</a></li>
                                <li><a href="#">Toolbox</a></li>
                                <li>
                                    <button className="sap-btn sap-btn-primary" onClick={this.showAddress.bind(this)}>Show Address</button>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className='sap-form'>
                    <section>
                        <form className="ctoolControllerForm">
                            <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
                                <div className='content'>
                                    <h3 className="page-heading">Create Account</h3>
                                    <div className="hr-extended"></div>

                                    <h4 className="breadcrumbs">Commercial Information</h4>
                                    aaa
                                    {commercialInformation}

                                </div>

                                <div ng-class="getTables" id="second-level">
                                    <div class='content'>

                                        <h4 className="breadcrumbs">Technical Details</h4>
                                        bbb
                                        {technicalContact}
                                    </div>

                                    <div className='content'>

                                        <h4  className="breadcrumbs">Account Name and Interfaces</h4>
                                        ccc
                                        {accountNames}

                                    </div>
                                    <div className='content'>
                                        <button className="sap-btn sap-btn-primary" ng-click="showNextTables(!showNextFlag)">Back</button>
                                        <button className="sap-btn sap-btn-primary" ng-click="create()">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                        </form>
                    </section>
                </div>


                <footer className="footer">
                    <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
                        <label>v6.6.6 &copy; CTOOL</label>
                    </div>
                    <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>

                </footer>

            </div>
        )
    }
    showAddress(){
        this.context.router.push('address');
    }
}

CreateAccount.contextTypes = {
    router: React.PropTypes.object.isRequired
};
