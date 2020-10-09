const setToken = async (req, res, next) => {
    try {
        const token = req.header('dbx-token')
        if (!token) throw new Error()
    
        req.token = token
        next()

    } catch (error) {
        res.status(401).send({ error: 'Not a valid token!' })
    }
}

module.exports = setToken