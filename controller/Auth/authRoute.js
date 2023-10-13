module.exports.Login = (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({
        success: 'true',
        data: [email, password]
    })
}