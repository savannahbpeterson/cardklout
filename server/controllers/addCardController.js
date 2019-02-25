module.exports = {
    addNew: (req, res) => {
        console.log(req.session)
        const {id: user_id = 5} = req.session.user
        // const user_id = 5
        const {player_name, year, team, brand, sport, position, condition, front_url, back_url} = req.body
        const db = req.app.get("db")
        console.log(req.body)
        db.createCard({brand, player_name, sport, position, team, condition, user_id, year, front_url, back_url})
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send({errorMessage: "Oops! Something went wrong on our end."})
            console.log(err)
        })
    }
}