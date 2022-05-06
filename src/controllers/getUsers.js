import { users } from "../database.js" // always add js when importing from files in your code

const getUsers = (req, res) => {
    res.json(users)
}

export default getUsers