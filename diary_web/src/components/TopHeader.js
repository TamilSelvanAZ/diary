import React from 'react'
import { Header, Segment,Button } from 'semantic-ui-react'
import history from '../history';

const TopHeader = () => (
  <Segment clearing>
    <Header as='h2' floated='left'>
      Daily Diary
    </Header>

    <Header as='h2' floated='right'>
      <Button primary onClick={() => { history.push("/") }}>Close</Button>
    </Header>
  </Segment>
)

export default TopHeader