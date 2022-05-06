import { users } from "../database.js" // always add js when importing from files in your code

const deleteUsers = (req, res) => {
    const id = parseInt(req.params.id)

    // write your delete function

    // res.json(users)
}

export default deleteUsers