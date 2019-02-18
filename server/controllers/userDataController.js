module.exports={
    getUserCards: (req, res) => {
        const db = req.app.get("db");
        console.log(req.session)
        db.users.getCards({id: req.session.user.id})
        .then(cards =>{
            // console.log(cards)
            res.status(200).send(cards)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "It is not working"})
            console.log(err)
        })

    }
}