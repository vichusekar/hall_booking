import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './Header';


function Room() {
  let navigate = useNavigate()

  let handleBook = async (e) => {
    e.preventDefault()

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value
    }

    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/room`, data)
      if (res.status === 200) {
        toast.success(res.data.message)
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.error || error.response.data.message)
      console.log(error)
    }
  }
  return <>

    <div className='details-main'>
    <Header />
      <h2 className='booking-title'>Enter Details</h2>
      <div className='room-booking'>

        <Form onSubmit={handleBook}>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile" name='mobile' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label >Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" name='address' />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ borderRadius: '10px', marginLeft: '110px', width: '100px', cursor: 'pointer' }}>
            Submit
          </Button>
        </Form>
      </div>
    </div>

  </>
}

export default Room
