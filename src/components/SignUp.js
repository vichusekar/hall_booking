import React  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Header from './Header';
import * as yup from "yup";
import { useFormik } from 'formik'

function SignUp() {
  let navigate = useNavigate()

  let handleSignup = async (e) => {
    e.preventDefault()

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, data)
      if (res.status === 200) {

        toast.success(res.data.message)
        localStorage.setItem("user-info", JSON.stringify(res.data.newUser));
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.error || error.response.data.message)
      console.log(error)

    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      email: yup.string().matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Enter valid email').required("Required"),
      password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Enter valid password').required("Required"),

    })
  })


  return <>

    <div className='signup-main'>
      <Header />
      <div className='signup-title'>
        <h1>SignUp</h1>
      </div>
      <div className='signup-wrapper'>
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name} />
              {formik.touched.name && formik.errors.name ? (
                            <div className='error'>{formik.errors.name}</div>
                        ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                        ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password} />
              {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                        ) : null}
          </Form.Group>
          <p className='signin-toggle' onClick={() => navigate('/sign-in')} >Already you have an account?</p>
          <Button variant="primary" type="submit" style={{ borderRadius: '10px', marginLeft: '110px', width: '100px', cursor: 'pointer' }}>
            Register
          </Button>
        </Form>
      </div>
    </div>
  </>
}

export default SignUp
