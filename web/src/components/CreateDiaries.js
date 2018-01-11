import React from 'react'
import { Form, Header, Segment, Button } from 'semantic-ui-react'

const CreateDiaries = (props) => (
    <Segment>   
        <Form onSubmit={props.onSubmitCreateDiary}>
            <Header as='h3'>Create new Diary</Header>

            <Form.Field>
                <input 
                    placeholder='Diary Title' 
                    name="name"
                    value={props.diary.name}
                    onChange={props.onChangeDiary}
                    required={true}
                />
            </Form.Field>

            <Form.Field>
                <input 
                    placeholder='Diary Description' 
                    name="description" 
                    value={props.diary.description}
                    onChange={props.onChangeDiary}
                    required={true}
                />
            </Form.Field>

            <Button type='submit' color='green'>Submit</Button>
        </Form>
    </Segment>
)

export default CreateDiaries