const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();



router.get("/whatever", isLoggedIn, (req, res, next) => {
  console.log('in whatever',req.user)
  res.json({user:req.user})
})


module.exports = router;
