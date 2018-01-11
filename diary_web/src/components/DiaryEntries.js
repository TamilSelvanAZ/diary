import React from 'react'
import { Form, Header, Segment, Button, List } from 'semantic-ui-react'

const DiaryEntries = (props) => (
    <Segment>
        {
            props.diary._id !== null
                ?
            <div>
                <Header as='h2'>
                    {props.diary.name}
    
                    <Header.Subheader>
                        {props.diary.description}
                    </Header.Subheader>
                </Header>
    
                <Form onSubmit={props.onSubmitDiaryEntry}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='Entry text' 
                            name='text' 
                            onChange={props.onChangeDiaryEntry}
                            style={{width: '30rem'}}
                            required={true}
                        />
                        
                        <Form.Button type="submit" content='Submit' color='green' />
                    </Form.Group>
                </Form>
    
                <Header as='h3'>Entries</Header>
    
                {
                    props.diary.entries.length > 0
                        ?
                    <List divided>
                        {props.diary.entries.map((entry, i) => (
                            <List.Item key={i}>
                                <List.Content>
                                    <List.Header>{entry.text}</List.Header>
                                    {entry.created_at}
                                </List.Content>
                            </List.Item>
                        ))}
                    </List>
                        :
                    <p>No entry added yet.</p>
                }
                
            </div>
                :
            <p>No diary selected.</p>
        }
    </Segment>
)

export default DiaryEntries