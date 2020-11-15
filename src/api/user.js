const express = require('express');
const User = require('../model/userModel')
const auth = require('../middleware/auth');

const router = express.Router();

// query all
router.get('/', auth, async (req, res) => {
    const { pageSize, pageIndex } = req.query;
    console.log(req.query);
    try {
        const userData = await User.find().limit(Number(pageSize)).skip(Number(pageIndex) * Number(pageSize));
        const total = await User.count();

        res.send({
            data: userData,
            total,
            msg: 'Query user data successfully'
        })
    } catch (error) {
        res.send('error')
    }
})


// query one
router.get('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const result = await User.findById(id)
        res.send({
            data: result,
            msg: 'Query data according to user id succeeded!'
        })
    } catch (error) {
        res.send('error')
    }
})

// create one
router.post('/', auth, async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        passWord: req.body.passWord,
        email: req.body.email
    })
    try {
        const data = await user.save();
        res.send({
            data: {
                userName: data.userName,
                email: data.email,
                userId: data._id
            },
            msg: 'User created successfully!'
        })
    } catch (error) {
        res.send(error)
    }
})

// update one
router.put('/:id', auth, async (req, res) => {
    const {
        id
    } = req.params;
    const bodyParam = req.body;
    try {
        const findUser = await User.findById(id)
        if (findUser) {
            const data = await User.updateOne({
                _id: id
            }, bodyParam);
            res.send({
                data: '',
                msg: 'Update user successfully!'
            })
        } else {
            res.send(findUser)
        }
    } catch (error) {
        res.send(error)
    }
})

// delete one
router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const result = await User.deleteOne({
            _id: id
        })
        res.send({
            data: '',
            msg: 'Delete user successfully!'
        })
    } catch (error) {
        res.send('error')
    }
})

module.exports = router