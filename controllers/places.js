const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
})


// GET /places


module.exports = router
