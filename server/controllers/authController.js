const bcrypt = require("bcryptjs")
module.exports ={
    // register: async(req, res) =>{
    //     const {username, password} = req.body;
    //     const db = req.app.get('db');
    //     const {session} = req;
    //     const salt = bcrypt.genSaltSync(10);
    //     const hash = bcrypt.hashSync(password, salt)
    // },
    login: async (req, res) => {
        console.log('login endpoint hit')
        const {username, password} = req.body
        const {session} = req;
        const db = req.app.get("db")
        let user = await db.users.login({user: username})
        // console.log({user})
        user = user[0];
        if (!user) {
            return res.sendStatus(418)
        }
        // const foundUser = bcrypt.compareSync(password, user.password)
        const foundUser = user;
        console.log(foundUser)
        if(foundUser) {
            delete user.password;
            session.user = user;
            res.status(200).send(session.user)
        }else{
            res.sendStatus(401)
        }
    }
    // getUser: (req, res) => {
    //     const {user} = req.session;
    //     // console.log({user});
    //     if(user) {
    //         res.status(200).send(user)
    //     }else{
    //         res.sendStatus(401)
    //     }
    // }
} 