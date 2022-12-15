var menu = require('../menu.json')
const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    let response = {}
    response.sayfa = req.sayfa
    response.limit = req.limit
    response.atlama = req.atlama
    var data = req.arama ? menu.filter(menuItem => menuItem.isim.toLocaleLowerCase().includes(req.arama.toLocaleLowerCase())) : menu
    response.veri = data.slice(req.atlama, req.atlama + req.limit)
    res.send(response)
})

module.exports = router;