import React, { Component } from 'react';
import TopHeader from '../components/TopHeader';
import { Grid } from 'semantic-ui-react'
import { List, Segment } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import axios from 'axios';

import MyDiaries from '../components/MyDiaries'
import CreateDiaries from '../components/CreateDiaries'
import DiaryEntries from '../components/DiaryEntries'

class Diary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myDiaries: [],

      selectedDiary: {
        _id: null,
        entries: []
      },

      diary: {
        name: '',
        description: ''
      },

      diaryEntry: {
        text: ''
      }
    }
  }

  componentDidMount() {
    this.getMyDiaries()
  }

  getMyDiaries = () => {
    // @todo GET Axios call
    
    this.setState({
      myDiaries: ['one', 'two']
    })
  }

  onChangeDiary = (event) => {
    let diary = this.state.diary
    diary[event.target.name] = event.target.value

    this.setState({
      diary
    })
  }

  onSubmitCreateDiary = (event) => {
    event.preventDefault()

    console.log(this.state.diary)

    // @todo POST Axios call
    // callback
    this.getMyDiaries()
  }

  onSelectDiary = (diaryId) => {
    // @todo GET Diary by ID Axios call
    this.setState({
      selectedDiary: {
        _id: 'abc',
        name: 'Selected Diary Name',
        description: 'Selected Diary Long Very Long Description',
        entries: [
          { text: 'Today was a good day!', created_at: '2018' }
        ]
      }
    })
  }

  onChangeDiaryEntry = (event) => {
    let diaryEntry = this.state.diaryEntry
    diaryEntry[event.target.name] = event.target.value

    this.setState({
      diaryEntry
    })
  }

  onSubmitDiaryEntry = (event) => {
    event.preventDefault()

    console.log(this.state.diaryEntry)

    // @todo POST Axios call
    // on callback
  }

  render() {
    return (
      <div>
        <TopHeader />

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <div style={{ marginLeft: '1rem' }}>
                <MyDiaries
                  myDiaries={this.state.myDiaries}
                  onSelectDiary={this.onSelectDiary}
                />

                <CreateDiaries
                  diary={this.state.diary}
                  onChangeDiary={this.onChangeDiary}
                  onSubmitCreateDiary={this.onSubmitCreateDiary}
                />
              </div>
            </Grid.Column>

            <Grid.Column width={12}>
              <div style={{ marginRight: '1rem' }}>
                <DiaryEntries
                  diary={this.state.selectedDiary}
                  onChangeDiaryEntry={this.onChangeDiaryEntry}
                  onSubmitDiaryEntry={this.onSubmitDiaryEntry}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Diary;
