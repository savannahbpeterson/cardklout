module.exports = {
    addNew: (req, res) => {
        // const {id: user_id = 5} = req.session.user
        const user_id = 5
        const {player_name, year, team, brand, sport, position, condition} = req.body
        const db = req.app.get("db")
        console.log(req.body)
        console.log(req.session.user)
        db.createCard({brand, player_name, sport, position, team, condition, user_id, year})
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send({errorMessage: "Oops! Something went wrong on our end."})
            console.log(err)
        })
    }
}