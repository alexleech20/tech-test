import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import '../stylesheets/form.scss'

const FormExampleInverted = () => (
    <Segment inverted className="form-width t-left top-15" id='m-auto'>
        <Form inverted id='#t-black'>
            <h2>Example login screen</h2>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Email Address' />
            </Form.Group>
            <Form.Checkbox label='Remember this device' />
            <Button type='submit' id='t-black'>Sign in</Button>
        </Form>
    </Segment>
)
export default FormExampleInverted