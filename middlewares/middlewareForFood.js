module.exports = (req, rest, next) => {

    req.sayfa = parseInt(req.query.sayfa) && parseInt(req.query.sayfa) > 0 ? parseInt(req.query.sayfa) : 1
    req.limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 4
    req.atlama = (req.sayfa - 1) * req.limit
    req.arama = req.query.s
    next()
}