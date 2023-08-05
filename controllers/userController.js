const express = require('express')
const UserSchema = require('../models/userModel')

exports.RegisterUser = async (req,res) => {
    try {
        
        const {name } = req.body

        const user = UserSchema({
            name
        })

        await user.save()

        res.status(201).json({
            message : 'User Created',
            user,
            success : true
        })
    } catch (error) {
        
    }
}