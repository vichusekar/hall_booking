import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Room from './components/Room'
import Header from './components/Header'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Main from './components/Main'

function App() {

  let [data, setData] = useState([
    {
      title: "Hall 1",
      amenities: "TV, Wi-Fi, Pool",
      price: "1000/hr",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKDkpiJXFuxHVEL30yP-LdRV3l9YTlCY_1w&usqp=CAU"
    },
    {
      title: "Hall 2",
      amenities: "TV, Wi-Fi, Pool",
      price: "2000/hr",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RPJ6LiDtFOC06jkjs3cDiw4RwlJpQThhZQ&usqp=CAU"
    },
    {
      title: "Hall 3",
      amenities: "TV, Wi-Fi",
      price: "1500/hr",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaX8ea4Ip9kX35p8Lm40lYqnTQ6iyhVIHBXg&usqp=CAU"
    },
    {
      title: "Hall 4",
      amenities: "TV",
      price: "1200/hr",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUTu69GAhP8k3XlUJ2u8PHb0yzhF_M1LsNw&usqp=CAU"
    },
    {
      title:'Hall 5',
      amenities:'LED Prompter',
      price:'5000/hr',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsnPw3xG3HeB3AuMGL-KQdGQIhBQJOS7VsA&usqp=CAU"
    }
])
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} />} />
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/booking' element={<Room />} />
        <Route path='/header' element={<Header />} />
        <Route path='/main' element={<Main />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:id' element={<ResetPassword />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
