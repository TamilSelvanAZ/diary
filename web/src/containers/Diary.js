import React, { Component } from 'react';
import TopHeader from '../components/TopHeader';
import { Grid } from 'semantic-ui-react'
import axios from 'axios';

import MyDiaries from '../components/MyDiaries'
import CreateDiaries from '../components/CreateDiaries'
import DiaryEntries from '../components/DiaryEntries'

const host = 'http://localhost:5000'

class Diary extends Component {
  constructor(props) {
    super(props)
//set states
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

  //get initial call for diarys list all
  getMyDiaries = () => {
    axios.get(host + '/diarys')
      .then((response) => {
        this.setState({
          myDiaries: response.data
        })
      })
      .catch((error) => {

      });
  };

  //get diary value from form
  onChangeDiary = (event) => {
    let diary = this.state.diary
    diary[event.target.name] = event.target.value

    this.setState({
      diary
    })
  }

  //post call for add new diary
  onSubmitCreateDiary = (event) => {
    event.preventDefault()

    axios.post(host + '/diarys', this.state.diary)
      .then((response) => {
        this.getMyDiaries();

        this.setState({
          diary: {
            name: '',
            description: ''
          }
        })
      })
      .catch((error) => {
        console.log(error)
      });

  }

  //get call for single diary list
  onSelectDiary = (diaryId) => {
    axios.get(host + '/diarys/' + diaryId)
      .then((response) => {
        this.setState({
          selectedDiary: response.data
        })
      })
      .catch((error) => {

      });
  };

  //get entries value from form
  onChangeDiaryEntry = (event) => {
    let diaryEntry = this.state.diaryEntry
    diaryEntry[event.target.name] = event.target.value

    this.setState({
      diaryEntry
    })
  }

//post call for add new entries
  onSubmitDiaryEntry = (event) => {
    event.preventDefault()

    axios.post(host + '/diarys/' + this.state.selectedDiary._id, this.state.diaryEntry)
      .then(response => {
        let selectedDiary = this.state.selectedDiary
        selectedDiary.entries.push({ text: this.state.diaryEntry.text})
        
        this.setState({
          selectedDiary,
          diaryEntry: {
            text: ''
          }
        })
      })
      .catch(error => {

      });
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
                  diaryEntry={this.state.diaryEntry}
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
