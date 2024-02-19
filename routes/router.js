const express = require('express')
const UserModel = require('../models/User')
const mongoose = require('mongoose')
const { dbUrl } = require('../config/dbConfig')
const RoomModel = require('../models/Room')
const { hashPassword, comparePassword, createToken } = require('../authentication/Auth')
const nodemailer = require('nodemailer')

mongoose.connect(dbUrl)

const router = express.Router()

router.post('/sign-up', async (req,res) => {
    try {
        let user = await UserModel.findOne({email: req.body.email})
        if(!user)
        {
            req.body.password = await hashPassword(req.body.password)
            let newUser = await UserModel.create(req.body)
            newUser.save()
            res.status(200).send({message: 'User Created Successfully'})
        }
        else
        {
            res.status(400).send({message:`User with ${req.body.email} already exists`})
        }
    } catch (error) 
    {
        res.status(500).send({message: 'Internal Sver Error', error: error?.message})
    }
})



router.post('/sign-in', async (req,res) => {
    try {
       let user = await UserModel.findOne({email: req.body.email})
       if(user)
       {
        if(await comparePassword(req.body.password, user.password) )
        {
            let token = await createToken(user)
            res.status(200).send({message: 'Login Successfully', token})
        }
       }
       else{
        res.status(500).send({message: 'Invalid Credentials'})
       }
    } catch (error) {
        console.log(error)
        res.status(500).send({message: 'Internal Server Error', error: error?.message})
    }
})

router.post('/room', async (req,res) => {
    try {
        let newRoom = await RoomModel.create(req.body)
        newRoom.save()
        res.status(200).send({message:"Room Booked Succesfully"})
    } catch (error) {
        res.status(500).send({message:'Internal Serer Error', error: error?.message})
    }
})

router.get('/booked/:id', async (req,res) => {
    try {
        let details = await RoomModel.findOne({_id: req.params.id})
        if(details)
        {
            res.status(200).send({message:'User Fetched Successfully', details})
        }
        else
        {
            res.status(400).send({message:'No one is booked'})
        }
    } catch (error) {
        res.status(500).send({message:'Internal Server Error',error: error?.message})
    }
})

router.post('/forgot-password/:id', async (req, res) => {
    try {
        const oldUser = await UserModel.findOne({ email: req.body.email })
        if (oldUser) {
            const passwordLink = `https://incomparable-brigadeiros-321042.netlify.app/reset-password/${oldUser._id}`

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rajasekarvignesh093@gmail.com',
                    pass: 'xacc elgo llit itnq'
                }
            });

            var mailOptions = {
                from: 'vigneshmsho093@gmail.com',
                to: req.body.email,
                subject: 'Reset your password ',
                text: passwordLink,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.status(200).send({ message: 'Email Sent Successfully' })

        }

        else {
            res.status(400).send({ message: `User with ${req.body.email} doesn't exists`, error: error?.message })
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error?.message })

    }
})

router.post('/reset-password/:id', async (req, res) => {
    try {
        let user = await UserModel.findById({ _id: req.params.id })
        if (user) {

            user.password = await hashPassword(req.body.password)
            let token = await createToken(user)
            user.save()
            res.status(200).send({ message: 'Password Changed Successfuly', token })

        }
        else {
            res.status(400).send({ message: 'user not exists' })
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error?.message })
    }
})


module.exports = router
