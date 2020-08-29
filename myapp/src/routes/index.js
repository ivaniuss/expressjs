const {Router} = require('express')
const router = Router()

router.get('/', (req, res) =>{
    const data = {
        "name": "ivan",
        "website" : "ivan.com"
    }
    res.json(data)
})

router.post('/', (req, res) =>{
    console.log(req.body);
    res.send('recieved')
})

module.exports = router