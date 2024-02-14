import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';

function Home({data, setData}) {

    let navigate = useNavigate()

    return <>
    <Header />
    <div className='booking-card container-fluid' style={{display:'flex', flexDirection:'column'}}>
      {
        data.map((e, i) => {
          return <Card >
            <Card.Body style={{display:'flex', flexDirection:'row', marginLeft:'40px'}}>
            <img src={e.image} alt='loading' onClick={()=>navigate('/booking')} />
              <Card.Text> 
                <tr key={i} >
                  <p><b>{e.title}</b></p>
                  <p><b>Amenities</b>: {e.amenities}</p>
                  <p><b>Price</b>: {e.price}</p>
                </tr>
              </Card.Text>
              
            </Card.Body>
            {/* <Button variant='primary' onClick={() => navigate('/booking')}>Book</Button> */}
          </Card>
        }
        )}

    </div>
        {/* <div className='home-main'>
            <div className='box-card'>
                <Card style={{ width: '18rem' }} >
                    <Card.Body>
                        <Card.Title>Hall Booking</Card.Title>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcwdhiL-NEC5LsojTA5NmUXCrZBNjPxE5OQ&usqp=CAU" alt='loading' />
                        <Button variant="primary" style={{ marginTop: '10px', marginLeft: '60px' }} onClick={() => navigate('/booking')}>Book Here</Button>
                    </Card.Body>
                </Card>
            </div>
        </div> */}
    </>
}

export default Home
