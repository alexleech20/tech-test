import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import logo from './logo-r.svg'
import styles from '../stylesheets/form.scss'

const FormExampleUnstackable = () => (
    <Container id='form-width' className='form-width mt-15'>
        <Form unstackable className='p-2 t-left'>
            <div className='w-50'>
                <img src={logo} alt="logo"/>
            </div>
            <h1>Example login screen</h1>
            <p>Getting started with Green.</p>
            <Form.Group className='pt-2'>
                <Form.Input label='Email Address' className='w-80 text-lg' />
            </Form.Group>
            <Form.Checkbox className='pt-1' label='Remember this device' />
            <div className='pt-2'>
                <Button type='submit'>Sign in</Button>
            </div>
        </Form>
    </Container>
)
export default FormExampleUnstackable