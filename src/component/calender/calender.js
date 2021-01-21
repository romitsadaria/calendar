import React from 'react'
import { history } from '../../_helpers/history';
const moment = require('moment');
let dayname = moment.weekdaysShort();

class Calender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            month: moment().month() + 1,
            year: moment().year(),
        }
    }

    handlechange(type) {
        if (type === "next") {
            if (this.state.month === 12) {
                this.setState({
                    month: 1,
                    year: this.state.year + 1
                });
            }
            else {
                this.setState({
                    month: this.state.month + 1
                });
            }
        }
        else {
            if (this.state.month === 1) {
                this.setState({
                    month: 12,
                    year: this.state.year - 1
                });
            }
            else {
                this.setState({
                    month: this.state.month - 1
                });
            }
        }
    };

    add_event(date) {
        history.push("/event/" + date);
    };


    render() {

        let blank_day = [];
        for (let i = 0; i < moment(this.state.year + "-" + this.state.month + "-01").startOf("month").format("d"); i++) {
            blank_day.push(
                <td className="p-3"><h5></h5></td>
            );
        }

        let day_in_month = [];
        for (let d = 1; d <= moment(this.state.year + "-" + this.state.month + "-01").daysInMonth(); d++) {
            day_in_month.push(
                <td className="p-4" style={{ cursor: 'pointer' }} onClick={() => this.add_event(this.state.year + "-" + (this.state.month.toString()).padStart(2, "0") + "-" + ((d).toString()).padStart(2, "0"))} >
                    <h5>{d}</h5>
                </td>
            );
        }

        var total_slot = [...blank_day, ...day_in_month];
        let rows = [];
        let cells = [];

        total_slot.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === total_slot.length - 1) {
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr key={i}>{d}</tr>;
        });

        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-5">
                        <button type="button" className="btn btn-primary" onClick={() => this.handlechange("pre")}>Previous</button>
                        <button type="button" className="btn btn-primary ml-3" onClick={() => this.handlechange("next")}>Next</button>
                    </div>
                    <div className="col-7">
                        <h5>{moment(this.state.month, 'MM').format('MMMM')} - {this.state.year}</h5>
                    </div>
                </div>
                <div className="row pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {dayname.map((day, key) => (
                                    <th index={key} className="bg-light">
                                        <h5>{day}</h5>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {daysinmonth}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Calender

