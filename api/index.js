const register = (req, res) => {
    try {
        const { first_name, last_name, email, isChecked } = req.body;
        const message = 
                isChecked 
                ? 
                `Hello ${first_name} ${last_name}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${email}`
                :
                `Hello ${first_name} ${last_name}, Thank you for signing up. Your account is now created`

    res.send({message, isChecked}); 
             
    } catch (e) {
        res.send(e.message).status(400)
    }
}

module.exports = {
    register
}