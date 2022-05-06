import { users } from "../database.js" // always add js when importing from files in your code

const updateUsers = (req, res) => {
    const updateDataObj = req.body
    const id = parseInt(req.params.id)

    // write your update function

    // res.json(users)
}

export default updateUsers