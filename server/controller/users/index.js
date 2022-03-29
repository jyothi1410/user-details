var express = require('express');
const User = require('../../model/users');
var router = express.Router();

router.post('/create-user', (req, res) => {
    var newData = new User(req.body);
    newData.save((err, data) => {
        if (err) res.json({ message: "Error", err })
        else res.json({ message: "user created", data })
    })
})

router.get('/get-users', (req, res) => {
    User.find({}, (err, data) => {
        if (err) res.json({ message: "Error", err })
        else res.json({ message: 'Sucess', data })
    })
})

router.get('/get-user/:id', (req, res) => {
    var input = req.params;
    User.find({ userId: input.id }, (err, data) => {
        if (err) res.json({ message: "Error", err })
        else res.json({ message: 'Sucess', data })
    })
})

router.delete('/delete-user/:id', (req, res) => {
    var input = req.params;
    User.deleteOne({ userId: input.id }, (err, data) => {
        if (err) res.json({ message: "Error", err })
        else res.json({ message: 'Sucess', data })
    })
})

router.put('/update-user/:id', (req, res) => {
    var input = req.params;
    var body = req.body;
    User.findOneAndUpdate({ userId: input.id }, body, (err, data) => {
        if (err) res.json({ message: "Error", err })
        else res.json({ message: 'Sucess', data })
    })
})

module.exports = router;
