import React from 'react'
import { Button, Form, Card } from 'react-bootstrap'


const Create = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter Title..." />
        
      </Form.Group>     

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="email" placeholder="Enter Image URL..." />
        
      </Form.Group>    

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description..." />
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    
  );
}

export default Create
