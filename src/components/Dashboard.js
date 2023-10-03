import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Dashboard({ data, setData }) {
  let navigate = useNavigate()

  return <>
    <div className='booking-card'>
      {
        data.map((e, i) => {
          return <Card style={{ width: '18rem' }} className='bg-color'>
            <Card.Body>
              <Card.Text>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWSwuuOuDDbqrrQYc_1A8uL7iuuN3ya9sEoXfxfy3I4MTtaPZ_XYu0XR4ta-vxd3oagU&usqp=CAU" alt='loading' />
                <tr key={i} >
                  <p><b>{e.title}</b></p>
                  <p><b>Amenities</b>: {e.amenities}</p>
                  <p><b>Price</b>: {e.price}</p>
                </tr>
              </Card.Text>
              <Button variant='primary' onClick={() => navigate('/booking')}>Book</Button>
            </Card.Body>
          </Card>
        }
        )}

    </div>
  </>
}

export default Dashboard
