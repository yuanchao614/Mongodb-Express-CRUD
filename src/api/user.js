const express = require('express');
const User = require('../model/userModel')
const auth = require('../middleware/auth')

const router = express.Router();

// query all
router.get('/', auth, async (req, res) => {
    try {
        const results = await User.find()
        res.send(results)
    } catch (error) {
        res.send('error')
    }
})


// query one
router.get('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const result = await User.findById(id)
        res.send(result)
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
        const result = await user.save();
        res.send(result)
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
            const ressult = await User.updateOne({
                _id: id
            }, bodyParam);
            res.send(ressult)
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
        res.send(result)
    } catch (error) {
        res.send('error')
    }
})

module.exports = router