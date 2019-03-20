const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User')

console.log('yoyoyo', User)

router.get("/whatever", isLoggedIn, (req, res, next) => {
  console.log('zebra in whatever',req.user)
  User.find().then(allUsers=>{
    res.json({user:req.user, users:allUsers})
  })
})


module.exports = router;
