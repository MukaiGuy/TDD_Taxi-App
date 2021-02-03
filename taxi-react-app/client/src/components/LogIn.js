// client/src/components/LogIn.js

import React from 'react';
import { Formik } from 'formik'; // new
import {
  Breadcrumb, Button, Card, Col, Form, Row
} from 'react-bootstrap'; // changed
import { Link } from 'react-router-dom';

function LogIn (props) {
  return (
    <Row>
      <Col lg={12}>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Log in</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Card.Header>Log in</Card.Header>
          <Card.Body>
                      {/* new */}
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={console.log}
                >
                {({
                    handleChange,
                    handleSubmit,
                    values
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId='username'>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                        name='username'
                        onChange={handleChange}
                        value={values.username}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                        name='password'
                        onChange={handleChange}
                        type='password'
                        value={values.password}
                        />
                    </Form.Group>
                    <Button block type='submit' variant='primary'>Log in</Button>
                    </Form>
                )}
           </Formik>
          </Card.Body>
          <p className='mt-3 text-center'>
            Don't have an account? <Link to='/sign-up'>Sign up!</Link>
          </p>
        </Card>
      </Col>
    </Row>
  );
}

export default LogIn;