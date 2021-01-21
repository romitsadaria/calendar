import React, { Fragment, useState } from 'react'
import { history } from '../../_helpers/history';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { TimePicker, KeyboardDatePicker } from "@material-ui/pickers";
const moment = require('moment');

const user_list = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
];

export default function Events(props) {

    const { date } = props.match.params;
    const [eventname, setEventName] = useState("");
    const [statedate, setStartDate] = useState(moment(date));
    const [statetime, setStartTime] = useState(moment());
    const [enddate, setEndDate] = useState(moment(date));
    const [endtime, setEndTime] = useState(moment());
    const [participants, setParticipants] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(participants)
        console.log(eventname, statedate, statetime, enddate, endtime, description)
    }

    const handleback = () => {
        history.push("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row ">
                            <div className="col-6">
                                <h5>Add Event</h5>
                            </div>
                            <div className="col-6 text-right">
                                <button type="submit" className="btn btn-primary">Save</button>
                                <button type="button" className="btn btn-primary ml-3" onClick={handleback} >Close</button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-8">
                                <TextField
                                    required
                                    name="eventname"
                                    label="Event Name"
                                    variant="outlined"
                                    margin='dense'
                                    fullWidth
                                    onChange={e => setEventName(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <Fragment>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <KeyboardDatePicker
                                            autoOk
                                            variant="inline"
                                            inputVariant="outlined"
                                            label="Stat Date"
                                            value={statedate}
                                            fullWidth
                                            onChange={setStartDate}
                                            margin="dense"
                                            format="yyyy-MM-DD"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Fragment>
                            </div>
                            <div className="col-4">
                                <Fragment>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <TimePicker
                                            fullWidth
                                            variant="inline"
                                            inputVariant="outlined"
                                            margin="dense"
                                            label="Start Time"
                                            value={statetime}
                                            onChange={setStartTime}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Fragment>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <Fragment>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <KeyboardDatePicker
                                            autoOk
                                            variant="inline"
                                            inputVariant="outlined"
                                            label="End Date"
                                            value={enddate}
                                            onChange={setEndDate}
                                            fullWidth
                                            margin="dense"
                                            format="yyyy-MM-DD"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Fragment>
                            </div>
                            <div className="col-4">
                                <Fragment>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <TimePicker
                                            fullWidth
                                            variant="inline"
                                            inputVariant="outlined"
                                            margin="dense"
                                            label="End Time"
                                            value={endtime}
                                            onChange={setEndTime}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Fragment>
                            </div>
                        </div>
                        <div className="row pt-1">
                            <div className="col-8">
                                <Autocomplete
                                    multiple
                                    name="participants"
                                    options={user_list}
                                    getOptionLabel={(option) => option.name}
                                    filterSelectedOptions
                                    onChange={(e, value) => setParticipants(value)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Participants"
                                            margin="dense"
                                            placeholder="Participants"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <TextField
                                    multiline
                                    rows={5}
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                    margin='dense'
                                    fullWidth
                                    onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}


