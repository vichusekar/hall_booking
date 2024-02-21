import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './Header';
import * as yup from "yup";
import { useFormik } from 'formik'

function ForgotPassword() {

    let navigate = useNavigate()
    let params = useParams()

    let handlePassword = async (e) => {
        e.preventDefault()

        let data = {
            email: e.target.email.value
        }

        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/forgot-password/${params.id}`, data)
            if (res.status === 200) {
                toast.success(res.data.message)
                navigate('/main')
            }

        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
            console.log(error)
        }

    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Enter valid email').required("Email is Required"),

        })
    })
    return <>
        <div className='forgot-password-main'>
            <Header />
            <div className='forgot-title'>
                <h2>Forgot Password</h2>
            </div>
            <div className='fpassword-wrapper'>
                <Form onSubmit={handlePassword} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter registered email" name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                        ) : null}
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ borderRadius: '10px', marginLeft: '100px', width: '100px', cursor: 'pointer' }} >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </>
}

export default ForgotPassword
