import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Room() {
  let navigate = useNavigate()

  let handleBook = async (e) => {
    e.preventDefault()

    let data = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value,
      date: e.target.date.value

    }

    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/room`, data)
      if (res.status === 200) {
        toast.success(res.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return <>

<h2 className='booking-title'>Enter Details</h2>
    <div className='room-booking'>
      
      <Form onSubmit={handleBook}>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name='name' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter mobile" name='mobile' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" name='address' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Choose date" name='date' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>

  </>
}

export default Room
