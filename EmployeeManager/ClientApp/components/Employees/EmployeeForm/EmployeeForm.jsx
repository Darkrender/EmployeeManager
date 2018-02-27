import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import { actionCreators } from '../../../store/reducers/EmployeeForm';
import { Calendar } from 'primereact/components/calendar/Calendar';
import { TabView, TabPanel } from 'primereact/components/tabview/TabView';
import moment from 'moment';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleHireDateChange = this._handleHireDateChange.bind(this);
        this._handleDateRangeChange = this._handleDateRangeChange.bind(this);

        this.state = {
            dateRange: [],
            paymentPreviewAmount: 0
        }
    }

    _handleChange(event) {
        let value = event.target.value;
        this.props.beginUpdateForm({
            [event.target.name]: value
        });
    }

    _handleHireDateChange(event) {
        const value = moment(event.value).format('MM-DD-YYYY');
        console.log(value);
        this.props.beginUpdateForm({
            hireDate: value
        });
    }

    _handleDateRangeChange(event) {
        this.setState({ dateRange: event.value });
        const startDate = event.value[0];
        const endDate = event.value[1];
        const selectedEmployee = this.props.selectedEmployee;

        console.log('Startd Date: ' + startDate);
        console.log('End Date: ' + endDate);
        console.log(selectedEmployee);

        if (startDate && endDate) {
            const timesPaid = this._getNumTimesPaid(startDate, endDate, selectedEmployee.payFrequency);

            const payForRange = selectedEmployee.paymentType === 0
                ? this._getSalariedPay(timesPaid, selectedEmployee.wage, selectedEmployee.payFrequency)
                : this._getHourlyPay(timesPaid, selectedEmployee.payFrequency, selectedEmployee.wage);

            console.log(payForRange);
            this.setState({ paymentPreviewAmount: payForRange });
        }
    }

    _getNumTimesPaid(startDate, endDate, payFrequency) {
        const weeksInRange = (((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1) / 7;
        return Math.floor(weeksInRange / payFrequency);
    }

    _getHourlyPay(timesPaid, payFrequency, wage) {
        const hoursPerWeek = 40;
        return (hoursPerWeek * wage * timesPaid * payFrequency);
    }

    _getSalariedPay(timesPaid, wage, payFrequency) {
        const numWeeksPaidInYear = Math.floor(52 / payFrequency);
        return ((wage / numWeeksPaidInYear) * timesPaid).toFixed(2);
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.selectedEmployee ? this.props.updateSelectedEmployee() : this.props.createEmployee();
    }

    _displaySubmitBtn() {
        if (this.props.selectedEmployee) {
            return (
                <a href="#" onClick={this._handleSubmit} className="update-employee-btn">
                    <i className="fa fa-plus"></i> <span> Update Employee</span>
                </a>
            );
        }

        return (
            <a href="#" onClick={this._handleSubmit} className="create-employee-btn">
                <i className="fa fa-plus"></i> <span> Create Employee</span>
            </a>
        );
    }

    render() {
        const { id, wage, payFrequency, jobTitle, hireDate, name, paymentType, selectedEmployee } = this.props;

        const items = [
            { label: 'Employee Form' },
            { label: 'Preview Payment' },
        ];

        return (
            <div className="employee-form-container card">
                <TabView>
                    <TabPanel header="Employee Form" leftIcon="fa-calendar">
                        <div className="card-body employee-form-body">
                            <form className="employee-form" onSubmit={this._handleSubmit}>
                                <input name="name" placeholder="Enter a name..." value={name} onChange={this._handleChange} />
                                <input name="jobTitle" placeholder="Enter a job title..." value={jobTitle} onChange={this._handleChange} />
                                <input name="wage" placeholder="Enter a wage..." value={wage} onChange={this._handleChange} />
                                <select name="payFrequency" value={payFrequency} onChange={this._handleChange}>
                                    <option disabled value={0}>Select a Pay frequency...</option>
                                    <option value={1}>Weekly</option>
                                    <option value={2}>Bi-Weekly</option>
                                    <option value={4}>Monthly</option>
                                </select>

                                <select name="paymentType" value={paymentType} onChange={this._handleChange}>
                                    <option disabled>Select a payment type...</option>
                                    <option value={0}>Salaried</option>
                                    <option value={1}>Hourly</option>
                                </select>

                                <Calendar value={new Date(hireDate)} onChange={this._handleHireDateChange}></Calendar>
                            </form>
                        </div>
                    </TabPanel>

                    <TabPanel disabled={selectedEmployee ? false : true} header="Payment Preview" rightIcon="fa-print">
                        <label>Select a date range to preview:
                            <Calendar value={this.state.dateRange} selectionMode="range" onChange={this._handleDateRangeChange}></Calendar>
                        </label>

                        <p>Ammount employee will receive for this range: $ {this.state.paymentPreviewAmount}</p>
                    </TabPanel>
                </TabView>                

                <div className="employee-form-footer card-footer">
                    {this._displaySubmitBtn()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { wage, payFrequency, jobTitle, hireDate, name, paymentType } = state.employeeForm;
    const { selectedEmployee } = state.employees;
    return { wage, payFrequency, jobTitle, hireDate, name, paymentType, selectedEmployee };
}

export default connect(mapStateToProps, actionCreators)(EmployeeForm);