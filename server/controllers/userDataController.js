module.exports={
    getUserCards: (req, res) => {
        const db = req.app.get("db");
        db.users.getCards({id: req.session.user.id})
        .then(cards =>{
            res.status(200).send(cards)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "It is not working"})
            console.log(err)
        })

    },
    deleteCard: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        db.deleteCard(params.id).then(() => {
            db.users.getCards({id: req.session.user.id}).then((cards) => {
                res.status(200).send(cards)
            })
        }).catch((err) => {
            res.status(500).send({errorMessage: "Something went wrong. Unable to delete card"})
            console.log(err)
        })
    },
    editCard: (req, res) => {
        
    }
} 