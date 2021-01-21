import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { history } from './_helpers/history';
import PublicRoute from './_routers/PublicRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Calender from './component/calender/calender';
import Events from './component/calender/events';



const theme = createMuiTheme({
  palette: {
    primary: { main: '#4285F4' },
    secondary: { main: '#4285F4' },
    danger: { main: '#ac2925' },
  },
});

class App extends Component {

  render() {
    return (
      <div className="h-100">
        <MuiThemeProvider theme={theme}>
          <Router history={history} >
            <Switch>
              <PublicRoute exact path="/" component={Calender} />
              <PublicRoute exact path="/event/:date" component={Events} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App
