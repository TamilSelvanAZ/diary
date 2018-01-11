import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import history from '../history';
import '../styles/login.css';

class WelcomeComp extends Component {
  render() {
    return (
      <div className="CenterMaincontent">
        <Header size='huge'>Welcome To Your Diary</Header>
        <Button primary onClick={() => { history.push("/diary") }}>Open Diary</Button>
      </div>
    );
  }
}

export default WelcomeComp;
