import React from 'react'
import { Header, Segment, List } from 'semantic-ui-react'

const MyDiaries = (props) => (
    <Segment>
        <Header as='h3'>My Diaries</Header>

        {
            props.myDiaries.length > 0
                ?
            <List divided>
                {props.myDiaries.map(diary => (
                    <List.Item key={diary._id}>
                        <List.Content>
                            <List.Header as='a' onClick={props.onSelectDiary.bind(this, diary._id)}>Snickerdoodle</List.Header>
                            An excellent companion
                        </List.Content>
                    </List.Item>
                ))}
            </List>
                :
            <p>You do not have any diaries yet.</p>
        }
        
            
    </Segment>
)

export default MyDiaries