/**
 * Created by Sachin on 2/5/2017.
 */
import React from 'react';
import './App.css';

export default class CreateAccount extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.state.commercial = {};
        this.state.account = {};
        this.state.technical = {};
        this.state.commercial.users = [
            {
                name: 'Adam Gilli',
                id: 1
            },
            {
                name: 'Ricky Punter',
                id: 2
            },
            {
                name: 'Optimus Prime',
                id: 3
            },
            {
                name: 'Peter Parker',
                id: 4
            }
        ];


        this.state.commercial.company = ['10 GRAD(37669)', '100 BEST(39551)', '10DUKE (38660)', '118811 (39258)'];
        this.state.commercial.billingLocation = ["Mobile 365 Inc.", "Mobile 365 South Africa.", "Mobileway Australia", "Mobileway China", "Mobileway India"];
        this.state.commercial.serviceLevel = ['Standard', 'Premium'];
        this.state.commercial.trafficType = ['General', 'Campaign', 'Low Latency', 'Time Sensitive'];
        this.state.account.interfaceType = ['HTTP', 'SMPP', 'SMTP'];
        this.state.country = ['India', 'United States Of America', 'Russia', 'Germany', 'China'];
        this.state.requesterName = 'Venkat';
        this.state.technical.contacts = [
            {
                id: 100,
                contactName: 'xor',
                name: 'Xoriant',
                email: 'email@xoriant.com',
                country: this.state.country[0],
                mobilePhoneNumber: '12324564789',
                directPhoneNumber: '123456789'
            },
            {
                id: 101,
                contactName: 'CTS',
                name: 'Cognizant',
                email: 'email@Cognizant.com',
                country: this.state.country[4],
                mobilePhoneNumber: '123456789',
                directPhoneNumber: '12345645'
            },
            {
                id: 102,
                contactName: 'TCS',
                name: 'Tata Consultancy Services',
                email: 'email@tcs.com',
                country: this.state.country[2],
                mobilePhoneNumber: '1234567890',
                directPhoneNumber: '678967'
            },
            {
                id: 103,
                contactName: 'acc',
                name: 'Accenture',
                email: 'email@Accenture.com',
                country: this.state.country[3],
                mobilePhoneNumber: '9876543211',
                directPhoneNumber: '8967890'
            },
            {
                id: 104,
                contactName: 'cyb',
                name: 'Cybage',
                email: 'email@Cybage.com',
                country: this.state.country[5],
                mobilePhoneNumber: '98765437654',
                directPhoneNumber: '54411653'
            }
        ];

        this.state.existingAccounts = ['118118_Bulk_HTTP', '118119_Bulk_HTTP', '1181520_Bulk_HTTP', '118121_Bulk_HTTP'];



    }

    render() {

        var listUsers = this.state.commercial.users.map(function (user) {
            return (
                <option key={user.name} value={user.name}>{user.name}</option>
            );
        });

        var listCompany = this.state.commercial.company.map(function (company) {
            return (
                <option key={company} value={company}>{company}</option>
            );
        });

        var listBilingLocation = this.state.commercial.billingLocation.map(function(location){
            return (
                <option key={location} value={location}>{location}</option>
            );
        }) 

        var listServiceLevel = this.state.commercial.serviceLevel.map(function(level){
            return (
                <option key={level} value={level}>{level}</option>
            );
        }) 

        var listTrafficType = this.state.commercial.trafficType.map(function(traffic){
            return (
                <option key={traffic} value={traffic}>{traffic}</option>
            );
        }) 

        var listExistingAccounts = this.state.existingAccounts.map(function(account){
            return (
                <option key={account} value={account}>{account}</option>
            );
        }) 

        var listInterface =  this.state.account.interfaceType.map(function(type){
            return (
                <option key={type} value={type}>{type}</option>
            );
        }) 

        return (
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

                                    <div>
                                        <table className="CTOOL-table table table-stripped table-condensed form-group hr-extended">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Requester</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>{this.state.requesterName}</label></td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Account Manager</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                <select className="form-control" id="sel1">
                                                                    {listUsers}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Company</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                                                <select className="form-control" id="sel2">
                                                                    {listCompany}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Billing Location</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                                <select className="form-control" id="sel3">
                                                                    {listBilingLocation}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Service Level</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                                                                <select className="form-control" id="sel4">
                                                                    {listServiceLevel}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Traffic Type</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                                <select className="form-control" id="sel5">
                                                                    {listTrafficType}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Revenue Sharing</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>No</label></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <button className="sap-btn sap-btn-primary" ng-click="showNextTables(!showNextFlag)">Next</button>
                                        <br />
                                    </div>

                                    <table className="CTOOL-table table table-stripped table-condensed form-group hr-expanded" ng-if="showNextFlag">
                                        <tbody>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Requester</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.requester</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Account Manager</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.acctMgr.name</label></td>
                                            </tr>

                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Company</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.company</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Billing Location</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.billingLocation</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Service Level</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.serviceLevel</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Traffic Type</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.trafficType</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Revenue Sharing</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>No</label></td>
                                            </tr>

                                        </tbody>
                                    </table>



                                </div>


                                <div ng-className="getTables" id="second-level">
                                    <div className='content'>

                                        <h4 className="breadcrumbs">Technical Details</h4>
                                        <table className="CTOOL-table table table-condensed table-stripped form-group hr-extended">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Exsiting Company Contacts</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                <select className="form-control" id="sel6"
                                                                    ng-change="updateTechnicalDetails()">
                                                                    <option>a</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                                <label>or  </label>
                                                                <a className="custom-anchor">
                                                                    &nbsp; create new
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Name</label><sup className="required">&nbsp;*</sup></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12">
                                                                <input className="form-control" type="text" name="name" required="Please enter name." ng-model="json.contact.name"></input>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-1 col-xs-12"><label>(NEW)</label></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Email</label><sup className="required">&nbsp;*</sup></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="email" name="email" ng-model="json.contact.email" required></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Country</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <select className="form-control" id="sel7" ng-model="json.country">
                                                                    <option>a</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Mobile Phone Number</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="text" ng-model="json.contact.mobilePhoneNumber"></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='content'>

                                        <h4 className="breadcrumbs">Account Name and Interfaces</h4>
                                        <table className="CTOOL-table table table-stripped table-condensed form-group ">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Technical Name</label><sup className="required">&nbsp;*</sup></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="text" required=""
                                                                    ng-model="json.techName" name="technicalName"></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Commercial Name</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="text" ng-model="json.commercialName"></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Existing Accounts</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-3 col-md-3 col-sm-9 col-xs-12">
                                                                <select className="form-control" id="sel8">
                                                                    {listExistingAccounts}
                                                                </select>
                                                            </div>
                                                            <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                                <label>(for reference only)</label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Interface</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                                <select className="form-control" id="sel9">
                                                                    {listInterface}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className='content'>
                                        <button className="sap-btn sap-btn-primary" ng-click="showNextTables(!showNextFlag)">Back</button>
                                        &nbsp;&nbsp;
                                        <button className="sap-btn sap-btn-primary" ng-click="create()">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
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
    showAddress() {
        this.context.router.push('address');
    }
}

CreateAccount.contextTypes = {
    router: React.PropTypes.object.isRequired
};
