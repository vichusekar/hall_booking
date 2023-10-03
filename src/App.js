import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Room from './components/Room'
import Dashboard from './components/Dashboard'

function App() {

  let [data, setData] = useState([
    {
      title: "Hall 1",
      amenities: "TV, Wi-Fi, Pool",
      price: "1000/hr",
    },
    {
      title: "Hall 2",
      amenities: "TV, Wi-Fi, Pool",
      price: "2000/hr",
    },
    {
      title: "Hall 3",
      amenities: "TV, Wi-Fi",
      price: "1500/hr",
    },
    {
      title: "Hall 4",
      amenities: "TV",
      price: "1200/hr",
    }
])
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/booking' element={<Room />} />
        <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
